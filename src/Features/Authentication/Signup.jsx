// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// export const Signup=()=> {
//     let [firstname,setFirstName] = useState("")  
//     let [lastname,setLastname] = useState("")
//     let [mobileno,setMobileno] = useState("")
//     let [email,setEmail] = useState("")
//     let [password,setPassword] = useState("")
//     let [re_type_Password,setRe_type_Password] = useState("")

//     let [firstnameError,setFirstNameError] = useState("")  
//     let [lastnameError,setLastnameError] = useState("")
//     let [mobilenoError,setMobilenoError] = useState("")
//     let [emailError,setEmailError] = useState("")
//     let [passwordError,setPasswordError] = useState("")
//     let [re_type_PasswordError,setRe_type_PasswordError] = useState("")

//     let navigate=useNavigate();
  

//     function handlesubmit()
//     {
//         let isvalid=true
//         if(firstname.length<=0){
//             setFirstNameError("Please enter a valid firstname")
//             isvalid=false;
//         }
//         else{
//             setFirstNameError(" ")
//         }
//         if(lastname.length<=0){
//             setLastnameError("Please enter a valid lastname")
//             isvalid=false;
//         }
//         else{
//             setLastnameError(" ")
//         }
//         if(mobileno.length<10)
//         {
//             setMobilenoError("Please enter a valid mobile number")
//             isvalid=false;
//         }
//         else{
//             setMobilenoError(" ")
//         }
//         if(!email.includes('@')){
//             setEmailError("Please enter a valid email")
//             isvalid=false;
//         }
//         else{
//             setEmailError(" ")
//         }
//         if(password.length<8)
//         {
//             setPasswordError("Please enter a valid password")
//             isvalid=false;
//         }
//         else{
//             setPasswordError(" ")
//         }
//         if(re_type_Password.length<8)
//         {
//             setRe_type_PasswordError("Password doesn't match")
//             isvalid=false;
//         }
//         else{
//             setRe_type_Password(" ")
//         }
//         if(isvalid)
//         {
//             alert("form submitted successfully")
//         }
//         if(isvalid){
//             navigate("/About")
//         }
//     }
//     return (
//         <>
//             <center>
//                 <fieldset>
//                     <form action="">
//                     <h1>Signup Form</h1>
//                     <label htmlFor="">Firstname:</label>
//                     <input type="text" className='form-action' onChange={(e)=>setFirstName(e.target.value)} /> <br />
//                     <p className='text-danger'>{firstnameError}</p>
//                     <label htmlFor="">Lastname:</label>
//                     <input type="text" className='form-action' onChange={(e)=>setLastname(e.target.value)} /> <br />
//                     <p className='text-danger'>{lastnameError}</p>
//                     <label htmlFor="">Mobileno:</label>
//                     <input type="number" className='form-action' onChange={(e)=>setMobileno(e.target.value)}/><br />
//                     <p className='text-danger'>{mobilenoError}</p>
//                     <label htmlFor="">Email:</label>
//                     <input type="email" className='form-action' onChange={(e)=>setEmail(e.target.value)} /><br />
//                     <p className='text-danger'>{emailError}</p>
//                     <label htmlFor="">Password:</label>
//                     <input type="password"  className='form-action' onChange={(e)=>setPassword(e.target.value)}/><br />
//                     <p className='text-danger'>{passwordError}</p>
//                     <label htmlFor="">Re_type_Password:</label>
//                     <input type="password" className='form-action' onChange={(e)=>setRe_type_Password(e.target.value)}/><br />
//                     <p className='text-danger'>{re_type_PasswordError}</p>
//                     <button className='btn btn bg-warning text-white' onClick={handlesubmit}>Submit</button><br />
//                     </form>
//                 </fieldset>

//                 <div className='card m-5 p-5 w-50 bf-light border'>
//                     <h4>Firstname:{firstname}</h4>
//                     <h4>Lastname:{lastname}</h4>
//                     <h4>Mobileno:{mobileno}</h4>
//                     <h4>Email:{email}</h4>
//                     <h4>Password:{password}</h4>
//                     <h4>Re_type_Password:{re_type_Password}</h4> 

//                 </div>
//             </center>

//         </>
//     )
// }

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// export const Signup=()=>{
//     let [formData,setFormData]=useState({
//         name:"",
//         password:"",
//         email:"",
//         mobile:""
//     })

//     let [error,setError]=useState({
//         nameError:"",
//         passwordError:"",
//         emailError:"",
//         mobileError:""
//     })

//     function handleChange(e){
//         let {name,value}=e.target
//         setFormData((prev)=>({...prev,[name]:value}))
//     }

//     let namePattern = /^[a-zA-Z\s]{2,}$/
//     let passwordPattern = /^.{8,}$/
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     let mobilePattern = /^[6-9][0-9]{9}$/

//     let navigate = useNavigate();

//     function handlesubmit(e){
//         e.preventDefault()

//         let {name,password,email,mobile}=formData

//         let newErrors={
//             nameError:"",
//             passwordError:"",
//             emailError:"",
//             mobileError:""
//         }

//         let isvalid=true;
//         if(!namePattern.test(name))
//         {
//             newErrors.nameError ="Please enter a valid name";
//             isvalid=false;
//         }
//         if(!passwordPattern.test(password))
//         {
//             newErrors.passwordError = "Password must be at least 8 characters long"
//             isvalid=false;
//         }
//         if(!emailPattern.test(email))
//         {
//             newErrors.emailError="Please enter a valid email"
//             isvalid=false;
//         }
//         if(!mobilePattern.test(mobile))
//         {
//             newErrors.mobileError="Please enter a valid mobile number"
//             isvalid = false;
//         }
//         setError(newErrors)
//         if(isvalid)
//         {
//             alert("Form submitted successfully")
//             navigate('/About')
//         }
//     }

//     return(
//         <>
//             <center>
//                 <form onSubmit={handlesubmit}>
//                     <label htmlFor="">Name:</label>
//                     <input type="text" className="form-action" name="name" value={formData.name} onChange={handleChange}/><br /><br />
//                     <p  className=" text-danger">{error.nameError}</p>
//                     <label htmlFor="">Password:</label>
//                     <input type="password" className="form-action" name="password" value={formData.password} onChange={handleChange}/> <br /> <br />
//                     <p className=" text-danger">{error.passwordError}</p>
//                     <label htmlFor="">Email:</label>
//                     <input type="email" className="form-action" name="email" value={formData.email} onChange={handleChange}/> <br /><br />
//                     <p className="text-danger" >{error.emailError}</p>
//                     <label htmlFor="">Mobile:</label>
//                     <input type="tel" className="form-action" name="mobile" value={formData.mobile} onChange={handleChange}/> <br /><br />
//                     <p className="text-danger" >{error.mobileError}</p>
//                     <button type="submit" className="btn btn-warning text-white">Submit</button><br />
//                 </form>
//             </center>
//         </>
//     )
// }

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

export const Signup = () => {

    let [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        mobile: ""
    })

    let [error, setError] = useState({
        nameError: "",
        passwordError: "",
        emailError: "",
        mobileError: ""
    })

    function handleChange(e) {
        let { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    let namePattern = /^[A-Za-z ]{3,30}$/

let passwordPattern =
/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,15}$/

let emailPattern =
/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

let mobilePattern =
/^[6-9]\d{9}$/

    let navigate = useNavigate();

    function handlesubmit(e) {

        e.preventDefault()

        let { name, password, email, mobile } = formData

        let newErrors = {
            nameError: "",
            passwordError: "",
            emailError: "",
            mobileError: ""
        }

        let isvalid = true;

        if (!namePattern.test(name)) {
            newErrors.nameError = "Please enter a valid name"
            isvalid = false;
        }

        if (!passwordPattern.test(password)) {
            newErrors.passwordError =
                "Password must be at least 8 characters"
            isvalid = false;
        }

        if (!emailPattern.test(email)) {
            newErrors.emailError =
                "Please enter a valid email"
            isvalid = false;
        }

        if (!mobilePattern.test(mobile)) {
            newErrors.mobileError =
                "Please enter a valid mobile number"
            isvalid = false;
        }

        setError(newErrors)

        if (isvalid) {
            alert("Signup Successful")
            navigate("/login")

            setFormData({
                name:"",
                password:"",
                email:"",
                mobile:""
            })
        }
    }

    return (
        <>
            <section
                className="d-flex justify-content-center align-items-center py-5"
                style={{
                    minHeight: "50vh",
                    background:
                        "linear-gradient(to right, #0f172a, #1e293b)"
                }}
            >

                <div
                    className="bg-white shadow-lg p-5 rounded-5"
                    style={{
                        width: "100%",
                        maxWidth: "500px"
                    }}
                >

                    {/* Heading */}
                    <div className="text-center mb-4">

                        <h1 className="fw-bold">
                            Create Account
                        </h1>

                        <p className="text-secondary">
                            Join ShopEase today
                        </p>

                    </div>

                    {/* Form */}
                    <form onSubmit={handlesubmit}>

                        {/* Name */}
                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Full Name
                            </label>

                            <input
                                type="text"
                                className="form-control p-3 rounded-4"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <small className="text-danger">
                                {error.nameError}
                            </small>

                        </div>

                        {/* Email */}
                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Email
                            </label>

                            <input
                                type="email"
                                className="form-control p-3 rounded-4"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <small className="text-danger">
                                {error.emailError}
                            </small>

                        </div>

                        {/* Password */}
                        <div className="mb-3">

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
                                {error.passwordError}
                            </small>

                        </div>

                        {/* Mobile */}
                        <div className="mb-4">

                            <label className="form-label fw-semibold">
                                Mobile Number
                            </label>

                            <input
                                type="tel"
                                className="form-control p-3 rounded-4"
                                placeholder="Enter mobile number"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                            />

                            <small className="text-danger">
                                {error.mobileError}
                            </small>

                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="btn btn-dark w-100 py-3 rounded-4 fw-semibold"
                        >
                            Sign Up
                        </button>

                        {/* Login */}
                        <p className="text-center mt-4 text-secondary">

                            Already have an account?

                            <Link
                                to="/login"
                                className="text-dark fw-bold text-decoration-none ms-1"
                            >
                                Login
                            </Link>

                        </p>

                    </form>
                </div>
            </section>
        </>
    )
}

