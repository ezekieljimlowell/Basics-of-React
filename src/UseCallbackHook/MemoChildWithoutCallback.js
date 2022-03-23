import React from "react";

const MemoChildWithoutCallback = ({dec, decrement}) => {
    console.log("Rendering without useCallback but with React.memo");
    //here we are passing function handler as props each time when any data is changed say inc then decrement function object also created new
    // So we have to memoize function decrement in WithoutUseCallback component

    return (
        <>
            <button type="button" onClick={decrement}>Decrement</button>
            <div>{dec}</div>
        </>
    )
}

function equalityFunction(previousData, currentData) {
    console.log(previousData.decrement === currentData.decrement)
    return previousData.dec === currentData.dec && previousData.decrement === currentData.decrement;
}

export default React.memo(MemoChildWithoutCallback, equalityFunction);
