import React from "react";

export const NormalChild = ({number}) => {
    console.log("Rendering without React.Memo"); //onclick decrement button NormalChild unnecessarily rendering

    return (
        <>
            <div>{number}</div>
        </>
    )
}