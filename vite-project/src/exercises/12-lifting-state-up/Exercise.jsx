// geben in Parent entweder State als Prop (counterDisplayed) mit (nur Zustand)  
// oder eine/mehrere Funktionen als Prop (onCounterIncreased und onCounterDecreased) mit, die State verändern kann

import { useState } from "react";

function SharedCounter(){

    const [count, setCount] = useState(0);

    function handleIncrease(){

        setCount(count + 1);
    }

    function handleDecrease(){

        setCount(count - 1);
    }

    return(

        <div>
            <CounterDisplay counterDisplayed={count}/>
            <CounterControls onCounterIncreased={handleIncrease} onCounterDecreased={handleDecrease}/>
        </div>
    )
}

function CounterDisplay(props){

    return(
        <p>{props.counterDisplayed}</p>
    )
}

function CounterControls(props){

    return(
        <div>
            <button onClick={props.onCounterIncreased}>Increase</button>
            <button onClick={props.onCounterDecreased}>Decrease</button>
        </div>
    )
}


function Exercise(){

    <SharedCounter />
}

export default Exercise;