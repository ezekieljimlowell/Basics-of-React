import React from "react";
import { ContextData } from "./ContextData";

export const ChildNestedTwo = () => {
    /*const data = useContext(ContextData);
    console.log(data.changeData);*/

    return (
        <ContextData.Consumer>
            {value => {
                return <>
                    <button type="button" onClick={value.changeCount}>Change</button>
                    <div>{value.count}</div>
                </>
            }}
        </ContextData.Consumer>

    )
}