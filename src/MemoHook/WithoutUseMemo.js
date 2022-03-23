import React, { useState } from "react";

const addition = (a,b) => {
    console.log("Rendering without use memo"); //unnessary render
    return a+b;
}

export const WithoutUseMemo = () => {
    const [count, setCount] = useState(0);
    addition(3,4);

    const increment = () => {
        setCount(count+1);
    }
    return (
        <>
            <h3>Without Use memo</h3>
            <button type="button" onClick={increment}>Increment</button>
            <div>{count}</div>
        </>
    )
}