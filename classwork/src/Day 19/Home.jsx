import { useLoaderData } from "react-router-dom";

const Home = () => {

    const data = useLoaderData();
    const user = data.results[0];

    return (
        <div>
            Home Page <br />
            User = {JSON.stringify(user)} <br />
        </div>
    )
}

export default Home;