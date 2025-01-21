import Child from "./Child";

const Parent = () => {
    return (
        <div>
            Hey this is the parent
            <Child title="Nope" />
        </div>
    )
}

export default Parent;