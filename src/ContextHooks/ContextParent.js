import React, { useState } from "react";
import { ChildNestedOne } from "./ChildNestedOne";
import { ComponentOutOfProviderWithConsumer, ComponentOutOfProviderWithUseContext } from "./ChildNestedThree";
import { ContextData } from "./ContextData";

export const ContextParent = () => {
    const [status, setStatus] = useState(false);
    let [count, setCount] = useState(0);

    const login = () => {
        setStatus(true);
    }

    const logout = () => {
        setStatus(false);
    }

    const changeCount = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h2>Use context</h2>
            <ContextData.Provider value={{status:status, login: login, logout: logout, count: count, changeCount: changeCount}}>
                <ChildNestedOne />
            </ContextData.Provider>
            <ComponentOutOfProviderWithConsumer />
            <ComponentOutOfProviderWithUseContext />
        </>
    )
}

