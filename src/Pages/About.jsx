// export const About=()=>{
//     return(
//         <>
//         <center>
//             <h1>About us</h1>
//             <img src="https://static.vecteezy.com/system/resources/thumbnails/029/771/650/small/fresh-fruits-in-basket-isolated-on-white-background-healthy-fruits-rich-in-vitamins-generative-ai-free-photo.jpeg" alt="" style={{width:"400px",height:"300px"}}/> <br /> <br />
//             <h4>We provide fresh,organic fruits directly from farms. Healthy eating starts here! </h4> <br /><br />
//         </center>
//         </>
//     )
// }

import React from "react";
import { Link } from "react-router-dom"

// export const Home = () => {
//     return (
//         <>
//             {/* Hero Section */}
//             <section
//                 className="container-fluid py-5"
//                 style={{
//                     background: "linear-gradient(to right, #f8fff8, #e8f5e9)",
//                     minHeight: "90vh"
//                 }}
//             >
//                 <div className="container h-100">
//                     <div className="row align-items-center h-100">

//                         <div className="col-md-6">
//                             <span className="badge bg-success px-3 py-2 mb-3 fs-6">
//                                 Trending Online Store
//                             </span>

//                             <h1 className="display-3 fw-bold text-dark">
//                                 Smart Shopping Starts With
//                                 <span className="text-success"> ShopEase</span>
//                             </h1>

//                             <p className="lead text-secondary mt-4">
//                                 Explore premium products, exciting deals, and a seamless online shopping experience all in one place.
//                             </p>

//                             <div className="mt-4 d-flex gap-3">
//                                 <Link
//                                     to="/products"
//                                     className="btn btn-success btn-lg px-4"
//                                 >
//                                     Shop Now
//                                 </Link>

//                                 <Link
//                                     to="/about"
//                                     className="btn btn-outline-dark btn-lg px-4"
//                                 >
//                                     Explore
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="col-md-6 position-relative text-center mt-5 mt-md-0">
//                             <img
//                                 src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop"
//                                 alt="shopping-banner"
//                                 className="img-fluid rounded-5 shadow-lg"
//                                 style={{
//                                     width: "100%",
//                                     height: "550px",
//                                     objectFit: "cover"
//                                 }}
//                             />

//                             <div
//                                 className="position-absolute top-50 start-50 translate-middle text-white"
//                                 style={{
//                                     background: "rgba(0,0,0,0.45)",
//                                     padding: "20px 30px",
//                                     borderRadius: "20px",
//                                     backdropFilter: "blur(5px)"
//                                 }}
//                             >
//                                 <h2 className="fw-bold">Exclusive Shopping Deals</h2>
//                                 <p className="mb-0">Fashion • Electronics • Beauty • Groceries</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>

            

//             {/* Categories */}
//             <section className="container py-5">
//                 <h2 className="text-center fw-bold mb-5">
//                     Popular Categories
//                 </h2>

//                 <div className="row g-4 text-center">

//                     <div className="col-md-3 col-6">
//                         <div className="bg-light shadow-sm rounded-4 p-4">
//                             <h5>Fashion</h5>
//                         </div>
//                     </div>

//                     <div className="col-md-3 col-6">
//                         <div className="bg-light shadow-sm rounded-4 p-4">
//                             <h5>Beauty</h5>
//                         </div>
//                     </div>

//                     <div className="col-md-3 col-6">
//                         <div className="bg-light shadow-sm rounded-4 p-4">
//                             <h5>Electronics</h5>
//                         </div>
//                     </div>

//                     <div className="col-md-3 col-6">
//                         <div className="bg-light shadow-sm rounded-4 p-4">
//                             <h5>Groceries</h5>
//                         </div>
//                     </div>

//                 </div>
//             </section>

//             {/* Offer Banner */}
//             <section className="container-fluid bg-success text-white text-center py-5 mt-5">
//                 <h1 className="fw-bold">Mega Sale is Live 🔥</h1>

//                 <p className="lead mt-3">
//                     Grab exciting offers and discounts up to 50% on trending products.
//                 </p>

//                 <Link
//                     to="/products"
//                     className="btn btn-light btn-lg mt-2 px-4"
//                 >
//                     Explore Products
//                 </Link>
//             </section>
//         </>
//     )
// };

// ================= ABOUT PAGE =================

export const About = () => {
    return (
        <>
            {/* About Hero Section */}
            <section
                className="container-fluid py-5"
                style={{
                    background: "linear-gradient(to right, #f1fff4, #e8f5e9)",
                    minHeight: "70vh"
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold text-dark">
                                About <span className="text-success">ShopEase</span>
                            </h1>

                            <p className="lead text-secondary mt-4">
                                ShopEase is a modern e-commerce platform designed to provide a fast, secure, and seamless online shopping experience.
                            </p>

                            <p className="text-secondary">
                                Explore trending products, discover exciting deals, and enjoy smooth shopping with an attractive and user-friendly interface.
                            </p>
                        </div>

                        <div className="col-md-6 text-center mt-5 mt-md-0">
                            <img
                                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1400&auto=format&fit=crop"
                                alt="about-shopping"
                                className="img-fluid rounded-5 shadow-lg"
                                style={{
                                    width: "100%",
                                    height: "450px",
                                    objectFit: "cover"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container py-5">
                <h2 className="text-center fw-bold mb-5">
                    Why Choose ShopEase?
                </h2>

                <div className="row g-4 text-center">

                    <div className="col-md-3 col-6">
                        <div className="card border-0 shadow-lg p-4 rounded-4 h-100">
                            <div className="fs-1">🚚</div>
                            <h5 className="mt-3 fw-bold">Fast Delivery</h5>
                            <p className="text-secondary">
                                Quick delivery for all your orders.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="card border-0 shadow-lg p-4 rounded-4 h-100">
                            <div className="fs-1">🔒</div>
                            <h5 className="mt-3 fw-bold">Secure Payment</h5>
                            <p className="text-secondary">
                                Safe and trusted payment methods.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="card border-0 shadow-lg p-4 rounded-4 h-100">
                            <div className="fs-1">🛍️</div>
                            <h5 className="mt-3 fw-bold">Best Products</h5>
                            <p className="text-secondary">
                                Premium quality products at best prices.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="card border-0 shadow-lg p-4 rounded-4 h-100">
                            <div className="fs-1">⭐</div>
                            <h5 className="mt-3 fw-bold">Customer Satisfaction</h5>
                            <p className="text-secondary">
                                Smooth and user-friendly shopping experience.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Why ShopEase Section */}

<section className="container py-5">

    <div className="text-center mb-5">

        <h1 className="fw-bold">
            Why Choose ShopEase? ✨
        </h1>

        <p className="text-secondary">
            More than shopping — an experience designed around simplicity and style.
        </p>

    </div>

    <div className="row align-items-center g-5">

        <div className="col-md-6">

            <img
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae"
                alt=""
                className="img-fluid rounded-5 shadow-lg"
                style={{
                    height:"450px",
                    width:"100%",
                    objectFit:"cover"
                }}
            />

        </div>


        <div className="col-md-6">

            <h2 className="fw-bold">
                Everything You Need In One Place
            </h2>

            <p className="text-secondary mt-4">

                ShopEase is built to create a modern shopping experience where customers can easily explore products from multiple categories.

                We provide fashion, electronics, books, fitness products, accessories, home decor, gadgets and much more.

            </p>


            <div className="row mt-4 g-3">

                <div className="col-6">

                    <div className="shadow rounded-4 p-3">

                        <h5>👕 Fashion</h5>

                        <small className="text-secondary">
                            Modern styles & trends
                        </small>

                    </div>

                </div>


                <div className="col-6">

                    <div className="shadow rounded-4 p-3">

                        <h5>💻 Electronics</h5>

                        <small className="text-secondary">
                            Smart gadgets
                        </small>

                    </div>

                </div>


                <div className="col-6">

                    <div className="shadow rounded-4 p-3">

                        <h5>🏠 Home Decor</h5>

                        <small className="text-secondary">
                            Upgrade your lifestyle
                        </small>

                    </div>

                </div>


                <div className="col-6">

                    <div className="shadow rounded-4 p-3">

                        <h5>🏋️ Fitness</h5>

                        <small className="text-secondary">
                            Health essentials
                        </small>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>



{/* Explore ShopEase Gallery */}

<section className="container py-5">

    <div className="text-center mb-5">

        <h1 className="fw-bold">
            Explore ShopEase Gallery 📸
        </h1>

        <p className="text-secondary">
            Discover the world of fashion, lifestyle and smart shopping
        </p>

    </div>

    <div className="row g-4">

        {/* Image 1 */}
        <div className="col-md-4">

            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                    style={{
                        height:"260px",
                        objectFit:"cover"
                    }}
                    alt=""
                />

                <div className="card-body text-center">

                    <h5 className="fw-bold">
                        Fashion Collection
                    </h5>

                    <p className="text-secondary">
                        Discover premium styles and trending fashion.
                    </p>

                </div>

            </div>

        </div>


        {/* Image 2 */}
        <div className="col-md-4">

            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                    style={{
                        height:"260px",
                        objectFit:"cover"
                    }}
                    alt=""
                />

                <div className="card-body text-center">

                    <h5 className="fw-bold">
                        Smart Gadgets
                    </h5>

                    <p className="text-secondary">
                        Explore modern electronics and technology.
                    </p>

                </div>

            </div>

        </div>


        {/* Image 3 */}
        <div className="col-md-4">

            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                    style={{
                        height:"260px",
                        objectFit:"cover"
                    }}
                    alt=""
                />

                <div className="card-body text-center">

                    <h5 className="fw-bold">
                        Lifestyle Essentials
                    </h5>

                    <p className="text-secondary">
                        Products designed for everyday convenience.
                    </p>

                </div>

            </div>

        </div>


        {/* Image 4 */}
        <div className="col-md-4">

            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                    style={{
                        height:"260px",
                        objectFit:"cover"
                    }}
                    alt=""
                />

                <div className="card-body text-center">

                    <h5 className="fw-bold">
                        Trending Outfits
                    </h5>

                    <p className="text-secondary">
                        Upgrade your wardrobe with modern trends.
                    </p>

                </div>

            </div>

        </div>


        {/* Image 5 */}
        <div className="col-md-4">

            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                    style={{
                        height:"260px",
                        objectFit:"cover"
                    }}
                    alt=""
                />

                <div className="card-body text-center">

                    <h5 className="fw-bold">
                        Home Decor
                    </h5>

                    <p className="text-secondary">
                        Create beautiful spaces with stylish decor.
                    </p>

                </div>

            </div>

        </div>


        {/* Image 6 */}
        <div className="col-md-4">

            <div className="card border-0 shadow-lg rounded-5 overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                    style={{
                        height:"260px",
                        objectFit:"cover"
                    }}
                    alt=""
                />

                <div className="card-body text-center">

                    <h5 className="fw-bold">
                        Fitness Collection
                    </h5>

                    <p className="text-secondary">
                        Stay healthy with fitness essentials.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>
            {/* CTA Section */}
            <section className="container text-center py-5">
                <h2 className="fw-bold">Start Shopping With ShopEase</h2>

                <p className="text-secondary mt-3">
                    Discover trending products and enjoy a seamless online shopping experience.
                </p>

                <Link to="/products" className="btn btn-success btn-lg mt-3 px-4">
                    Explore Products
                </Link>
            </section>
        </>
    )
}

