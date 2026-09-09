// Aufgabe 18: Verwalte mehrere Formularfelder gemeinsam in einem Objekt-State. Thema: Multiple Controlled Inputs

// hätten eigentlich für Properties name, email und city einen eigenen State also: const [name, setName] = useState(""), const [email, setEmail] = useState(""), const [city, setCity] = useState("")
// jetzt nur ein State für alle drei und als ein Objekt mit den drei als Property
// wollen jeweils den State der drei Properties mit einem input verändern, nur haben wir statt drei Funktionen (also handleNameChange(), handleEmailChange() und handleCityChange()) nur eine handleChange()

// setzen dafür immernoch den value Parameter des inputs auf den aktuellen State der jeweiligen Property wie bisher (value={formData.name}, value={formData.email}, value={formData.city})
// können mit event.target.value diesen State ja auslesen, genauso geht es mit dem name-Attribut, können
// mit event.target.name den Namen des jeweiligen inputs holen also haben ja z.B. <input name="email" value={formData.email} onChange={handleChange}>Email</input>, und können durch name="email"
// in der nur einzelnen Methode handleChange diesen spezifischen Namen des richtigen inputs holen/ändern (ist wie mit id in letzter Aufgabe, geben mit dem HTML Element was mit, 
// nur statt beim Klick die id also onClick={() => handleTasks(task.id)}, hier den name mit onChange={handleChange} was ein event gibt und mit event.target.name den Namen zugreifen können)
// bei onClick={() => handleTasks(task.id)} übergeben wir sozusagen explizit die id vom HTML button-Element im JSX and die Funktion in der Komponente, hier passiv durch das name-Attribut was
// mit event.target.name zugreifbar ist, in beiden Fällen können wir so auf das Element (task.id und event.target.name) zugreifen
// Aber warum brauche ich jetzt nicht onChange={handleChange(event)} sondern nur onChange={handleChange}, wie bei der letzten Aufgabe mit onClick={() => handleTasks(task.id)}?
// -> Weil React bei Event-Handlern das Event automatisch als Argument übergibt, wenn man einfach die Funktion übergibt

import { useState } from "react";

function RegistrationForm(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: ""
    });

    function handleChange(event){

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }


    return(

        <div>
            <label>Name: </label>
            <input name="name" value={formData.name} onChange={handleChange}></input>
            <p>Name: {formData.name}</p>
            <label>E-Mail: </label>
            <input name="email" value={formData.email} onChange={handleChange}></input>
            <p>Email: {formData.email}</p>
            <label>City: </label>
            <input name="city" value={formData.city} onChange={handleChange}></input>
            <p>City: {formData.city}</p>
        </div>
    )
}


function Exercise(){

    return(

        <RegistrationForm />
    )
};


export default Exercise;

// 1. Warum brauchen die drei Inputs jeweils ein unterschiedliches name-Attribut, obwohl alle dieselbe handleChange()-Funktion verwenden?
// Antwort: Da es drei verschiedene input-Elemente sind und jedes einzelne sein name-Atribut braucht, um unterscheidbar zu sein
// Antwort: Unterschiedliche name-Attribute: richtig. Dadurch kann dieselbe handleChange()-Funktion erkennen, welches Input-Feld das Event ausgelöst hat: 
// event.target.name ergibt je nach Input: "name", "email" oder "city"

// 2. Was würde passieren, wenn du beim Update nur schreibst:
/*
setFormData({
    email: event.target.value
});
*/
// anstatt vorher: ...formData zu verwenden?
// Antwort: Dann würde das originale Array ersetzt werden und nur die email Property besitzen statt wie bisher die drei Properties
// man kopiert deswegen das Array und erstellt ein neues
// Antwort: wird nicht nur email verändert, sondern das bisherige Objekt komplett durch ein neues Objekt ersetzt (email wäre einzige Property), name und city wären danach weg.

// Was bedeuten bei: [event.target.name]: event.target.value die linke und die rechte Seite jeweils genau?
// Antwort: Das linke ist ein dynamischer Property Name und wird nachdem mit onChange die handleChange Methode in der Komponente aufgerufen wurde
// mit dem jeweiligen name-Attribut gefüllt, die rechte Seite ist das, was im Input eingegeben wird und ist im HTML input-Element wegen des value
// Attributs mit der Komponente verbunden, wird dann mit setFormData(...) gesetzt und entspricht dann immer dem State (z.B. formData.city)
// Antwort: Eine kleine Korrektur zu deiner Formulierung: event.target.value ist nicht direkt der State. Es ist zunächst der aktuelle Wert aus dem Input-Element
// Mit setFormData(...) speicherst du diesen Wert anschließend im State