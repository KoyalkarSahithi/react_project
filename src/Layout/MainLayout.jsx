import { useLocation } from "react-router-dom"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { AppRouter } from "../Router-Dom/AppRouter"

export const MainLayout=()=>{
    let location = useLocation()
    let hideComp = ["/", "/login", "/signup"]
    let compView = hideComp.includes(location.pathname)
    return(
        <>
        {!compView&&<Header/>}
        <AppRouter/>
        {!compView&&<Footer/>}
        </>
    )
}