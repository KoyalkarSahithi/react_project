// import React, { useReducer} from 'react'

// export const Usereduce = () => {
//     let [state, dispatch] = useReducer(reducerFun, 0)

//     function reducerFun(prev, action) {
//         switch (action.type) {
//             case "inc":
//                 return prev+action.payload
//             case "dec":
//                 return prev-action.payload
//         }
//     }

//     return (
//         <>
//             <center>
//                 <h1>Counter Application using Use Reducer</h1> <br /><br />
//                 <button className="btn btn-danger m-2" onClick={()=>dispatch({type:"inc",payload:5})}>Increment</button>
//                 {state}
//                 <button className="btn btn-primary m-2" onClick={()=>dispatch({type:"dec",payload:5})}>Decrement</button>
//             </center>

//         </>
//     )
// }
