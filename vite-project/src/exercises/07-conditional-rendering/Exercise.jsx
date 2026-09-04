import { useState } from "react";

function ToggleMessage(){

    const [toggle, setToggle] = useState(false);

    function handleToggle(){

        setToggle(!toggle);
    }

    return(

        <div>
            <p>{toggle ? "Hello React!" : "Message is hidden."}</p>
            <button onClick={handleToggle}>Toggle message</button>
        </div>
    )
}


function Exercise(){

    return(
        <ToggleMessage />
    )
}

export default Exercise;