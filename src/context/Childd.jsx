import { Subchild } from "./Subchild"

export const Childd=({data})=>{
    return(
        <>
        <h1>Child <span className="text-danger"></span></h1>
        <Subchild/>
        </>
    )
}