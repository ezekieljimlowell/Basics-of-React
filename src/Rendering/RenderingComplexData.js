import React, { useState } from 'react';

export const RenderComplexData = () => {
    const [arr] = useState(["apple", "banana", "grapes", "jackfruit"]);
    const [obj] = useState({animal: "Dog", material: "Water", tree: "Tamarind"});
    const [fun] = useState(() => "function")

    return (
        <>
            <h3>Render complex datas</h3>
            <div>{arr.map(data => <div key={data}>{data}</div>)}</div>
            <div>{Object.values(obj).map(val => Object.keys(obj).map(property => <div key={property}>{property}: {val}</div>))}</div>
            <div>{fun}</div>
        </>
    )
}