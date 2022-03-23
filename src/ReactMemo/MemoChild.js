import React from "react";

const MemoChild = ({needToSend}) => {
    console.log("rendering React.memo child");

    return (
        <>
            <div>{needToSend}</div>
        </>
    )
}

function equalityFunction(previousData, currentData) {
    return previousData.needToSend === currentData.needToSend;
}

export default React.memo(MemoChild, equalityFunction)
