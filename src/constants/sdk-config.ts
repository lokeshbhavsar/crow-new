import { BLOCKCHAIN_NAME, Configuration } from 'rubic-sdk';

export const configuration: Configuration = {
    rpcProviders: {
        [BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN]: {
            rpcList: ['https://bsc-dataseed.binance.org/', 'https://rpc.ankr.com/bsc'],
        },
        [BLOCKCHAIN_NAME.POLYGON]: {
            rpcList: ['https://polygon-rpc.com', 'https://polygon.llamarpc.com'],
        },
        [BLOCKCHAIN_NAME.ETHEREUM]: {
            rpcList: ["https://mainnet.infura.io/v3/f30ddaad312549deb43cf77f6bbf91bf"],
        },
        [BLOCKCHAIN_NAME.ARBITRUM]: {
            rpcList: ["wss://arbitrum-one-rpc.publicnode.com"],
        },
        [BLOCKCHAIN_NAME.SOLANA]: {
            rpcList: ["https://go.getblock.io/749fcd57cc524ed9b4103f415b0b2d02"]
        }
     
    }
}
