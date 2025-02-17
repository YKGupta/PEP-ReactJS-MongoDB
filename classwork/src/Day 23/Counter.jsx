const React = require('react');
const { useState } = require('react');

const Counter = () => {

    const [ count, setCount ] = useState(0);

    return (
        <div>
            <p>Count = {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    )
}

module.exports = Counter;