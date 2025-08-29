import { useEffect , useState , useRef } from "react"

const Hook = () => {

    const [counter , setcounter] = useState(0)

    
        let a = useRef(5);
        
                useEffect(() => {
                    a.current = a.current + 1
                    console.log(`rerendering and the value i {a.current} is...`)
                })
    //     useEffect(()=>{
    //         document.title = `${counter}new Message`
    // })    


        

    
    return(
        <div>
            <h1>{counter}new Message</h1>
            <button onClick={() => setcounter(counter + 1)}>increase</button>
        </div>
    )
}


export default Hook;