// Aufgabe war: habe Anfangsstate mit den Objekten, soll im Browser den Text der Objekte anzeigen in einer Liste
// und nebendran ein Button zum Toggeln des Status derer, außerdem noch den Status anzeigen (Done oder Open)
// brauche dafür erst den Anfangsstate was das Array mit den Objekten ist was in die UI gerendert werden soll: const [tasks, setTasks] = useState([])
// brauche Funktion die den Setter des States verarbeitet (handleTask), in dieser soll der neue State des Objekt Arrays erstellt werden also wenn sich der Status einer Aufgabe ändert
// muss dafür die tasks verändern, brauche dafür JavaScript Methode map(), um Eintrag in Array zu ändern, was in der handleTasks Methode passiert
// bearbeite darin aber nur den Task, der auch gedrückt wurde und verändere diesen, brauche dafür aber seine id
// diese id muss aus dem HTML kommen, weil ich darin den Button drücke, heißt ich brauche auf diesem einen Listener, in React mit onClick (hier jetzt keine andere Komponente
// deswegen ist hier nicht das Thema mit Datenfluss und Parent oder Child, passiert alles in TaskList Komponente)
// rendere aber auch hier direkt das HTML in der Komponente, dadurch habe ich in dieser TaskList Komponente auch direkt Zugriff auf den jeweiligen task, weil ich hier direkt in HTML
// die Liste mit den tasks erstelle, habe somit auch Zugriff auf die id, diese muss aber vom Button mitgegeben werden zur Funktion in der Komponente, deswegen übergeben mit handleTasks(id)
// wenn man onClick=handleTask macht, übergibt man nur Funktion und sie würde nicht einfach aufgerufen werden beim Rendern, sondern beim Klicken wie man es eigentlich haben will 
// wir wollen aber ein Argument übergeben, Problem: wenn man onClick=handleTasks(...) mit den Klammern macht (wie wenn man wie hier noch Argument übergeben will) 
// würde die Funktion direkt ausgeführt werden, deswegen die Wrapper Funktion () => ...()
// also in der Komponente im return werden immernoch die UI Elemente in HTML gerendert, hier die Liste mit den Tasks, Funktion direkt in Komponente (handleTasks) nimmt sich den gedrückten Task
// und verändert ihn


import { useState } from "react";

function TaskList(){

    const [tasks, setTasks] = useState([

        { id: 1, text: "React lernen", done: false },
        { id: 2, text: "JavaScript üben", done: false },
        { id: 3, text: "C# lernen", done: false }
    ]);

    function handleTasks(id){

        const newTasks = tasks.map(function(task){

            if (task.id === id){
                return ({
                    ...task,
                    done: !task.done
                })
            }

            return task;
        });

        setTasks(newTasks);
    }

    return(
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>

                        <p>{task.text} - {task.done ? "Done" : "Open"}</p>

                        <button onClick={() => handleTasks(task.id)}>Toggle</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};


function Exercise(){

    return(
        <TaskList />
    )
};

export default Exercise;