import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    function handleClick(){

        // State count wird mit setter-Methode des States hier verändert, somit würde Komponente neu gerendert werden, wenn diese Handler-Methode aufgerufen wird und somit Setter-Methode
        // also die Komponente Counter wird neu gerendert, wenn der Button Click me gedrückt wird, weil auf dem Button (onClick) die Methode handleClick aufgerufen wird, die den State mittels der Setter Methode verändert
        // eine Komponente wird immer neu gerendert, wenn einer ihrer States sich verändert (was durch die Setter Methode des States passiert)
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