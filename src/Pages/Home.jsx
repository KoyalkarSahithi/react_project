

import React from "react";
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                className="container-fluid py-5"
                style={{
                    background: "linear-gradient(to right, #f8fff8, #e8f5e9)",
                    minHeight: "90vh"
                }}
            >
                <div className="container h-100">
                    <div className="row align-items-center h-100">

                        <div className="col-md-6">
                            <span className="badge bg-success px-3 py-2 mb-3 fs-6">
                                Trending Online Store
                            </span>

                            <h1 className="display-3 fw-bold text-dark">
                                Smart Shopping Starts With
                                <span className="text-success"> ShopEase</span>
                            </h1>

                            <p className="lead text-secondary mt-4">
                                Explore premium products, exciting deals, and a seamless online shopping experience all in one place.
                            </p>

                            <div className="mt-4 d-flex gap-3">
                                <Link
                                    to="/products"
                                    className="btn btn-success btn-lg px-4"
                                >
                                    Shop Now
                                </Link>

                                <Link
                                    to="/about"
                                    className="btn btn-outline-dark btn-lg px-4"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-6 position-relative text-center mt-5 mt-md-0">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
                                alt="shopping-banner"
                                className="img-fluid rounded-5 shadow-lg"
                                style={{
                                    width: "100%",
                                    height: "550px",
                                    objectFit: "cover"
                                }}
                            />

                            <div
                                className="position-absolute top-50 start-50 translate-middle text-white"
                                style={{
                                    background: "rgba(0,0,0,0.45)",
                                    padding: "20px 30px",
                                    borderRadius: "20px",
                                    backdropFilter: "blur(5px)"
                                }}
                            >
                                <h2 className="fw-bold">Exclusive Shopping Deals</h2>
                                <p className="mb-0">Fashion • Electronics • Beauty • Groceries</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
{/* Featured Shopping Zones */}

<section className="container py-5">

    <div className="text-center mb-5">

        <h1 className="fw-bold">
            Discover Your Next Favorite ✨
        </h1>

        <p className="text-secondary">
            Explore handpicked collections and trending products
        </p>

    </div>


    <div className="row g-4">

        {/* Big Left Banner */}

        <div className="col-md-6">

            <div
                className="position-relative overflow-hidden rounded-5 shadow-lg"
                style={{height:"450px"}}
            >

                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
                    className="w-100 h-100"
                    style={{
                        objectFit:"cover"
                    }}
                    alt=""
                />

                <div
                    className="position-absolute top-50 start-0 translate-middle-y p-5 text-white"
                    style={{
                        background:"rgba(0,0,0,.35)",
                        width:"70%"
                    }}
                >

                    <h2 className="fw-bold">
                        Summer Collection 2026
                    </h2>

                    <p>
                        Up to 50% Off
                    </p>

                    <Link
                        to="/products"
                        className="btn btn-light rounded-pill px-4"
                    >
                        Shop Now
                    </Link>

                </div>

            </div>

        </div>


        {/* Right Grid */}

        <div className="col-md-6">

            <div className="row g-4">

                <div className="col-6">

                    <div
                        className="position-relative rounded-5 overflow-hidden shadow"
                        style={{height:"210px"}}
                    >

                        <img
                            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                            className="w-100 h-100"
                            style={{objectFit:"cover"}}
                            alt=""
                        />

                        <div className="position-absolute bottom-0 p-3 text-white">
                            <h5>Electronics</h5>
                        </div>

                    </div>

                </div>


                <div className="col-6">

                    <div
                        className="position-relative rounded-5 overflow-hidden shadow"
                        style={{height:"210px"}}
                    >

                        <img
                            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                            className="w-100 h-100"
                            style={{objectFit:"cover"}}
                            alt=""
                        />

                        <div className="position-absolute bottom-0 p-3 text-white">
                            <h5>Fashion</h5>
                        </div>

                    </div>

                </div>


                <div className="col-6">

                    <div
                        className="position-relative rounded-5 overflow-hidden shadow"
                        style={{height:"210px"}}
                    >

                        <img
                            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
                            className="w-100 h-100"
                            style={{objectFit:"cover"}}
                            alt=""
                        />

                        <div className="position-absolute bottom-0 p-3 text-white">
                            <h5>Beauty</h5>
                        </div>

                    </div>

                </div>


                <div className="col-6">

                    <div
                        className="position-relative rounded-5 overflow-hidden shadow"
                        style={{height:"210px"}}
                    >

                        <img
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                            className="w-100 h-100"
                            style={{objectFit:"cover"}}
                            alt=""
                        />

                        <div className="position-absolute bottom-0 p-3 text-white">
                            <h5>Accessories</h5>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

{/* Trending Collections */}

<section className="container py-5">

    <h2 className="text-center fw-bold mb-5">
        Discover More Categories ✨
    </h2>

    <div className="row g-4">

        {[
            {
                title:"Fashion",
                image:"https://images.unsplash.com/photo-1483985988355-763728e1935b"
            },

            {
                title:"Books",
                image:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            },

            {
                title:"Kitchen",
                image:"https://images.unsplash.com/photo-1556911220-bff31c812dba"
            },

            {
                title:"Shoes",
                image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            },

            {
                title:"Toys",
                image:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4"
            },

            {
                title:"Laptops",
                image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa"
            },

            {
                title:"T-Shirts",
                image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
            },

            {
                title:"Headphones",
                image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            },

            {
                title:"Accessories",
                image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            },

            {
                title:"Pet Care",
                image:"https://images.unsplash.com/photo-1517849845537-4d257902454a"
            },

            {
                title:"Home Decor",
                image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            },

            {
                title:"Fitness",
                image:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            }

        ].map((item,index)=>(

            <div className="col-md-2" key={index}>

                <div
                    className="card border-0 shadow rounded-4 overflow-hidden h-100"
                    style={{
                        transition:"0.3s",
                        cursor:"pointer"
                    }}
                >

                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            height:"180px",
                            width:"100%",
                            objectFit:"cover"
                        }}
                    />

                    <div className="card-body text-center">

                        <h6 className="fw-bold">
                            {item.title}
                        </h6>

                    </div>

                </div>

            </div>

        ))}

    </div>

</section>

            

           

            {/* Offer Banner */}
            <section className="container-fluid bg-success text-white text-center py-5 mt-5">
                <h1 className="fw-bold">Mega Sale is Live 🔥</h1>

                <p className="lead mt-3">
                    Grab exciting offers and discounts up to 50% on trending products.
                </p>

                <Link
                    to="/products"
                    className="btn btn-light btn-lg mt-2 px-4"
                >
                    Explore Products
                </Link>
            </section>
        </>
    )
};
