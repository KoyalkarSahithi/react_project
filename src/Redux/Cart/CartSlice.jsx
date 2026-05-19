import { createSlice } from "@reduxjs/toolkit";

let cartData=JSON.parse(localStorage.getItem('cartData')) || []

let CartSlice = createSlice({
    name:'cart',
    initialState:cartData,
    reducers:
    {
        ADDTOCART:((state,action)=>{
            let product = action.payload
            let existingItem = state.find(item=>item.id==product.id)

            if(existingItem)
            {
                existingItem.quantity += 1
            }
            else{
                state.push(product)
            }
            localStorage.setItem('cartData',JSON.stringify(state))
        }),
        REMOVETOCART:(state,action)=>{
            let product = action.payload
            let updateCart = state.filter(item=>item.id !== product)
            localStorage.setItem('cartData',JSON.stringify(updateCart))
            return updateCart
        },
        INC:(state,action)=>{
            let product = action.payload
            let existingItem = state.find(item=>item.id == product)
            if(existingItem) existingItem.quantity+=1; existingItem.price+=existingItem.unitprice
            localStorage.setItem('cartData',JSON.stringify(state))
        },
        DEC:(state,action)=>{
            let product = action.payload
            let existingItem = state.find((item=>item.id == product))
            if(existingItem && existingItem.quantity>1)
            {
                existingItem.quantity-=1; existingItem.price-=existingItem.unitprice
            }
            localStorage.setItem('cartData',JSON.stringify(state))
        }
    }
})

export const {ADDTOCART, REMOVETOCART,INC,DEC} = CartSlice.actions
export default CartSlice.reducer