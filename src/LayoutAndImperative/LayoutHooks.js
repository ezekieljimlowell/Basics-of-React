import React, { useEffect, useLayoutEffect, useState } from "react";

export const LayoutHooks = () => {
    const [data, setData] = useState([]);
    const [effectData, setEffectData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos/?id=5").then(response => response.json()).
                then(todos => setEffectData(todos))
                console.log("effect")
        }, 3000);
    }, [])

    useLayoutEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos/?id=2").then(response => response.json()).
                then(todos => setData(todos))
                console.log("Layout")
        }, 3000);
    }, [])

    return (
        <>
            <h2>Layout effect</h2>
            <div style={{ background: "blue" }}>
                {/*<div>Layout effect</div>*/}
                {data.length > 0 && data.map(todo => <div style={{background: "red"}} key={todo.id}>{todo.title}</div>)}
                {effectData.length > 0 && effectData.map(todo => <div key={todo.id}>{todo.title}</div>)}
            </div>
        </>
    )
}