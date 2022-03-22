import React, { useEffect, useState } from "react";

export const AsynchronousData = () => {
    const [promiseData, setPromiseData] = useState("");
    const [asyncData, setAsyncData] = useState("");
    const [timerData, setTimerData] = useState("");

    setTimeout(() => {
        setTimerData(989938399);
    }, 2000);
    
    const timeDelay = async () => {
        let promise1 = new Promise(resolve =>
            setTimeout(() => {
                resolve(100)
            }, 1000)
        )
        return promise1;
    }

    useEffect(async () => {
        setAsyncData(await timeDelay());
    })
    const promiseString = () => new Promise(resolve => resolve("Promise resolved"));
    promiseString().then(data => setPromiseData(data));


    return (
        <>
            <h4>Asynchronous data</h4>
            <div>{promiseData}</div>
            <div>{asyncData}</div>
            <div>{timerData}</div>
        </>
    )
}