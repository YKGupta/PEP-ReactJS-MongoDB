import { useRef } from "react";

const Form = () => {

    const textRef = useRef(null);

    return (
        <form onSubmit={() => alert(textRef.current.value)}>
            <input type="text" name="text" id="text" ref={textRef} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form;