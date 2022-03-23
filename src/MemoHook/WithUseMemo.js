import React, { useMemo, useState } from "react";

const addition = (a, b) => {
    console.log("Rendering with use memo"); //unnessary render
    if(!isNaN(parseInt(a)+parseInt(b))) {
        console.log( (Number(a) + Number(b)));
    }
    return Number(a) + Number(b);
}

export const WithUseMemo = () => {
    const [count, setCount] = useState(0);
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const memoizedResult = useMemo(() => addition(input1, input2), [input1, input2]);

    const increment = () => {
        setCount(count + 1);
    }
    
    return (
        <>
            <h3>With useMemo</h3>
            <input type="text" name="input1" value={input1} onChange={(e) => setInput1(e.target.value)}></input>
            <input type="text" name="input2" value={input2} onChange={(e) => setInput2(e.target.value)}></input>
            <button type="button" onClick={increment}>Increment</button>
            <div>{count}</div>
            <div>{memoizedResult}</div>
        </>
    )
}