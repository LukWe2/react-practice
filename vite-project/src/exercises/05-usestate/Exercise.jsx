import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    function handleClick(){

        setCount(count + 1);
    }

    return(

        <div>
            <p>Clicks: {count}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}


function Exercise(){

    return (
        <Counter />
    )
}

export default Exercise;