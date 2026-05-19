// export const Footer = () => {
//     return (
//         <>
//             <center>
                {/* <div class="container">
                    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div class="col-md-4 d-flex align-items-center">
                            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
                                <svg class="bi" width="30" height="24" aria-hidden="true">
                                    <use xlink:href="#bootstrap"></use>
                                </svg>
                            </a>
                            <span class="mb-3 mb-md-0 text-body-secondary"><center>© 2025 Company, Inc</center></span>
                        </div> <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li class="ms-3">
                                <a class="text-body-secondary" href="#" aria-label="Instagram">
                                    <svg class="bi" width="24" height="24" aria-hidden="true">
                                        <use xlink:href="#instagram"></use></svg></a></li>
                            <li class="ms-3"><a class="text-body-secondary" href="#" aria-label="Facebook">
                                <svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> </ul> </footer> </div> */}
            {/* <footer>
               <h6>@2026 Fruit Shop | Fresh & Healthy</h6>
            </footer> */}
//             </center>
//         </>
//     )
// }

import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <footer
                className="text-white pt-5 pb-3 mt-5"
                style={{
                    background: "linear-gradient(to right, #0f172a, #1e293b)"
                }}
            >
                <div className="container">

                    <div className="row">

                        {/* Logo & Description */}
                        <div className="col-md-4 mb-4">
                            <h2 className="fw-bold">
                                🛒 ShopEase
                            </h2>

                            <p className="text-light mt-3">
                                Your one-stop destination for trendy products,
                                exciting deals, and seamless online shopping.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-4 mb-4">
                            <h4 className="fw-bold mb-3">
                                Quick Links
                            </h4>

                            <ul className="list-unstyled">

                                <li className="mb-2">
                                    <Link
                                        to="/Home"
                                        className="text-decoration-none text-light"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li className="mb-2">
                                    <Link
                                        to="/About"
                                        className="text-decoration-none text-light"
                                    >
                                        About
                                    </Link>
                                </li>

                                <li className="mb-2">
                                    <Link
                                        to="/Products"
                                        className="text-decoration-none text-light"
                                    >
                                        Products
                                    </Link>
                                </li>

                                <li className="mb-2">
                                    <Link
                                        to="/Cart"
                                        className="text-decoration-none text-light"
                                    >
                                        Cart
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 mb-4">
                            <h4 className="fw-bold mb-3">
                                Contact
                            </h4>

                            <p className="text-light">
                                📧 support@shopease.com
                            </p>

                            <p className="text-light">
                                📞 +91 9876543210
                            </p>

                            <div className="d-flex gap-3 mt-3">

                                <a
                                    href="#"
                                    className="btn btn-light rounded-circle"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>

                                <a
                                    href="#"
                                    className="btn btn-light rounded-circle"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>

                                <a
                                    href="#"
                                    className="btn btn-light rounded-circle"
                                >
                                    <i className="bi bi-twitter-x"></i>
                                </a>

                            </div>
                        </div>

                    </div>

                    <hr className="border-light" />

                    {/* Bottom Footer */}
                    <div className="text-center">
                        <p className="mb-0 text-light">
                            © 2026 ShopEase | All Rights Reserved
                        </p>
                    </div>

                </div>
            </footer>
        </>
    )
}