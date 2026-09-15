// Eigentlich würden wir in den zwei Components einen State jeweils speichern wie const [count, setCount] = useState(0);
// Dann in beiden Components jeweils die Functions zum Handeln der Button-Clicks also function handleIncrease(){ setCount(count + 1) }; und function handleDecrease(){ setCount(count - 1)}
// und function handleReset(){ setCount(0) } und das in beiden Components in diesem Beispiel genau gleich, weil beide Counter genau die gleiche Logik haben
// Sinn dieser Übung ist, die Logik die ja im Endeffekt nur JavaScript ist (neben JSX was wir aber sowieso für jede Component returnen seperat) in ein seperates JS-Skript
// zu packen, welche einen State und die Funktionen dafür einfach returned, die man dann in den beiden Components jeweils benutzen kann indem man entweder descructed
// den count State und die Funktionen wie in Component CounterOne, oder wie in CounterTwo alles in einem Objekt speichern (const counter) und jeweils auf die Properties
// die in diesem Fall der State und die Funktionen sind zugreifen, const counter sieht dann ungefähr so aus: 
/*
const counter = {
{
    count: 0,
    increase: function,
    decrease: function,
    reset: function
}
*/


import useCounter from "./useCounter";

function CounterOne(){

    // Destructen hier und erstellen vier Variablen, nämlich genau die, die in userCounter() in userCounter.js 
    // returned werden, Component CounterOne hat dann ihren eigenen State den wir ja in useCounter erstellen
    // und jetzt hier in lokaler Variable für CounterOne speichern
    const {
        count,
        increase,
        decrease,
        reset
    } = useCounter();
    
    return(

        <div>
            <p>Counter: {count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
};


function CounterTwo(){

    // auch hier Erstellen wir vier Variablen, für diese Komponente, darunter als erstes der seperate State 
    // für diese Komponente, die Funktionen genauso
    // mussten so jetzt nur eine useCounter.js schreiben und konnten uns sparen in beiden Komponenten
    // den State und die Funktionen zweimal zu implementieren
    // weil das in den Components neben dem JSX ist ja nur JavaScript also State erstellen mit
    // const [count, setCount] = useState(0) und auch das Implementieren von den Funktionen ist alles JavaScript,
    // was in einer Datei implementiert werden kann die dann für mehrere Components die genau das gleiche brauchen
    // aufgerufen werden kann

    const counter = useCounter();

    return(

        <div>
            <p>Counter: {counter.count}</p>
            <button onClick={counter.increase}>Increase</button>
            <button onClick={counter.decrease}>Decrease</button>
            <button onClick={counter.reset}>Reset</button>
        </div>
    )
};



function Exercise() {
    return (
        <>
            <CounterOne />
            <CounterTwo />
        </>
    );
};

export default Exercise;



// 1. Was ist der Unterschied zwischen einem Custom Hook und einer normalen React-Component?
//
// Antwort: Ein Custom Hook ist eine eigene JavaScript-Funktion, die wiederum React-Hooks wie useState, useEffect usw. verwendet. Man kann dadurch Logik, 
// die von mehreren Components genutzt werden sollen nur einmal schreiben in eine JavaScript Datei und diese für mehrere Components verwenden.
// Antwort: Richtig. Ergänzung: Eine React-Component ist hauptsächlich dafür da, UI über JSX zu rendern. Ein Custom Hook rendert selbst keine UI, sondern kapselt wiederverwendbare React-Logik wie State, 
// Effects oder Funktionen und gibt benötigte Werte/Funktionen an die Component zurück.
//
// 2. Wenn CounterOne und CounterTwo beide useCounter() aufrufen,
//    warum haben sie trotzdem unterschiedliche count-Werte?
//
// Antwort: Weil der State in useCounter.js für jeweils das Objekt seperat gesetzt wird was useCounter() benutzt mit const [count, setCount] = useState(0);. 
// Somit haben die zwei Komponenten jeweils ihren eigenen State.
// Antwort: Richtig. Präziser: Jeder separate Aufruf von useCounter() innerhalb einer Component bekommt seine eigene Hook-/State-Instanz. 
// CounterOne und CounterTwo teilen also nur dieselbe Logik des Custom Hooks, aber nicht denselben count-State.
//
// 3. Warum muss ein Custom Hook wie useCounter mit "use" anfangen?
//
// Antwort: Damit man die Custom Hooks unterscheiden kann und diese als Hooks auch erkennen kann, sie rendern ja keine UI sondern enthalten nur Logik was man dadurch auch erkennt.
// Antwort: Teilweise richtig. Der wichtigste technische Grund ist, dass React bzw. die React-Lint-Regeln Funktionen mit "use" als Hooks erkennen 
// und dadurch die Rules of Hooks prüfen können. Zum Beispiel dürfen Hooks nicht beliebig in if-Bedingungen oder Schleifen aufgerufen werden. 
// Die Benennung macht also nicht nur für uns Menschen klar, dass es ein Hook ist, sondern hat auch eine technische Bedeutung.