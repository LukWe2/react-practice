import { useState } from "react";

function MessageBox(){

    const [message, setMessage] = useState("Original message");

    function handleChangeMessage(){

        setMessage("Message changed!");
    }

    return(

        <div>
            <p>{message}</p>

            <ChangeMessageButton onButtonClick={handleChangeMessage} />
        </div>
    )
}


function ChangeMessageButton(props){

    return(
        <button onClick={props.onButtonClick}>Change message</button>
    )
}


function Exercise(){

    <MessageBox />
}

export default Exercise;