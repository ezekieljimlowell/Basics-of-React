import React, { useImperativeHandle, useRef } from "react";

export const ImperativeHandle = () => {
    const refer = useRef(null);

    useImperativeHandle(refer, () => ({
        color: () => {
            const input = document.getElementById("input");
            input.style.background = "gray";
        },
        size: () => {
            const input = document.getElementById("input");
            input.style.width = "600px"
        }
    }))

    return (
        <>
            <button type="button" onClick={() => {
                refer.current.color();
                refer.current.size();
                }}>Custom refer</button>
            <input type="text" ref={refer} id="input"></input>
        </>
    )
}