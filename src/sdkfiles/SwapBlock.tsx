import {CrossChainTrade, EvmWeb3Public, Injector, OnChainTrade, PriceTokenAmount} from "rubic-sdk";
import React, {useState} from "react";
import useAsyncEffect from "use-async-effect";

interface SwapBlockProps {
    trade?: OnChainTrade | CrossChainTrade | null;
    loading: boolean;
    address: string | null;
    onLoadingChange: (loading: boolean) => void;
}

const handleTrade = async (trade: OnChainTrade | CrossChainTrade | undefined | null, needApprove: boolean, approveHandle: () => void) => {
    try {

        if (!trade) return
        
        const blockchainAdapter: EvmWeb3Public = Injector.web3PublicService.getWeb3Public(trade.from.blockchain);
        const gasPrice:any = await blockchainAdapter.getGasPrice()
        console.log('gas price', gasPrice)
        if (!needApprove || trade?.from.address === '0x0000000000000000000000000000000000000000') {
            const result = await trade?.swap({
                onConfirm: (hash: string) => {
                    alert(`Swap transaction ${hash} was sent.`);
                },
            });
            console.log(result);
        } else {

            const tx = {
                onTransactionHash: () => {
                    alert(`Approve transaction was sent.`);
                },
                gasPrice
            }
            
            const result = await trade?.approve(tx);
            approveHandle()
            console.log(result);
        }
    } catch (err) {
console.log(err);
    }
}


const SwapBlock = ({ trade, loading, address, onLoadingChange }: SwapBlockProps) => {
    console.log("trade, loading, address, onLoadingChange",trade, loading, address);
    
    const [needApprove, setApprove] = useState(true);
    // if (!trade) {
    //     alert('No trade object.');
    //     return null;
    // }

    useAsyncEffect(async () => {
        const isApproved = await trade?.needApprove() || false;
        setApprove(isApproved);
    }, [trade]);




    // return <Box marginTop={ '20px' } style={ { 'display': 'flex', 'gap': '20px' } }>
    //     <Button disabled={ loading } onClick={ onCalculate } >Calculate trade</Button>
    //     <TextField type={ 'text' } disabled={ true } value={ getAmount(trade) } />
    // </Box>
    return address ? <div>
        <button   onClick={ () => handleTrade(trade, needApprove, () => setApprove(false)) } >
            { needApprove ? 'Approve' : 'Swap' }
        </button>
    </div> : null;
}

export default SwapBlock;
