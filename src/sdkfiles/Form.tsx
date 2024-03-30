import { BLOCKCHAIN_NAME, BlockchainName, CHAIN_TYPE, CrossChainTrade, OnChainTrade, SDK, LifiTrade, AlgebraTrade, OpenOceanTrade } from "rubic-sdk";
import React, { useEffect, useState } from "react";
import TokenSelector from "./TokenSelector";
import AmountInput from "./AmountInput";
import BlockchainSelector from "./BlockchainSelector";
import styles from './Form.module.scss';
import { tokens } from "../constants/tokens";
import CalculateBlock from "./CalculateBlock";
import useAsyncEffect from "use-async-effect";
import { configuration } from "../constants/sdk-config";
import LoginBlock from "./LoginBlock";
import SwapBlock from "./SwapBlock";

export interface FormProps { }

const Form = ({ }: FormProps) => {
    const [amount, setAmount] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [address, setAddress] = useState<string | null>("");

    const [fromBlockchain, setFromBlockchain] = useState<BlockchainName>(BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN);
    const [toBlockchain, setToBlockchain] = useState<BlockchainName>(BLOCKCHAIN_NAME.POLYGON);

    const [fromFilteredTokens, setFromFilteredTokens] = useState<any>(tokens.filter(el => el.blockchain === fromBlockchain));
    const [toFilteredTokens, setToFilteredTokens] = useState<any>(tokens.filter(el => el.blockchain === toBlockchain));

    const [fromToken, setFromToken] = useState<any | null>(fromFilteredTokens[0]);
    const [toToken, setToToken] = useState<any | null>(toFilteredTokens[0]);

    const [sdk, setSdk] = useState<SDK | null>(null);

    const enterFrom = (address: string) => {
        const token = tokens.find(el => el.address === address && el.blockchain === fromBlockchain);
        setFromToken(token);
    };

    const enterTo = (address: any) => {
        const token = tokens.find(el => el.address === address && el.blockchain === toBlockchain);
        setToToken(token);
    };

    const enterAmount = (el: any) => {
        const amount = el?.target?.value;
        setAmount(amount);
    }

    const onLogin = (address: string | null) => {
        setAddress(address);
    }

    const selectFromBlockchain = (el: any) => {
        setFromBlockchain(el);
    }

    const selectToBlockchain = (el: any) => {
        setToBlockchain(el);
    }


    const myfun = async () => {
        if (sdk) {
            // const wrappedTrades = await (sdk.crossChainManager.calculateTrade(fromToken, String(amount),{ address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", blockchain: BLOCKCHAIN_NAME.ETHEREUM }))
            let tt: any = {
                address: "0x0000000000000000000000000000000000000000",
                blockchain: "POLYGON",
                name: "MATIC"
            }
            let amt: any = 20
            let ft: any = {
                address:
                    "0x0000000000000000000000000000000000000000",
                blockchain: BLOCKCHAIN_NAME.ETHEREUM,
                name: "ETHER"
            }
            //[803504, 16887100000000]
            const wrappedTrades = await (sdk.crossChainManager.calculateTrade(ft, String(amt), tt))
            const bestTrade: any = wrappedTrades[0];
            console.log("hereee", bestTrade?.trade?.toTokenAmountMin.toFixed());

        }
    }

    useEffect(() => {
        // myfun()
    }, [sdk])

    const setTradeData = async () => {
        if (sdk) {
            setLoading(true);
            try {
                if (fromBlockchain === toBlockchain) {

                    console.log("han ji", fromToken, amount, toToken)

                    const wrappedTrades = await (sdk.onChainManager.calculateTrade(fromToken, String(amount), toToken))
                    const bestTrade = wrappedTrades.filter((el: any) => !(el instanceof LifiTrade) && !(el instanceof AlgebraTrade) && !(el instanceof OpenOceanTrade) && !('error' in el))[0];
                    if (bestTrade instanceof OnChainTrade) {
                        console.log(bestTrade)
                        setTrade(bestTrade as OnChainTrade);
                    }
                } else {
                    console.log("han ji", fromToken, amount, toToken)
                    // const wrappedTrades = await (sdk.crossChainManager.calculateTrade(fromToken, String(amount),{ address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", blockchain: BLOCKCHAIN_NAME.ETHEREUM }))
                    let ft = {
                        address: "0x0000000000000000000000000000000000000000",
                        blockchain: "POLYGON",
                        name: "MATIC"
                    }
                    let amt = 20000
                    let tt = {
                        address:
                            "0x0000000000000000000000000000000000000000",
                        blockchain: "BSC",
                        name: "BNB"
                    }
                    const wrappedTrades = await (sdk.crossChainManager.calculateTrade(fromToken, String(amount), toToken))
                    const bestTrade = wrappedTrades[0];
                    console.log("hereee", bestTrade);

                    setTrade(bestTrade.trade);
                }
            } finally {
                setLoading(false);
            }
        }
    }

    const [trade, setTrade] = useState<CrossChainTrade | OnChainTrade | null>(null);

    useEffect(() => {
        const filteredTokens = tokens.filter(el => el.blockchain === fromBlockchain);
        setFromFilteredTokens(filteredTokens);
        setFromToken(filteredTokens[0]);
    }, [fromBlockchain]);

    useEffect(() => {
        const filteredTokens = tokens.filter(el => el.blockchain === toBlockchain);
        setToFilteredTokens(filteredTokens);
        setToToken(filteredTokens[0]);
    }, [toBlockchain]);

    useAsyncEffect(async () => {
        setSdk(await SDK.createSDK(configuration));
        setLoading(false);
    }, [])

    useAsyncEffect(async () => {
        setLoading(true);
        try {

            const newConfig: any = {
                ...configuration,
                walletProvider: {
                    [CHAIN_TYPE.EVM]: {
                        core: window.ethereum,
                        address
                    }
                }
            };
            if (sdk?.updateConfiguration) {

                const res = await sdk?.updateConfiguration(newConfig);
                console.log("res");

            }
        } finally {
            setLoading(false);
        }
    }, [address, sdk])

    return (
        <div>

            <p>lokesh</p>
            <div className={styles.formBlock}>
                <BlockchainSelector
                    type='from'
                    value={fromBlockchain}
                    onSelectBlockchain={selectFromBlockchain}
                    loading={loading}
                />
                {
                    fromFilteredTokens.length
                        ? <TokenSelector
                            tokens={fromFilteredTokens}
                            type={'from'}
                            onChange={enterFrom}
                            loading={loading}
                        />
                        : "sd"
                }
            </div>
            <button onClick={myfun}>click me</button>
        </div>
    );
}

export default Form;
