import { useState } from "react";

const Conditional = () => {

    const [ loggedIn, setLoggedIn ] = useState(false);

    return (
        loggedIn ? <p>You are logged in</p> : <button onClick={() => setLoggedIn(true)}>Login</button>
    )
}

export default Conditional;