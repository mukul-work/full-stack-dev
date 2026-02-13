import { useState } from "react";

export default function Counter(){
    // var count = 0;
    // function handleDecrement(){
    //     count--;
    //     console.log(count);
    // }
    // function handleIncrement(){
    //     count++;
    //     console.log(count);
    // }

    const [ count, setCount] = useState(0);
    const [name, changeName] = useState("Counter App");
    function handleDecrement(){
        setCount((count)=> count - 1);
    }

    function handleIncrement(){
        setCount(count + 1);
    }

    function handleCLick(){
        let val = prompt("Enter new app name: ");
        if(val.trim() !== "" && val !== null){
            changeName(val);
        }
        else{
            alert("Please don't enter an empty value.");
        }
    }

    return(
        <>
        <h1>{name}</h1>
        <h3>Count : {count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <br />
        <br />
        <button onClick={handleCLick}>Change app name</button>
        </>
    )
}