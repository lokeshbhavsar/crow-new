
import React from 'react';
import {BLOCKCHAIN_NAME, BlockchainName} from "rubic-sdk";

interface BlockchainSelectorProps {
    type: 'from' | 'to';
    onSelectBlockchain: (event: BlockchainName | null) => void;
    value: BlockchainName;
    loading: boolean;
}

const blockchains = [
    {
        value: BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
        label: 'BNB Chain'
    },
    {
        value: BLOCKCHAIN_NAME.POLYGON,
        label: 'Polygon'
    },
    {
        value: BLOCKCHAIN_NAME.ETHEREUM,
        label: 'Ethereum'
    },
    {
        value: BLOCKCHAIN_NAME.ARBITRUM,
        label: 'Arbitrum'
    },
];

const BlockchainSelector = ({ type, onSelectBlockchain, value, loading }: BlockchainSelectorProps) => {
    const label = type === 'from' ? 'From blockchain: ' : 'To blockchain';
    const selectBlockchain = (blockchain: any) => { onSelectBlockchain(blockchain) };

    return (
        <div>

            <select disabled={ loading } value={ value }  defaultValue={ blockchains[0].value } onChange={ selectBlockchain }>
                { blockchains.map(blockchain => (<option key={blockchain.value} value={blockchain.value}>{blockchain.label}</option>))}
            </select>
        </div>
    );
}

export default BlockchainSelector;
