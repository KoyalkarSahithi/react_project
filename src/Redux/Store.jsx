import { configureStore } from "@reduxjs/toolkit";
import counterOper from "../Redux/Counter/CounterSlice";
import cartOper from "../Redux/Cart/CartSlice";
export default configureStore(
    {
        reducer:{
            counter:counterOper,
            cart:cartOper
        }
    }
)