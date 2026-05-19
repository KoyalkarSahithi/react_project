// import axios from "axios"
// import { useEffect, useState } from "react"

import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// export const Productlist=()=>{
//     let [products,setProducts] = useState([])

//     //pagination
//     let [page,setPage] = useState(1)
//     let totalPages = 10

//     useEffect(()=>{
//         async function apiData(){
//             let {data} = await axios.get("https://dummyjson.com/products")
//             console.log(data.products)
//             setProducts(data.products)
//             fetch method
//             let a = fetch("https://dummyjson.com/products")
//             let b = await a;
//             let {products} = await b.json()
//             console.log(products)
//             setProducts(products)
//         }
//         apiData()
//     },[])

//     let pagination = products.slice((page-1)*totalPages,page*totalPages)
//     return(
//         <>
//         <center>
//             <h1 className="mb-3 mt-3">ProductsData</h1>
//         </center>
//         <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
//             {
//                 pagination.map((item)=>(
//                     <div style={{width:"180px",border:"2px solid",borderRadius:"10px",padding:"8px",margin:"5px",textAlign:"center"}}>
//                         <img src={item.thumbnail} alt="" height={140}/>
//                         <h1>{item.title}</h1>
//                         <p>{item.description}</p>
//                         <mark>{item.price}</mark>
//                     </div>
//                 ))
//             }
//         </div>
//         <div className="text-center m-3">
//             {
//                 [1,2,3,4,5,6,7,8,9,10].map((btn)=>(
//                     <button className="btn btn-primary m-2" onClick={()=>setPage(btn)}>{btn}</button>
//                 ))
//             }

//         </div>
//         </>
//     )
// }
const Productlist = () => {
    let [categoryList, setCategoryList] = useState([])
    let [products, setProducts] = useState([])
    let [category, setCategory] = useState("")
    let [search, setSearch] = useState("")
    let [page,setPage] = useState(1)
    let [btns,setBtns] = useState(0)
    let perPage=10


    useEffect(() => {
        async function categoryData() {
            let { data } = await axios.get("https://dummyjson.com/products/category-list")
            // console.log(data)
            setCategoryList(data)
        }
        categoryData()
    }, [])


    useEffect(() => {
        async function threeApi() {
            let api;
            if (category) {
                api = `https://dummyjson.com/products/category/${category}`
            }
            else if (search) {
                api = `https://dummyjson.com/products/search?q=${search}`
            }
            else {
                api = `https://dummyjson.com/products`
            }

            let { data } = await axios.get(api)

            let allProducts = data.products || []
            setBtns(allProducts.length)

            let pagination=allProducts.slice((page-1)*perPage,page*perPage)

            setProducts(pagination)
        }
        threeApi()

    }, [category,search,page])

    let viewButtons = Math.ceil(btns/perPage)

    return(
    <>
            <center>
                <h1>Filter the data</h1>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <input type="text" className="form-contrl" placeholder="search" 
                        onChange={(e)=>{
                            setSearch(e.target.value)
                            setCategory("")
                            setPage(1)
                        }}
                        />
                        
                    </div>
                    <div className="col-5">
                        <select name="" id="" className="form-control"
                        onChange={(e)=>{
                            setCategory(e.target.value)
                            setSearch("")
                            setPage(1)
                        }}
                        >
                            <option value="">ALL CATEGORIES</option>
                            {
                                categoryList.map((item, i) => (
                                    <option key={i} value={item}>{item}</option>
                                ))
                            }
                        </select>

                    </div>

                </div>

            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {
                    products.map((item) =>(
                        <Link 
                        className="nav-link text-dark" to={`/products/${item.id}`}>
                        <div style={{ width: "300px", textAlign: "center", margin: "5px", padding: "8px", border: "2px solid", borderRadius: "10px" }}>
                            <img src={item.thumbnail} alt="" />
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <mark>{item.price}</mark>
                            </div>
                        </Link>
                        
                    ))
                        
            }
            </div>
            <div className="text-center">
                {
                    viewButtons>0 &&
                    Array.from({length:viewButtons},(_,i)=>i+1).map((btn)=>(
                        <button className="btn btn-primary m-2" onClick={()=>setPage(btn)}>{btn}</button>
                    ))
                }
            </div>
    </>

     )
}

export default Productlist;