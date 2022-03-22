import React, { useState } from 'react';
import { ChildDisplay } from './ChildDisplay';

export const ParentInput = () => {
    const [childData, setChildData] = useState("");

    const handleChildData = (dataFromChild) => {
        setChildData(dataFromChild);
    }

    return (
        <>
            <h3>Child to Parent</h3>
            <div>{childData}</div>
            <ChildDisplay handleChildData={handleChildData}/>
        </>
    )
}