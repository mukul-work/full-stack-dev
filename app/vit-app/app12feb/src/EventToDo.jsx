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



    return(
        <>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id = "taskInput" name="task" placeholder="Enter a task" value={task} onClick={(e) => setTask(e.target.value)}/>
                <input type="submit" value="Add Task" />
            </form>
            {/* <ul id="taskList" onClick={handleRemoval}></ul> */}
            <ul>
                {
                    task.map((item, index) => (
                        <li key = {index}>
                            <span>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}