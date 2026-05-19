import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { ADDTOCART, REMOVETOCART } from "../../Redux/Cart/CartSlice"

export const SinglePage=()=>{

    let dispatch=useDispatch()
    let [singleProd,setSingleProd] = useState({})
    let {id} = useParams()

    useEffect(()=>{
        async function SingleP(){
            let {data} = await axios.get(`https://dummyjson.com/products/${id}`)
            setSingleProd(data)
        }
        SingleP()
    },[])

    return(
        <>
        <center>
            <div style={{display:"flex", width:"700px", padding:"8px", margin:"5px", textAlign:"center",border:"2px solid", border:"6px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <img src={singleProd.thumbnail} alt="" />
                    </div>
                    <div className="col-7">
                        <h1>{singleProd.title}</h1>
                        <p>{singleProd.description}</p>
                        <mark>{singleProd.price}</mark> <br />
                        <button className="btn btn-primary m-2" onClick={()=>dispatch(ADDTOCART({...singleProd,quantity:1}))}>Add to cart</button>
                        <button className="btn btn-danger m-2" onClick={()=>dispatch(REMOVETOCART(singleProd.id))}>Remove from cart</button>

                    </div>

                </div>

            </div>
        </div>
        </center>
        </>
    )
}