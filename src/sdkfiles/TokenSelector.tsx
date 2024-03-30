
import React from 'react';


export interface TokenSelectorProps {
    onChange: (el: any) => void;
    type: 'from' | 'to';
    tokens: { name: string; address: string; }[];
    loading: boolean;
}

const TokenSelector = ({ onChange, type, tokens, loading }: TokenSelectorProps) => {
    const label = type === 'from' ? 'From token: ' : 'To token';

    return (
        <div >
            <select onChange={ onChange } disabled={ loading } defaultValue={tokens[0].address}>
                {tokens.map(token => (<option key={token.address+token.name} value={token.address}>{token.name}</option>))}
            </select>
        </div>
    );
}

export default TokenSelector;
