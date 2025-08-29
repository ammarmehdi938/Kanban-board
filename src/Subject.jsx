import { useContext } from "react";
import { SubjectContext } from "./Student";


function Subject(){
    const subject = useContext(SubjectContext)
    return(
        <div style={{backgroundColor : "Orange" , padding:10}}> 
           <h1>Subject is:{subject}</h1>
        </div>
    )
}


export default Subject;