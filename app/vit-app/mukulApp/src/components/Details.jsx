import { useParams } from "react-router-dom";

export default function Details(){
    const {id} = useParams();
    return(
        <>
            <h1>Student {id}</h1>
        </>
    )
}