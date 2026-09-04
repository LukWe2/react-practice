import { useState } from "react";

function TaskList(){

    const [tasks, setTasks] = useState([
        { id: 1, text: "React lernen" },
        { id: 2, text: "JavaScript üben" },
        { id: 3, text: "C# lernen" }
    ]);

    function handleDelete(id){

        const newTasks = tasks.filter(function(task) {
            return task.id !== id;
        });

        setTasks(newTasks);
    }


    return(
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}

                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                        {/* <button
                                onClick={function() {
                                handleDelete(task.id);
                                }}
                            >
                                Delete
                            </button>*/}
                    </li>
                ))}
            </ul>
        </div>
    )
}


function Exercise() {
    return <TaskList />;
}

export default Exercise;