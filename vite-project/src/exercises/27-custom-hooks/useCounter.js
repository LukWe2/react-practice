import { useState } from "react";

function useCounter(){

    const [count, setCount] = useState(0);

    function increase(){

        setCount(count + 1);
    }

    function decrease(){

        setCount(count - 1);
    }

    function reset(){

        setCount(0);
    }

    // geben jetzt hier den State als auch die drei Funktionen zurück, ist wie ein JavScript Objekt
    // und ja, Funktionen kann man so auch zurückgeben und in einer Variable speichern, Funktionen
    // in Variabeln zu speichern ist ja möglich wie schon weiß also z.B.
    // const decreaseFunction = function decrease(number01, number02) { return number01 - number02 };
    // Achtung: return braucht hier curly brackets also {}, nicht runde Klammern also () wie ich vorher hatte, dann wird nur der letzte
    // Wert also reset zurückgegeben! Damit alle vier Werte zurückgegeben werden müssen sie mit curly brackets umgeben sein!
    return {
        count,
        increase,
        decrease,
        reset
    };
}

export default useCounter;