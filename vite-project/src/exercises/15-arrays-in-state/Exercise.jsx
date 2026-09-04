// kann wie hier gezeigt die Setter-Methode für einen State in mehreren Methoden/Funktionen nutzen! (setInput in handleAdd)

import { useState } from "react";

function TaskList(){

    const [tasks, setTasks] = useState([])

    const [input, setInput] = useState("");


    function handleInput(event){

        setInput(event.target.value);
    }

    function handleAdd(){

        setTasks([
            ...tasks,
            input
        ]);

        setInput("");
    }


    return(

        <div>
            <input value={input} onChange={handleInput}></input>
            <button onClick={handleAdd}>Add</button>

            <ul>
                {tasks.map(function(task, index){
                    return (
                        <li key={index}>
                            {task}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}


function Exercise(){

    return(
        <TaskList />
    )
}

export default Exercise;