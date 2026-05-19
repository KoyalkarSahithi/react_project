import { createContext } from "react"
import { Childd } from "./Childd"

export const dataContext = createContext()

export const Parentt=()=>{
    let data = "this is dynamic data"
    return(
        <>
        <center>
            <div className="card w-50 m-50 p-5 border-dark">
                <h1>Parent</h1>
                <Childd data={data}/>
            </div>
        </center>
        </>
    )
}