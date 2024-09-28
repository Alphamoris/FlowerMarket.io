import Link from "next/link"
import React from "react"
interface Priceslist {
    PricesList: {
        imgurl: string,
        fname: string,
        content: string,
        place: string,
        price: number,
        time: string
    }[]
}
const Prices: React.FC<Priceslist> = ({ PricesList }) => {


    return (
        <>
            <div className=" m-2">
                {
                    PricesList.map(element => (
                        <div className="row row-cols-1 row-cols-md-2  ">
                            <div className="col">
                                <div className="card m-3 border border-5 rounded-4" id="pricescard">
                                    <div className="card-header d-flex align-items-center">
                                        <span className="avatar text-bg-dark text-center align-content-center avatar-lg rounded-5 fs-5">R</span>
                                        <div className="ms-3">
                                            <h6 className="mb-0 fs-sm">Shrimp and Chorizo Paella</h6>
                                            <span className="text-muted fs-sm">{element.time},September 14, 2022</span>
                                        </div>
                                        <div className="dropstart ms-auto">
                                            <button className="btn text-muted" type="button" data-bs-toggle="dropdown" aria-label="button" aria-expanded="false">
                                                <i className="bi bi-three-dots-vertical"></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">Action</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={element.imgurl} className="img-fluid rounded-start" alt="images" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{element.fname}</h5>
                                                <p className="card-text">
                                                    {element.content}
                                                    <h6>Price : <i className="bi bi-currency-rupee"></i>{element.price}</h6>
                                                    <h6>Place : <i className="bi bi-geo-alt-fill"></i>{element.place}</h6>
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex">
                                            <button className="btn btn-subtle" type="button" aria-label="button"><i className="bi bi-suit-heart-fill fs-6"></i></button>
                                            <button className="btn btn-subtle" type="button" aria-label="button"><i className="bi bi-share-fill fs-5"></i></button>
                                            <button type="button" className="btn btn-link p-0 ms-auto fw-bold">Explore</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card m-3 border border-5 rounded-4" id="pricescard">
                                    <div className="card-header d-flex align-items-center">
                                        <span className="avatar text-bg-dark text-center align-content-center avatar-lg rounded-5 fs-5">R</span>
                                        <div className="ms-3">
                                            <h6 className="mb-0 fs-sm">Shrimp and Chorizo Paella</h6>
                                            <span className="text-muted fs-sm">{element.time}September 14, 2022</span>
                                        </div>
                                        <div className="dropstart ms-auto">
                                            <button className="btn text-muted" type="button" data-bs-toggle="dropdown" aria-label="button" aria-expanded="false">
                                                <i className="bi bi-three-dots-vertical"></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">Action</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={element.imgurl} className="img-fluid rounded-start" alt="images" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{element.fname}</h5>
                                                <p className="card-text">
                                                    {element.content}
                                                    <h6>Price : <i className="bi bi-currency-rupee"></i>{element.price}</h6>
                                                    <h6>Place : <i className="bi bi-geo-alt-fill"></i>{element.place}</h6>
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex">
                                            <button className="btn btn-subtle" type="button" aria-label="button"><i className="bi bi-suit-heart-fill fs-5"></i></button>
                                            <button className="btn btn-subtle" type="button" aria-label="button"><i className="bi bi-share-fill fs-6"></i></button>
                                            <button type="button" className="btn btn-link p-0 ms-auto fw-bold">Explore</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


export default Prices