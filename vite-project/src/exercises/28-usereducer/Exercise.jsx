// Aufgabe 28: Verwalte komplexere State-Änderungen zentral über Actions. Thema: useReducer

// useReducer ist von React vorprogrammiert und erwartet zwei Dinge als Argument: 
// 1. als erstes Argument eine reducer function, in der festgelegt wird, was bei welchen action types passiert
// 2. den ursprünglichen State also initialState
// userReducer returned dann aber ein Array mit umgekehrter Reihenfolge, nämlich: [currentState, dispatchFunction] also erst den aktuellen State und dann die dispatch Funktion
// Verbesserung: Nicht ganz "umgekehrte Reihenfolge", weil die Argumente und Rückgabewerte zwei unterschiedliche Dinge sind. Präziser: useReducer(reducer, initialState) gibt ein Array [currentState, dispatchFunction] zurück.
// dies werden dann in den Variablen state und dispatch gespeichert mit Destructing, also in state ist der aktuelle State gespeichert und somit mit state.count die count Property innerhalb des initialState Objects aufrufbar
// Verbesserung: "innerhalb des initialState Objects" ist nur am Anfang so. state enthält immer den aktuellen State, der anfangs dem initialState entspricht und später durch den Reducer verändert werden kann.
// in dispatch geben wir dann den Type der action an (hier: "INCREASE", "DECREASE" oder "RESET"), React erkennt dann selber dass das Argument type die action.type ist und vergleicht
// Verbesserung: Wir geben an dispatch nicht nur den Type, sondern ein Action-Objekt, z. B. dispatch({ type: "INCREASE" }). React vergleicht action.type nicht selbst, sondern gibt das Action-Objekt an den Reducer weiter. 
// Dort vergleichen wir selbst action.type.
// die reducer Function braucht zwar zwei Argumente (state und action), aber neben der action wird auch der state automatisch von React mitgegeben, deswegen muss man nur
// type als Argument in dispatch mitgeben
// Verbesserung: Genauer: Wir übergeben an dispatch ein Action-Objekt, z. B. { type: "INCREASE" }. Den aktuellen state liefert React automatisch zusätzlich an reducer(state, action).

import { useReducer } from "react";

function ReducerCounter(){

    const initialState = {

        count: 0
    };

    const [state, dispatch] = useReducer(
        
        reducer,
        initialState
    );


    return(

        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: "INCREASE"})}>Increase</button>
            <button onClick={() => dispatch({type: "DECREASE"})}>Decrease</button>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </div>
    )
}


function reducer(state, action) {

    if (action.type === "INCREASE"){
        return {
            count: state.count + 1
        };
    }

    if (action.type === "DECREASE"){
        return {
            count: state.count - 1
        };
    }

    if (action.type === "RESET"){
        return {
            count: 0
        };
    }
}


function Exercise() {
    return <ReducerCounter />;
}

export default Exercise;


// 1. Was ist bei useReducer der Unterschied zwischen state und dispatch?
//
// Antwort: state stellt den aktuellen State dar also was initial in initialState war als Property und wird dann vom reducer geupdated und dispatch ist eine von React bereitgestellte Funktion, 
// und wenn dispatch z.B. mit dem Objekt { type: "INCREASE" } aufgerufen wird, wird dieses aufgrund der von React vorgefertigten Implementation dieser dispatch Funktion
// dem reducer mit dem aktuellen state automatisch übergeben und es wird action.type verglichen 
// also geben wir dem reducer mit dispatch ein action Object mit der type Property mt dem Wert "INCREASE" 
// Antwort: Fast richtig. state ist der aktuelle State und entspricht beim Start dem initialState. dispatch enthält aber nicht die reducer Function. 
// dispatch ist eine von React bereitgestellte Funktion. Wenn wir dispatch({ type: "INCREASE" }) aufrufen, gibt React automatisch den aktuellen state zusammen mit diesem Action-Objekt 
// an unseren reducer weiter. Der reducer prüft dann z. B. action.type === "INCREASE" und gibt den neuen State zurück.

// 2. Was ist eine Action und welche Aufgabe hat action.type im Reducer?
//
// Antwort: Eine Action ist ein Objekt welches als Argument in der dispatch Methode definiert wird (genauer gesagt der action type) und so der reducer function übergeben wird, in dieser wird dann die Property type der Action verglichen und der passende Code ausgeführt, der den aktuellen State ändert. 
// Antwort: Richtig. Kleine Präzisierung: Nicht nur der action type wird an dispatch übergeben, sondern das komplette Action-Objekt, z. B. { type: "INCREASE" }. action.type dient dem Reducer dann dazu zu erkennen, welche Zustandsänderung ausgeführt werden soll. Der Reducer verändert den alten State dabei nicht direkt, sondern gibt einen neuen State zurück.

// 3. Wann würdest du eher useReducer statt useState verwenden?
//
// Antwort: Wenn viele verschiedene Aktionen also handle Funktionen in der Component die den aktuellen State verändern definiert sind und die Logik unübersichtlich wird. 
// Antwort: Richtig. Besonders sinnvoll ist useReducer, wenn derselbe State auf viele verschiedene Arten verändert wird, mehrere Properties zusammengehören oder die Update-Logik sonst über viele Handler und setState-Aufrufe verteilt wäre.