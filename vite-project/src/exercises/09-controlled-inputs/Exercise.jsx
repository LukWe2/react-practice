// Prinzip hier heißt Controlled Input.

// Mit value={name} wird der sichtbare Wert des Input-Feldes an den React-State "name" gebunden.
// Das Input-Feld zeigt dadurch immer genau den aktuellen Wert von "name" an.

// Mit onChange={handleChange} wird bei jeder Änderung des Input-Feldes handleChange ausgeführt.
// event.target.value enthält dabei den aktuellen Text des Inputs.
// setName(event.target.value) aktualisiert damit bei jedem Tastenschlag den React-State.

// Der Ablauf ist also:
// Benutzer tippt → onChange → setName(...) → State ändert sich → Re-Render → value={name} aktualisiert den Input.

// Dadurch sind Input und State synchronisiert:
// Input → State durch onChange
// State → Input durch value={name}

// Ohne value={name}, also nur:
// <input onChange={handleChange} />
// würde der Browser den sichtbaren Inhalt des Input-Feldes selbst verwalten.

// Der State würde durch onChange zwar weiterhin bei jedem Tastenschlag aktualisiert,
// aber eine spätere programmgesteuerte Änderung des States würde das Input-Feld nicht automatisch verändern.
// also wenn wir manuell setState("Anna") machen und somit nur den State ändern, dann würde im Input immernoch "Lukas" stehen, was für dieses Beispiel und den User keinen Unterschied macht
// aber mit value={name} kontrolliert React den State und das Inputfeld, sonst wird einfach das was im Eingabefeld stand in den State kopiert

// Beispiel:
// setName("");
//
// Mit Controlled Input:
// name wird "" → Re-Render → value={name} ist "" → Input wird sichtbar geleert.
//
// Ohne value={name}:
// name wird zwar "", aber der sichtbare Text im Input kann weiterhin stehen bleiben,
// weil der Browser den Input-Wert selbst verwaltet.

import { useState } from "react";

function LiveInput(){

    const[name, setName] = useState("");

    function handleChange(event){

        setName(event.target.value);
    }

    return(

        <div>
            <p>Hello {name}!</p>
            <input value={name} onChange={handleChange}></input>
        </div>
    )
}


function Exercise(){

    return(
        <LiveInput />
    )
}

export default Exercise;