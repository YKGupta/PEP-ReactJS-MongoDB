import { useMemo, useState } from "react";

const UseMemoExample = () => {

    const [ number, setNumber ] = useState(0);
    const [ dark, setDark ] = useState(false);

    const memoCalc = useMemo(() => {
        return longFunction(number);
    }, [number]);

    return (
        <div style={{ backgroundColor: dark ? "black" : "white"}}>
            UseMEMO
            <hr />
            <input type="number" name="number" id="number" value={number} onChange={(ev) => setNumber(Number.parseInt(ev.target.value))} />
            <h2>Calculation: {memoCalc}</h2>
            <button onClick={() => setDark(prev => !prev)}>Toggle</button>
        </div>
    )
}

const longFunction = (num) => {
    for(let i = 0; i < 1e9; i++);
    return num;
};

export default UseMemoExample;