import React, { useState } from 'react';
import MemoChild from './MemoChild';

export const WithReactMemo = () => {
    const [memoData, setMemoData] = useState(0);
    const [needToSend, setNeedToSend] = useState(0);

    const increment = () => {
        setMemoData(memoData+1);
    }

    const decrement = () => {
        setNeedToSend(needToSend+1);
    }


    return (
        <>
            <h3>Using React.memo</h3>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
            <div>{memoData}</div>
            <MemoChild needToSend={needToSend}/>
        </>
    )
}