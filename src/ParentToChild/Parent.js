import React, { useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
    const [parentData, setParentData] = useState("");

    return (
        <>
            <h3>Parent to child</h3>
            <input type="text" onChange={(event) => setParentData(event.target.value)} name="parentData" value={parentData}></input>
            <Child parentData={parentData} setParentData={setParentData}/>
        </>
    )
}