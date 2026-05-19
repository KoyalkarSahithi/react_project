import { Login } from "../Features/Authentication/Login";
import { Signup } from "../Features/Authentication/Signup";
import { useState } from "react";

export const Contact=()=>{
    let [page,setPage] = useState(true)
    // let cart=[1];
    // if(page){
    //         content=<Signup/>
    //     }
    //     else{
    //         content=<Login/>
    //     }
    return(
        <>
        {/* { 
            cart.length<=1 && <h1>Your cart is empty</h1>
        
        } */}
        <center>
            <button className="btn btn bg-warning text-white" onClick={()=>setPage(true)}>Signup</button> 
            <button className="btn btn bg-danger text-white" onClick={()=>setPage(false)}>Login</button>
        </center>
        {page?<Signup/>:<Login/>}
        
        </>
    )
}
