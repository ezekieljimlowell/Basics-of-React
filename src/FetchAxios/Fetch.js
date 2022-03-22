import React, { useEffect, useState } from "react";

export const Fetch = () => {
    const [userData, setUserData] = useState([]);

    const URL = "https://jsonplaceholder.typicode.com/users";
    const POST_URL = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        fetch(URL).then(res => res.json()).then(data => setUserData(data));
        fetch(POST_URL, {
            method: "POST",
            body: JSON.stringify({
                userID: 11,
                id: 101,
                title: "Lorem ipsum",
                body: "New title object added"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    })


    return (
        <>
            <h4>Fetch using window fetch</h4>
            {userData.length > 0 && userData.map(data => <div key={data.id}>{data.name}</div>)}
        </>
    )
}