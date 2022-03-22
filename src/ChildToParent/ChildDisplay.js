import React, { useState } from 'react';

export const ChildDisplay = ({handleChildData}) => {
    
    return (
        <>
           <input type="text" onChange={(event) => handleChildData(event.target.value)}></input>
        </>
    )
}