import React, { useEffect, useLayoutEffect, useState } from "react";

export const EffectHooks = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos/?id=1").then(response => response.json()).
                then(todos => setData(todos))
        }, 3000);
    }, [])

    return (
        <>
            <h2>Effect</h2>
            <div style={{ background: "pink" }}>
                {/*<div>effect</div>*/}
                {data.length > 0 && data.map(todo => <div key={todo.title}>{todo.title}</div>)}
            </div>
        </>
    )
}