// Aufgabe 21: Lade Daten beim Mounten einer Komponente von einer API und speichere sie im State. Thema: fetch() + useEffect

// Zum fetch Teil: fetch() startet einen HTTP-Request an den Server der über Link spezifiziert ist
// fetch() gibt ein Promise zurück (Promise 1), weil Antwort nicht sofort da ist, Promise bedeutet ungefähr dass die Antwort des Servers wenn sie da ist geliefert wird
// Wenn der Server dann antwortet, wird das Promise erfüllt und liefert ein Response-Objekt (Reponse 1)
// .then() bedeutet, wenn das vorherige Promise (hier das von fetch(), Promise 1) erfolgreich und fertig ist, führe die in den Klammern als Argument spezifizierte Funktion aus
// beim ersten .then() ist response das Response Objekt (Response 1) des Promise (Promise 1) von fetch() und wird weiterverarbeitet
// Response 1 ist aber noch nicht direkt das User-Array, ist ein Response-Objekt mit Informationen über die HTTP-Antwort, zum Beispiel mit Statuscode, Headers, Body etc.
// reponse in der Funktion des ersten .then() ist ja Response 1, dieses wird jetzt mit der Methode .json() in normale JavaScript-Daten umgewandelt, ist vorher noch JSON und kann so nicht in unserem Code verwendet werden
// .json() nimmt sich den body (also nicht Statuscode, Headers oder andere Infos aus Response 1 sondern nur body) und wandelt das JSON in normale JavaScript-Daten um
// aber: response.json() passiert auch nicht sofort sondern respone.json() gibt auch ein Promise zurück (Promise 2)
// das zweite .then() wartet jetzt wieder auf das returnte Promise (Promise 2) des .then() vorher, so wie das erste .then() auf das Promise (Promise 1) des fetch() gewartet hat und dann dessen Response (Reponse 1)
// weiterverarbeitet hat
// Wenn Promise 2 (von response.json()) erfüllt ist, ist es jetzt kein Response Objekt mehr (also nicht Response 2), sondern jetzt die tatsächlichen, in JavaScript umgewandelten Daten sind und als State gesetzt werden können
// es gibt also zwei Promises aber nur eine Response, die zweite Response sind dann die Daten
// bei .then() kommt als Argument Funktion mit was zurückgegeben wird (response also Response des Promise und beim zweiten data also Daten des zweiten Promise) und in Funktionsbody was damit gemacht werden soll

import { useState, useEffect } from "react";

function UserList(){

    const [users, setUsers] = useState([]);

    useEffect(function(){

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                setUsers(data)
            });
    }, []);


    return(
        <ul>
            {users.map(user => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>
            ))}
            {/* {users.map(function(user){
                return(
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>
                )
            })} */}
        </ul>
    )
};


function Exercise() {
    return <UserList />;
}

export default Exercise;


// 1. Warum startet users zunächst als: [] obwohl später mehrere User darin gespeichert werden?
// Antwort: Da wir jetzt nicht mehr die User direkt im State definieren sondern mit einer API von einem Server holen, und sie sind immernoch in einem Arrray von Objekten
// gespeichert wie auch ohne API
// Antwort: Noch präziser: Beim ersten Render sind die API-Daten noch gar nicht angekommen. Deshalb startet users als leeres Array. Außerdem können wir darauf direkt sicher users.map(...) verwenden.

// 2. Warum steht der fetch()-Aufruf in: useEffect(..., [])
// Antwort: Da wir den Aufruf einmal beim Starten der Applikation ausführen wollen, was wir mit dem useEffect und der leeren Klammer [] machen, 
// da es einmal beim Mounten (Rendern der Komponente) ausgeführt wird und danach nicht mehr, so machen wir das initiale Laden der Daten
// Antwort: Richtig: Die Daten sollen einmal beim Mounten geladen werden. Würdest du fetch() direkt im Component-Body ausführen, würde bei jedem Re-Render erneut ein Request gestartet werden.

// 3. Was löst den Re-Render aus, nachdem die API-Daten angekommen sind: fetch(), response.json() oder setUsers(data)?
// Antwort: setUsers(data) löst den Rerender aus, da hier der State gesetzt wird und React bei der Setter Methode neu rendert
// Antwort: fetch() lädt nur die Antwort, response.json() verarbeitet sie, aber setUsers(data) verändert den React-State und löst dadurch den Re-Render aus