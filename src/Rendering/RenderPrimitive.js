import React, { useState } from 'react';

export const RenderPrimitive = () => {
    const [str] = useState("String");
    const [num] = useState(100);
    const [booleon] = useState(true);
    const [symbol] = useState(Symbol(20));
    const [a] = useState(null);
    const [b] = useState(undefined);

    return (
        <>
            <h4>Render primitive data</h4>
            <div>{str}</div>
            <div>{num}</div>
            <div>{booleon && <span>Booleon is not displayable {booleon}</span>}</div>
            <div>{symbol}</div>
            <div>{a} null cannot be displayable</div>
            <div>{b} undefined cannot be displayable</div>
        </>
    )
}