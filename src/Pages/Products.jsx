import React,{ Suspense, lazy } from "react"
import {Loading} from "../Loader/Loading"
// import { Productlist } from "../Features/ProductList/Productlist"

export const Products=()=>{
    const Productlist = React.lazy(() => import("../Features/ProductList/Productlist"))
    return(
        <>
        
            {/* <h1>Our Products</h1>
        <Productlist/> */}
        <center>
        <Suspense fallback={<Loading/>}>
            <Productlist/>
        </Suspense>
        </center>
        </>
    )
}