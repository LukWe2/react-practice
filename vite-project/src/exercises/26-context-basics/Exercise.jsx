// 1. In Komponente die Daten beinhaltet die weitergegeben werden soll (hier: UserDashboard) einen Context mit createContext erstellen und in Variable speichern (hier: UserContext)
// 2. Im JSX dieser Komponente ein Element <UserContext.Provider (vorher erstellte Variable mit Kontext)> erstellen, darin noch was man mitgeben will, als einfacher Wert oder Objekt mit value={Inhalt} definieren
// 3. Tag wieder schließen mit </UserContext.Provider>
// 4. In Komponente die Daten empfangen soll useContext(UserContext) benutzen und in Variablen speichern, ggf. Destructen
// 5. Daten aus Kontext benutzen, wie hier der name State und die handleChangeName Methode aus der UserDashboard Component, kann jetzt in anderer Childcomponent UserPanel benutzt werden!

import { useState, createContext, useContext } from "react";

const UserContext = createContext(null);

function UserDashboard(){

    const [name, setName] = useState("Lukas");

    function handleChangeName(){

        setName("Anna");
    };

    return(

        <UserContext.Provider
            value = {{
                name: name,
                changeName: handleChangeName
            }}
        >
            <Toolbar />
        </UserContext.Provider>
    );
};

function Toolbar(){

    return(
        <UserPanel />
    )
};

function UserPanel(){

    const { name, changeName } = useContext(UserContext);

    return(
        <div>
            <p>Current User: {name}</p>
            <button onClick={changeName}>Change User</button>
        </div>
    )
};

function Exercise() {
    return <UserDashboard />;
}

export default Exercise;


// 1. Welches Problem löst Context im Vergleich dazu, Props durch viele Zwischen-Komponenten weiterzureichen? 
// Antwort: Es löst Prop Drilling, also dass Komponenten die Zwischen Komponenten als Child sind, die die Informationen gar nicht brauchen und diese dann nur weiter reichen. 
// Mit Context kann ein Provider die Infos bereitstellen und eine andere Komponente kann diese mit useContext benutzen.
// 
// 2. Warum kann UserPanel auf UserContext zugreifen, obwohl Toolbar die Daten selbst weder empfängt noch weitergibt? 
// 
// Antwort: Da sie mit einem Context bereitgestellt werden, UserDashboard besitzt den State und dessen set-Methode aber provided diese nur und gibt sie nicht an Toolbar weiter, 
// somit kann UserPanel mit useContext diese bereitgestellten Infos holen. 
// 
// 3. Was würde passieren, wenn <UserPanel /> außerhalb des <UserContext.Provider> gerendert würde? 
// 
// Antwort: Dann könnte UserPanel nicht mit useContext auf die bereitgestellten Infos von UserDashboard zugreifen, weil um den Context zu nutzen müssen die Komponenten in einer Hierarchie sein
// Antwort: UserPanel muss ein Nachfahre des UserContext.Provider sein, um dessen bereitgestellten value zu erhalten. Außerhalb des Providers liefert useContext(UserContext) hier den
// Default-Wert null. Da wir diesen direkt destructuren, würde ein Fehler entstehen.
// Also wichtig ist weniger allgemein „sie müssen in einer Hierarchie sein“, sondern konkret: Die Component, die useContext(UserContext) benutzt, muss im Component Tree unterhalb des passenden UserContext.Provider liegen.
// Erklärung:
// Bei Frage 3 ist deine Erklärung ebenfalls vom Prinzip richtig, aber hier gibt es noch ein konkretes Detail: Du hast den Context so erstellt: const UserContext = createContext(null);
// Wenn UserPanel außerhalb des Providers steht, liefert: useContext(UserContext) den Default-Wert null
// Und weil du anschließend direkt destructurst: const { name, changeName } = useContext(UserContext);, würdest du versuchen: const { name, changeName } = null;
// Das erzeugt einen Fehler.