import React, { useCallback, useState } from "react";
import MemoChildWithoutCallback from "./MemoChildWithoutCallback";


export const WithoutUseCallback = () => {
    const [inc, setInc] = useState(0);
    const [dec, setDec] = useState(0);

    const increment = () => {
        setInc(inc + 1);
    }

    const decrement = () => {
        setDec(dec - 1);
    }

    return (
        <>
            <h3>Without useCallback but with React.memo</h3>
            <button type="button" onClick={increment}>Increment</button>
            <div>{inc}</div>
            <MemoChildWithoutCallback dec={dec} decrement={decrement}/>
        </>
    )
}