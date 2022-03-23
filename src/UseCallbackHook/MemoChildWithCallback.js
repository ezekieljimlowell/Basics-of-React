import React from "react";

const MemoChildWithCallback = ({childData, changeChildData}) => {
    console.log("Render check for useCallback");

    return (
        <>
            <button type="button" onClick={changeChildData}>Change Child</button>
            <div>{childData}</div>
        </>
    )
}

function equalityFunction(previous, current) {
    return previous.childData === current.childData && 
        previous.changeChildData === current.changeChildData;
}

export default React.memo(MemoChildWithCallback, equalityFunction);