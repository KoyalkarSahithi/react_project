

import { useDispatch, useSelector } from "react-redux"
import {Dec,Inc} from "./CounterSlice"

export const Counter=()=>{
    let counterValue = useSelector(state=>state.counter)
    let dispatch=useDispatch()
    return(
        <>
        <center>
            <h1>React Redux</h1>
            <h2>Counter application by using Redux</h2>
            <div className="mt-5">
                <h2>CounterValue:{counterValue}</h2>
                <button className="btn btn-primary m-2" onClick={()=>dispatch(Inc())}>Increment</button>
                <button className="btn btn-danger m-2" onClick={()=>dispatch(Dec())}>Decrement</button>

            </div>
        </center>
        </>
    )
}