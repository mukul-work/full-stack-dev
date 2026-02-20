import { useEffect, useState } from "react";
export default function UseEffect(){
    const [count, setCount] = useState(0);
    //Run once on Mount
    useEffect(() => {console.log("Called at mount")}, []);
    //Run when state changed
    useEffect(() => {console.log(count)}, [count]);
    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount((count) => count+1)}>increase</button>
        </div>
    );
}