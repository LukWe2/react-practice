import { useState } from "react";

function NameForm(){

    const [name, setName] = useState("");

    const [submittedName, setSubmittedName] = useState("");


    function handleSubmit(event){

        event.preventDefault();

        setSubmittedName(name);
    }

    function handleChange(event){

        setName(event.target.value);
    }

    return(

        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>

            <p>Submitted name: {submittedName}</p>
        </div>
    )
}


function Exercise(){

    return(
        <NameForm />
    )    
}

export default Exercise;