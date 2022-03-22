import React, { useState } from 'react';

export const Child = ({parentData, setParentData}) => {
    //setParentData("greater");

    return (
        <>
            <h4>{parentData}</h4>
        </>
    )
}