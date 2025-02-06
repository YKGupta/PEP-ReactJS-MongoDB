import { useEffect, useRef, useState } from "react";

const PrevCount = () => {

    const [ count, setCount ] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        countRef.current = count;
    }, [count]);

    return (
        <div>
            Current Value of Count = {countRef.current}
            <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}

export default PrevCount;