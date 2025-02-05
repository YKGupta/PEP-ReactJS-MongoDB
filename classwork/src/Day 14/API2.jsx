import { useState, useEffect } from "react";
import axios from 'axios';

const API = () => {
    const [resourceType, setresourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((data) => setItems(data.data))
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
