import { useEffect, useState } from 'react';

const Counter = () => {

    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState("Keep going!");

    useEffect(() => {
        setText(count < 0 ? "Negative count!" : count >= 10 ? "Great! You have reached a high number!" : "Keep going!");
    }, [count]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1>Counter: {count}</h1>
            <p style={{
                color: count < 0 ? 'red' : count >= 10 ? 'green' : 'black',
                marginBottom: '20px'
            }}>{text}</p>
            <div>
                <button onClick={() => setCount(count + 1)} disabled={count >= 15}>Increment</button>
                <button onClick={() => setCount(count - 1)} disabled={count <= -10}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;