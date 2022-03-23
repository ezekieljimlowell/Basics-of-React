import React, { useContext } from "react";
import { ContextData } from "./ContextData";

export const ComponentOutOfProviderWithConsumer = () => {
    return (
        <>
            <ContextData.Consumer>
                {value => <>
                    <div>{value.count}</div>
                </>}
            </ContextData.Consumer>
        </>
    )
}

export const ComponentOutOfProviderWithUseContext = () => {
    const data = useContext(ContextData)

    return (
        <>
            <div>{data.count}</div>
        </>
    )
}