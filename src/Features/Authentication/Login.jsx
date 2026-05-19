// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// export const Login=()=>{
//     let [username,setUsername] = useState("")
//     let [password,setPassword] = useState("")

//     let [usernameError,setUsernameError] = useState("")
//     let [passwordError,setPasswordError] = useState("")

//     let navigate = useNavigate()

//     function handlesubmit(e)
//     {
//         e.preventDefault()

//         let isvalid=true;
//         if (username.length<=0){
//             setUsernameError("Please enter valid username")
//             isvalid=false
//         }
//         else{
//             setUsernameError("")
//         }
//         if (password.length<10){
//             setPasswordError("Please enter a valid password")
//             isvalid=false
//         }
//         else{
//             setPasswordError("")
//         }
//         if(isvalid)
//         {
//             alert("form submitted successfully")
//             navigate("/Home")
//         }
//     }
//     return(
//         <>
//         <center>
//             <h1>Login Form</h1>
//             <form onSubmit={handlesubmit}>
//             <label htmlFor="">Username:</label>
//             <input type="text" className="form-action" onChange={(e)=>setUsername(e.target.value)}/> <br /><br />
//             <p className="text-danger" >{usernameError}</p>
//             <label htmlFor="">Password:</label>
//             <input type="password" className="form-action" onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
//             <button type="submit" className="btn btn bg-warning text-white">Login</button><br /><br />
//             <p className="text-danger">{passwordError}</p>
//             </form>
//             <div className= 'card m-5 p-5 w-50 bg-light-border'>
//                 <h4>Username:{username}</h4>
//                 <h4>Password:{password}</h4>
//             </div>
//         </center>
//         </> 
//     )
// }

// import {useNavigate} from "react-router-dom"
// import {useState} from "react"


// export const Login = ()=>{


//      let [formData,setFormData] = useState({

//         name:"",
//         password:"",
       

//     })

//     let[errors,setErrors] = useState({
//         nameErrror:"",
//         passwordError:""
        
//     })

    

//     function handleChange(e){
//         let{name,value} = e.target
//         setFormData(prev=>({...prev,[name]:value}))
//     }

//     let namePattern = /^[A-Za-z\s]{3,}$/
//     let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
   

//     let navigate = useNavigate()


//     function handleSubmit(e){

//         e.preventDefault()

//         let isvalid = true;

//         let {name,password} = formData

//         let newErrors ={
            
//             nameError:"",
//             passwordError:""
            
//         }

//         if(!namePattern.test(name)){
//             newErrors.nameError = "Please enter valid username"
//             isvalid = false;
//         }
//         if(!passwordPattern.test(password)){
//             newErrors.passwordError = "Please enter valid password"
//             isvalid = false;
//         }
       

//         setErrors(newErrors)
//         if(isvalid){
//             alert("form data subitted succesfully")
//             navigate('/Home')

//             setFormData({
//                 name:"",
//                 password:""
                
//             })
//         }
//     }
//     return(

//         <>
//         <center>
//         <div className = "m-4">
//             <h1 className = "mb-3">Login form</h1>
//             <form action = "">
//                 <div className="col-5">
//                     <label htmlFor="">Username:</label>
//                     <input type="text" className = "form-action border border-dark" name="name" value={formData.name} onChange = {handleChange}/> <br /><br />

//                 </div>
//                 <div className="col-5">
//                     <label htmlFor="">Password:</label>
//                     <input type="password" className = "form-action border border-dark" name="password" value={formData.password} onChange = {handleChange}/> <br /> <br />

//                 </div>
                 
//                 <button type= "button" className="btn btn-success mt-3" onClick={handleSubmit}>Submit</button>
//             </form>

//         </div>
//         </center>
//         </>
//     )
// }

import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

export const Login = () => {

    let [formData, setFormData] = useState({
        name: "",
        password: ""
    })

    let [errors, setErrors] = useState({
        nameError: "",
        passwordError: ""
    })

    function handleChange(e) {

        let { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    let namePattern = /^[A-Za-z\s]{3,}$/
    let passwordPattern =
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/

    let navigate = useNavigate()

    function handleSubmit(e) {

        e.preventDefault()

        let isvalid = true;

        let { name, password } = formData

        let newErrors = {
            nameError: "",
            passwordError: ""
        }

        if (!namePattern.test(name)) {
            newErrors.nameError =
                "Please enter valid username"
            isvalid = false;
        }

        if (!passwordPattern.test(password)) {
            newErrors.passwordError =
                "Password should contain 8+ characters"
            isvalid = false;
        }

        setErrors(newErrors)

        setErrors(newErrors)
        if(isvalid){
            alert("form data subitted succesfully")
            navigate('/Home')

            setFormData({
                name:"",
                password:""
                
            })
        }
    }

    return (
        <>
            <section
                className="d-flex justify-content-center align-items-center"
                style={{
                    minHeight: "100vh",
                    background:
                        "linear-gradient(to right, #0f172a, #1e293b)"
                }}
            >

                <div
                    className="bg-white shadow-lg p-5 rounded-5"
                    style={{
                        width: "100%",
                        maxWidth: "450px"
                    }}
                >

                    {/* Heading */}
                    <div className="text-center mb-4">

                        <h1 className="fw-bold">
                            Welcome Back
                        </h1>

                        <p className="text-secondary">
                            Login to continue shopping
                        </p>

                    </div>

                    <form onSubmit={handleSubmit}>

                        {/* Username */}
                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Username
                            </label>

                            <input
                                type="text"
                                className="form-control p-3 rounded-4"
                                placeholder="Enter username"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <small className="text-danger">
                                {errors.nameError}
                            </small>

                        </div>

                        {/* Password */}
                        <div className="mb-4">

                            <label className="form-label fw-semibold">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control p-3 rounded-4"
                                placeholder="Enter password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <small className="text-danger">
                                {errors.passwordError}
                            </small>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-dark w-100 py-3 rounded-4 fw-semibold"
                        >
                            Login
                        </button>

                        <p className="text-center mt-4 text-secondary">

                            Don't have an account?

                            <Link
                                to="/signup"
                                className="text-dark fw-bold text-decoration-none ms-1"
                            >
                                Signup
                            </Link>

                        </p>

                    </form>

                </div>
            </section>
        </>
    )
}