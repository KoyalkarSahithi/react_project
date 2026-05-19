import { createSlice } from "@reduxjs/toolkit";

let CounterSlice=createSlice({
    name:'counterr',
    initialState:0,
    reducers:{
        Inc:(state,action)=>{
            return state+1
        },
        Dec:(state,action)=>{
            return state-1
        }
    }
})

export const { Inc, Dec } = CounterSlice.actions;
export default CounterSlice.reducer;