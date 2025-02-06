import { useRef } from "react";

const UseRefHook = () => {

    const input = useRef(null);

    const handleFocus = () => {
        input.current.focus();
    }

    return (
        <div>
            <input type="text" name="text" id="text" ref={input} />
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default UseRefHook;