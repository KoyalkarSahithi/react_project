import { useEffect, useRef, useState } from "react"

export const Useref=()=>{

    // let data= useRef(null)
    
    // useEffect(()=>{
    //     data.current.focus()
    // },[])

    let [count,setCount] = useState(0)

    let prevcount = useRef(0)

    useEffect(()=>{
        prevcount.current=count
    },[count])
    return(
        <>
        <center>
            {/* <h1 className="mb-3 mt-3">UseRef Hooks</h1>
            <form action="">
                <div className="col-5">
                    <label htmlFor="" className="form-label">Username:</label>
                    <input type="text" className="form-control" ref={data}/>
                </div>
                <div className="col-5">
                    <label htmlFor="" className="form-label">Password:</label>
                    <input type="text" className="form-control"/>
                </div>
            </form> */}
            <h1 className="mb-3 mt-3">UseRef Hook</h1>
            <h2>Counter application</h2>
            <h2>Count:{count}</h2>
            <h2>PrevCount:{prevcount.current}</h2>
            <button className="btn btn-primary m-2" onClick={()=>setCount(count+1)}>Increment</button>
            {/* <button className="btn btn-danger m-2">Decrement</button> */}
        </center>
        </>
    )
}
