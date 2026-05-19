// import { useSelector } from "react-redux"
// import { Link } from "react-router-dom"

// export const Header = () => {

//     let cartValue = useSelector(state=>state.cart)

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand text-white" to="/">ShopEase</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         {/* <form className="d-flex" role="search">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form> <hr /> */}
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" to="/Home" style={{color:"white"}}>Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/About" style={{color:"white"}}>About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/Products" style={{color:"white"}}>Products</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/Cart" style={{color:"white"}}>Cart<sup>{cartValue.length}</sup></Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/" style={{color:"white"}}>Contact</Link>
//                             </li>
//                         </ul>
                        
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Header = () => {

    let cartValue = useSelector(state => state.cart)

    return (
        <>
            <nav
                className="navbar navbar-expand-lg shadow sticky-top"
                style={{
                    background: "linear-gradient(to right, #0f172a, #1e293b)",
                    padding: "15px 0"
                }}
            >
                <div className="container">

                    {/* Logo */}
                    <Link
                        className="navbar-brand fw-bold"
                        to="/"
                        style={{
                            color: "white",
                            fontSize: "2rem",
                            letterSpacing: "1px"
                        }}
                    >
                        🛒 ShopEase
                    </Link>

                    {/* Toggle Button */}
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >

                        <ul className="navbar-nav ms-auto align-items-center gap-3">

                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/Home"
                                    style={{ fontSize: "1.1rem" }}
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/About"
                                    style={{ fontSize: "1.1rem" }}
                                >
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/Products"
                                    style={{ fontSize: "1.1rem" }}
                                >
                                    Products
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link text-white fw-semibold"
                                    to="/Cart"
                                    style={{ fontSize: "1.1rem" }}
                                >
                                    Cart
                                    <sup
                                        className="ms-1 badge bg-light text-dark"
                                        style={{ fontSize: "0.7rem" }}
                                    >
                                        {cartValue.length}
                                    </sup>
                                </Link>
                            </li>

                            {/* Contact Button */}
                            <li className="nav-item">
                                <Link
                                    className="btn px-4 rounded-pill fw-semibold"
                                    to="/Contact"
                                    style={{
                                        backgroundColor: "#f8fafc",
                                        color: "#0f172a",
                                        border: "none"
                                    }}
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}