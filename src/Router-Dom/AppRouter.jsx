import { Route, Routes } from "react-router-dom"
import { About } from "../Pages/About"
import { Parent } from "../props/Parent"
import { Contact } from "../Pages/Contact"
import { Home } from "../Pages/Home"
import { Cart } from "../Pages/Cart"
import { Login } from "../Features/Authentication/Login"
import { Signup } from "../Features/Authentication/Signup"
// import { Productlist } from "../Features/ProductList/Productlist"
import { Products } from "../Pages/Products"
import { SinglePage } from "../Features/ProductList/SinglePage"


export const AppRouter=()=>{
    return(
        <>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Contact/>}/>
                <Route path="/products/:id" element={<SinglePage/>}/>
            </Routes>
            
        </>

    )
}