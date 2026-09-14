import { useRef } from "react";

// useRef holt sich HTML Element, mit dem man im HTML Element per ref={} verbindet
// useRef speichert einen State wie useState oder triggert keine externen Effekte wie useEffect,
// sondern kann HTML Elemente direkt manipulieren, wie in JavaScript mit z.B.: const input = document.querySelector("input"); und input.focus();
// holt sich also mit ref={} die Reference aus der Component und verbindet sie mit HTML Element, wenn Reference manipuliert wird, wird das was auf 
// ref.current aufgerufen wird mit dem HTML Element gemacht

function FocusForm (){

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    function handleFocusName(){

        nameRef.current.focus();
    };

    function handleFocusEmail(){

        emailRef.current.focus();
    };

    return(
        <div>
            <p>Name:</p>
            <input ref={nameRef}></input>
            <p>Email:</p>
            <input ref={emailRef}></input>
            <br></br>
            <br></br>
            <button onClick={handleFocusName}>Focus Name</button>
            <button onClick={handleFocusEmail}>Focus Email</button>
        </div>
    )
}

function Exercise() {
    return <FocusForm />;
}

export default Exercise;


// 1. Was enthält inputRef.current, nachdem <input ref={inputRef} /> gemountet wurde? 
// Antwort: Es enthält eine Referenz auf das HTML Element und kann dadurch manipuliert werden das HTML Element.
// Antwort: Deine Antwort stimmt: inputRef.current → Referenz auf das echte DOM-Element
// Nach dem Mount ist es also ungefähr das echte: <input>, dadurch kann man DOM-Methoden verwenden wie: inputRef.current.focus();

// 2. Was ist der wichtigste Unterschied zwischen useState und useRef bezüglich eines Re-Renders? 
// Antwort: Der State der mit useState gespeichert ist wird neu gerendert, wenn sich der State verändert und die handle Methode davon aufgerufen wird, 
// mit useRef wird ein HTML Element direkt manipuliert und es gibt keinen UI-Rerender
// Antwort: Hier würde ich statt „Der State wird neu gerendert“ sagen: Wenn State über seinen Setter geändert wird, löst das einen Re-Render der Component aus.
// Also: setCount(1); → Component rendert erneut, bei myRef.current = 1; → kein Re-Render
// Wichtig außerdem: useRef ist nicht nur für HTML-Elemente gedacht. Es kann auch einfach einen Wert zwischen Rendern speichern: const numberRef = useRef(0); numberRef.current = 5;
// Der Wert bleibt erhalten, aber React rendert deswegen nicht neu.

//  3. Warum ist useRef für inputRef.current.focus() sinnvoller als useState?
// Antwort: Weil das Cursor setzen in das Inputfeld kein Rerender rechtfertig, wir wollen nur das HTML Element auf das DOM-Element zugreifen 
// und manipulieren, bei useState verbinden wir einen State der dann auch die UI beeinflusst und einen Rerender rechtfertigt.
// Antwort: Auch richtig. Wir wollen hier keinen sichtbaren React-Zustand verändern, sondern direkt eine Aktion auf einem DOM-Element ausführen
// Button-Klick → nameRef.current → echtes Input → .focus()
// Dafür wäre useState unnötig, weil ein Re-Render gar nicht gebraucht wird.