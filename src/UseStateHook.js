import { useEffect, useState } from "react";

const UseStateHook = () => {

    const [counter , setcounter] = useState(0)
    function IncreaseCounter(){
        setcounter(counter + 1)

        let a = 0;
        
                useEffect(() => {
                    console.log(`rerendering and the value i {a} is...`)
                })




    }
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={IncreaseCounter}>increase</button>
        </div>
    )
}


export default UseStateHook;