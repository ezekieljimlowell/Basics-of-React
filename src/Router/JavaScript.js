import React from "react";

export const JavaScript = () => {
    return (
        <>
            <h5>JavaScript</h5>
            JavaScript is used to add functionality to web elements. There are three main parts in JS.
            <ol>
                <li>Synchronous JS</li>
                <li>Asynchronous JS</li>
                <li>Window and Document Object Model</li>
            </ol>
            <p>
                Synchronous JS unblocks only when cuurent task is completed. Examples: basic codes, functions,
                loops, conditions are Synchronous. Asynchronous JS execution starts in parallel without
                blocking. But execution finishese one by one. Examples of Asynchronous are timers,
                promises and thenables. Async and await has synchronous behavior but works asynchronously.
                Await wait for promise to resolve and async function always return promise.
                Window object have many inbuilt methods such as alert, console, print, prompt, open, etc.
                By using document object model(DOM), we can take elements, set attributes, text content, append
                child and also give styles.
            </p>
            <p>
                There are 2 types of data types. Primitive and complex data types.
                Primitive datatypes consist of number, booleon, string, symbol,
                undefined, and null. Complex data types consist of arrays,
                object and functions.
            </p>
        </>
    )
}