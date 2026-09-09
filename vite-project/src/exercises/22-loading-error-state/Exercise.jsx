// Aufgabe 22: Zeige beim Laden und bei Fehlern unterschiedliche UI an. Thema: Loading & Error State bei API-Requests

import { useState, useEffect } from "react";

function UserList(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(function(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function(response){

                if (!response.ok) {
                    throw new Error("Request failed");
                }

                return response.json();
            })
            .then(function(data){

                setUsers(data);
                setLoading(false);
            })
            .catch(function(error){

                setError("Could not load users.");
                setLoading(false);
            }, []);

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name};
                </li>
            ))}
        </ul>
        );
    });
}


function Exercise() {
    return <UserList />;
}

export default Exercise;


// 1. Warum startet: const [loading, setLoading] = useState(true); mit true und nicht mit false?
// Antwort: Weil wenn Daten noch nicht geladen sind theoretisch immer der Loading State gerade aktuell ist
// Antwort: loading startet mit true, weil beim ersten Render die API-Daten noch nicht geladen wurden und der Request erst noch ausgeführt werden muss. Sobald Erfolg oder Fehler feststeht, setzt du loading auf false

// 2. Warum reicht bei fetch() ein .catch() allein nicht unbedingt aus, um einen HTTP-Fehler wie 404 zu erkennen?
// Antwort: Weil fetch() nicht immer automatisch bei jedem HTTP-Fehler einen Fehler wirft.
// Zum Beispiel kann der Server: 404 Not Found antworten und fetch() trotzdem ein Response-Objekt liefern.

// 3. Was ist der Unterschied zwischen diesen drei States?: users, loading und error?
// Antwort: users speichert die Daten der Objekte von der API in einem Array, loading zeigt den Ladestatus an mit einem boolean und error speichert die Fehlermeldung als String