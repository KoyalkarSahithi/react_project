import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"
import { data } from "react-router-dom"

export const Users=()=>{

    let [users,setUsers] = useState([])

useEffect(()=>{
    async function userData(){
        let {data} = await axios.get("https://dummyjson.com/users")
        console.log(data.users)
        setUsers(data.users)
    }
    userData()
},[])
    // filter the data

    let [search,setSearch] = useState("")

    let filterData = useMemo(()=>{
        return users.filter(item=>item.firstname.toLowercase().includes(search.toLowerCase()))
    },[users,search])

    let handleData = useCallback((e)=>{
        setSearch(e.target.value)
    })
     
    let deleteData = useCallback(async(user)=>{
        await axios.delete(`https://dummyjson.com/users/${users.id}`)
        setUsers(prev=>prev.filter(item=>item.id!==user.id))
    },[])
    return(
        <>
        <center>
            <h1 className="mb-3 mt-3">Dashboard</h1> </center>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <input type="text" placeholder="search.." className="form-control" onChange={handleData}/>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="table table-hover">
                            <thead>
                                <tr className="table-dark">
                                    <td>SNO</td>
                                    <td>NAME</td>
                                    <td>EMAIL</td>
                                    <td>GENDER</td>
                                    <td>EDIT</td>
                                    <td>DELETE</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterData.map((item)=>(
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.firstname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.gender}</td>
                                            <td>
                                                <button className="btn btn-primary">Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </div>

                    </div>

                </div>

            </div>
        
        </>
    )
}