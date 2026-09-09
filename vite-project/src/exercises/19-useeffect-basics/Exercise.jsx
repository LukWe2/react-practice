// Aufgabe 19: Führe einen Side Effect aus, wenn sich ein bestimmter State verändert. Thema: useEffect & Dependency Array

import { useState, useEffect } from "react";

function EffectCounter(){

    const [count, setCount] = useState(0);

    function handleIncrease(){

        setCount(count + 1);
    }

    useEffect(function(){
        
        console.log("Count hat sich verändert:", count);

        document.title = `Clicks: ${count}`;

    }, [count]);

    return(

        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
};


function Exercise(){

    return(
        <EffectCounter />
    )
};

export default Exercise;


// 1. Wann wird dieser Effect ausgeführt?:
/*
useEffect(function() {
    console.log(count);
}, [count]);
*/
// Antwort: Dieser Effekt wird aufgrund des useEffect nicht nach jedem neuem Rendern der Komponente ausgeführt, sondern nur wenn sich der State von count
// ändert. Da document.title außerhalb des JSX und React Renderings befindet, wird useEffect genutzt um den Dokumententitel mit dem count State zu synchronisieren
// Antwort: Bei Frage 1 nur eine Präzisierung: Der Effect mit [count] läuft auch nach dem ersten Mount/Render einmal, nicht erst nach der ersten Veränderung von count. Danach läuft er nur erneut, wenn sich count verändert.

// 2. Was ist der Unterschied zwischen:
/*
useEffect(function() {
    ...
});
*/
// und:
/*
useEffect(function() {
    ...
}, []);
*/
// Antwort: beim ersten läuft der Effect nach jedem Render und beim zweiten aufgrund des leeren Arrays nach dem ersten Mounten also einmal, wenn State
// in eckigen Klammern stehen würde dann jedes Mal wenn sich dieser State ändert

// 3. Warum würden wir für diese Berechnung normalerweise kein useEffect verwenden?: const total = price * quantity;
// Antwort: Da diese Berechnung nicht extern der UI geschehen muss und direkt zum State gehört
// Antwort: Bei Frage 3 würde ich deine Formulierung leicht ändern. Statt: „direkt zum State gehört“ präziser:
// total kann direkt aus vorhandenen Werten berechnet werden und muss nicht mit einem externen System synchronisiert werden.