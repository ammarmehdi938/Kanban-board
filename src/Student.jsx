import { createContext } from "react";

    export const SubjectContext = createContext("Maths")

function Student(){


    return(
        <div style={{backgroundColor : "red" , padding:10}}> 
           <h1>Student Component</h1>
        </div>
    )
}


export default Student;