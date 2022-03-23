import React, { useRef, useState } from "react";

export const ArrayOfInputReference = () => {
    const [arrayOfInputs, setArrayOfInputs] = useState([]);

    const ArrayRef = useRef([]);

    const addInputs = () => {
        let addedInputs = [...arrayOfInputs];
        addedInputs.push({ id: Math.random() });
        setArrayOfInputs(addedInputs);
    }

    return (
        <>
            <h2>Refernce of array of inputs</h2>
            <button type="button" onClick={addInputs}>Add Inputs</button>
            {arrayOfInputs.length > 0 && arrayOfInputs.map((data, index) => <div key={data.id}>
                <input type="text" ref={el => ArrayRef.current[index] = el}></input>
                <button type="button" onClick={() => ArrayRef.current[index].focus()}>Edit</button>
            </div>)}
        </>
    )
}