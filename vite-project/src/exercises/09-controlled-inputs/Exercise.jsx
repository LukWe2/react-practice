import { useState } from "react";

function LiveInput(){

    const[name, setName] = useState("");

    function handleChange(event){

        setName(event.target.value);
    }

    return(

        <div>
            <p>Hello {name}!</p>
            <input value={name} onChange={handleChange}></input>
        </div>
    )
}


function Exercise(){

    return(
        <LiveInput />
    )
}

export default Exercise;