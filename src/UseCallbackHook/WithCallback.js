import React, { useCallback, useState } from "react";
import MemoChildWithCallback from "./MemoChildWithCallback";

export const WithCallback = () => {
    const [parentData, setParentData] = useState(0);
    const [childData, setChildData] = useState(0);

    const changeParentData = () => {
        setParentData(Math.random());
    }

    const changeChildData = useCallback(() => {
        setChildData(Math.random());
    }, [childData]);

    return (
        <>
            <h2>useCallback</h2>
            <button type="button" onClick={changeParentData}>Change Parent</button>
            <div>{parentData}</div>
            <MemoChildWithCallback childData={childData} changeChildData={changeChildData}/>
        </>
    )
}