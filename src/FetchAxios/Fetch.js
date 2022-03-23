import React, { useEffect, useState } from "react";

export const Fetch = () => {
    const [userData, setUserData] = useState([]);
    const [postedData, setPostedData] = useState("");

    const URL = "https://jsonplaceholder.typicode.com/users";
    const POST_URL = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        fetch(POST_URL).then(res => res.json()).then(data => setUserData(data));
    })

    useEffect(() => {
        fetch(POST_URL, {
            method: "POST",
            body: JSON.stringify({
                userId: 11,
                id: 101,
                title: "Lorem ipsum",
                body: "New title object added"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json()).then(data => setPostedData(data));
    }, [postedData])

    return (
        <>
            <h4>Fetch using window fetch</h4>
            {userData.length > 0 && userData.map(data => <div key={data.title}>{data.title}</div>)}
            <h4>Post method</h4>
            <div>{postedData.userId}</div>
            <div>{postedData.id}</div>
            <div>{postedData.title}</div>
            <div>{postedData.body}</div>
        </>
    )
}