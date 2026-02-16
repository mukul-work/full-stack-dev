import { useState } from "react";

export default function EventToDo()
{
    const [ task, setTask ] = useState("");
    const [ tasks, setTasks] = useState([]);

    // function handleSubmit(e){
    //     e.preventDefault();
    //     const task = document.getElementById("taskInput");
    //     const input = task.value;
    //     const taskValue = input.trim();
    //     if(taskValue === ""){
    //         alert("Please don't enter empty task.");
    //         return;
    //     }

    //     const li = document.createElement("li");
    //     li.innerHTML = `<span>${taskValue}</span>
    //     <button class="deleteBtn">Delete</button>`;
    //     const ul = document.getElementById("taskList");
    //     ul.appendChild(li);
    //     task.value = "";
    // }
    // function handleRemoval(event){
    //     if(event.target.className === "deleteBtn"){
    //         event.target.parentElement.remove();
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();

        const taskValue = task.trim();

        if (taskValue === "") {
            alert("Cannot add empty task");
            return;
        }

        setTasks((prevTasks) => [...prevTasks, taskValue]);
        setTask("");
    }

    function handleDelete(index) {
        setTasks((prevTasks) =>
            prevTasks.filter((_, i) => i !== index)
        );
    }


    return(
        <>
            <h1>To Do List</h1>
            <div className="container">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" id = "taskInput" name="task" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)}/>
                    <input type="submit" id="submitBtn" value="Add Task" />
                </form>
            </div>
            {/* <ul id="taskList" onClick={handleRemoval}></ul> */}
            <ul className="list">
                {tasks.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <button
                        className="deleteBtn"
                        onClick={() => handleDelete(index)}>Delete</button>
                    </li>
            ))}
            </ul>
            </div>
        </>
    );
}