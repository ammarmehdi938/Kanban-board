import { useState } from "react";

const HandleEvent = ()=>{

    const [value , setValue] = useState("unknown")

    const handleChange(props){
        setValue(e.target.value)
    }
    
}