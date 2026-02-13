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

    function handleDecrement(){
        setCount((count)=> count - 1);
    }

    function handleIncrement(){
        setCount((count)=> count + 1);
    }

    return(
        <>
        <h1>Counter App</h1>
        <h3>Count : {count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        </>
    )
}