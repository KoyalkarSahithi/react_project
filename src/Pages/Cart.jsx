import { useDispatch, useSelector } from "react-redux"
import { DEC, INC } from "../Redux/Cart/CartSlice"


export const Cart = () => {
    let cartData = useSelector(state => state.cart)
    let dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <div className="row m-5">
                    {
                        cartData.map((item) => (
                            <div key={item.id} className="border border-dark m-3 p-3" style={{ display: "flex" }}>
                                <div className="col-5">
                                    <img src={item.thumbnail} alt="" />
                                </div>
                                <div className="col-7">
                                    <h1>{item.title}</h1>
                                    <mark>quantity:{item.quantity}</mark> <br />
                                    <mark>price:{item.price}</mark><br />
                                    <button className="btn btn-primary m-2" onClick={() => dispatch(INC(item.id))}>+</button>
                                    <button className="btn btn-danger" onClick={() => dispatch(DEC(item.id))}>-</button>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}