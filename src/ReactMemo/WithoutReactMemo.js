import React, { useState } from "react";
import { NormalChild } from "./NormalChild";

export const WithoutReactMemo = () => {
    const [data, setData] = useState(0);
    const [number, setNumber] = useState(0);

    const decrement = () => {
        setData(data-1);
    }

    const increment = () => {
        setNumber(number+1);
    }

    return (
        <>
            <h3>Without React.Memo</h3>
            <button type="button" onClick={decrement}>Decrement</button>
            <button type="button" onClick={increment}>Increment</button>
            <div>{data}</div>
            <NormalChild number={number}/>
        </>
    )
}