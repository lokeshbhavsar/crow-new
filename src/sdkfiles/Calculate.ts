import { BLOCKCHAIN_NAME, BlockchainName, CHAIN_TYPE, CrossChainTrade, OnChainTrade, SDK, LifiTrade, AlgebraTrade, OpenOceanTrade } from "rubic-sdk";

import { configuration } from "../constants/sdk-config";


export interface FormProps { }

export const calcalculate = async (fromTokenInfo,toTokenInfo,amount) => {
    console.log("innet",fromTokenInfo,toTokenInfo,amount);
    
    const sdk = await SDK.createSDK(configuration);
    
    try {
        const newConfig: any = {
            ...configuration,
            walletProvider: {
                [CHAIN_TYPE.EVM]: {
                    core: window.ethereum,
                    address: ""
                }
            }
        };
        if (sdk?.updateConfiguration) {

            await sdk?.updateConfiguration(newConfig);
        }
    } catch (er) {
        console.log("er", er);
    }

    if (sdk) {
   
        const wrappedTrades = await (sdk.crossChainManager.calculateTrade(fromTokenInfo, String(amount), toTokenInfo))
        const bestTrade: any = wrappedTrades[0];
        console.log("hereee", bestTrade?.trade?.toTokenAmountMin.toFixed());
        return  bestTrade?.trade?.toTokenAmountMin.toFixed()

    }
}

