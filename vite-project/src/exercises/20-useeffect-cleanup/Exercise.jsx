// Timer wird gerendert in UI wenn showTimer true ist, ist am Anfang so -> heißt Timer wird gerendert beim Starten der Applikation, Timer läuft also initial los (muss also nicht erst den Button zum Starten drücken)
// Da Timer in JSX gerendert wird und wir useEffect mit leeren Klammern [] haben, wird der Code in useEffect beim Mounten (Timer wird in React Tree gepackt was passiert weil showTimer true ist und Timer Component
// somit im JSX) einmal ausgeführt was zum Starten des Timers führt
// Wenn Button geklickt wird, wird showTimer umgekehrt also beim ersten Klick von true auf false, somit wird die Condition {showTimer ? <Timer /> : null} false und das Element null
// Hier wird Timer unmounted weil Conditional Rendering ergibt null, dadurch wird die Timer-Component aus dem React-Tree entfernt und unmounted
// heißt Timer Component existiert in der UI nicht mehr, Problem: der Timer läuft immernoch, weil setInterval() beim Effect einen externen Browser-Timer gestartet hat, 
// der unabhängig von React weiterläuft, bis clearInterval() ihn beendet, Counter läuft also immernoch, heißt wir müssen diesen stoppen
// -> wird mit clearInterval(timer) gemacht, wenn Timer unmounted wird, dann führt React die Cleanup-Funktion des Effects aus und der return Code wird ausgeführt und der Counter gestoppt
// Ablauf: showTimer = true → <Timer /> wird gerendert → Timer wird gemountet → useEffect läuft → setInterval() startet externen Timer
// dann: Button-Klick → showTimer = false → <Timer /> wird nicht mehr gerendert → Timer wird unmounted → Cleanup-Funktion läuft → clearInterval(timer) → Timer wird beendet

// Die Timer-Component ist in unserer Aufgabe hauptsächlich für den Timer und dessen useEffect verantwortlich.
// Sie startet beim Mounten mit setInterval() den externen Timer und räumt ihn beim Unmounten über die Cleanup-Funktion mit clearInterval() wieder auf.
// Zusätzlich könnte die Timer-Component auch eigene UI über ihren return rendern.

// Der TimerContainer ist dafür verantwortlich, ob die Timer-Component überhaupt existiert bzw. gemountet ist.
// Über {showTimer ? <Timer /> : null} entscheidet er abhängig vom showTimer-State, ob <Timer /> gerendert oder entfernt wird.
// Außerdem rendert der TimerContainer den Toggle-Button, mit dem showTimer verändert wird.


import { useState, useEffect } from "react";

function Timer(){

    useEffect(function(){

        const timer = setInterval(function(){

            console.log("Timer running");
        }, 1000);

        return function() {

            clearInterval(timer);
        };
    }, []);
};


function TimerContainer(){

    const [showTimer, setShowTimer] = useState(true);

    return(

        <div>
        {showTimer ? <Timer /> : null}

        <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    )
};


function Exercise() {
    return <TimerContainer />;
}

export default Exercise;


// 1. Wann wird die Cleanup-Funktion eines useEffect(..., []) ausgeführt?
// Antwort: 

// 2. Warum wäre es problematisch, einen setInterval()-Timer zu starten, aber beim Unmount kein clearInterval() auszuführen?
// Antwort: 

// 3. Was passiert bei einem Effect mit Dependencies wie:
/*
useEffect(function() {
    // Effect

    return function() {
        // Cleanup
    };
}, [count]);
*/
// Antwort: 

