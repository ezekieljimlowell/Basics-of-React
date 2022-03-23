import React, { useContext } from "react";
import { ChildNestedTwo } from "./ChildNestedTwo";
import { ContextData } from "./ContextData";

export const ChildNestedOne = () => {
    const data = useContext(ContextData);

    return (
        <>
            {data.status ? <div><button type="button" onClick={data.logout}>Logout</button><div></div>Successfully login</div> : 
                <div><button type="button" onClick={data.login}>Login</button><div>Please Login</div></div>}
            <ChildNestedTwo />
        </>
    )
}