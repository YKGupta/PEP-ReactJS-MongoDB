import { useEffect, useState } from "react";

const State = () => {

    const [ obj, setObj ] = useState({
        name: "Chuha",
        designation: "Chef",
        salary: 1000
    });

    useEffect(() => {
        setObj(prev => ({
            ...prev, salary: prev.designation === "Chef" ? 1000 : 2000
        }))
    }, [obj.designation]);

    return (
        <div>
            <p>Name = {obj.name}</p>
            <p>Designation = {obj.designation}</p>
            <p>Salary = ${obj.salary}</p>
            <button onClick={() => setObj({ ...obj, designation: obj.designation === "Chef" ? "Coder" : "Chef"})}>Change to {obj.designation === "Chef" ? "Coder" : "Chef"}</button>
        </div>
    )
}

export default State;