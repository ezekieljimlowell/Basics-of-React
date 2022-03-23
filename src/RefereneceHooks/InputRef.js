import React, { useRef } from "react";

export const InputRef = () => {
    const reference = useRef();

    const referInput = () => {
        reference.current.focus();
    }

    return (
        <>
            <button type="button" onClick={referInput}>Refer Input</button>
            <input type="text" ref={reference}></input>
        </>
    )
}