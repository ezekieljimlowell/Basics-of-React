import React, { useEffect, useState } from "react";
import axios from "axios";

export const AxiosFetch = () => {
    const [userName, setUserName] = useState([]);
    const URL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        axios.get(URL).then(data => setUserName(data.data));
    })

    return (
        <>
            <h4>Axios</h4>
            {userName.length > 0 && userName.map(user => <div key={user.id}>{user.username}</div>)}
        </>
    )
}