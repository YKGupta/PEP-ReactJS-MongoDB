import { useState, useEffect } from "react";

const API = () => {
    const [resourceType, setresourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.log(error));
    }, [resourceType]);
    return (
        <div>
            <button onClick={() => setresourceType("posts")}>Get Posts</button>
            <button onClick={() => setresourceType("comments")}>Get Comments</button>
            <button onClick={() => setresourceType("users")}>Get Users</button>
            <p>You are viewing {resourceType}</p>
            <ul>
                {
                    items.map((val, ind) => {
                        return <li key={ind}>{JSON.stringify(val)}</li>;
                    })
                }
            </ul>
        </div>
    );
}

export default API;
