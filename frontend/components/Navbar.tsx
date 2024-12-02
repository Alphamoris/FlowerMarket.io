"use client"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navclr" id="mark">
                <div className="container-fluid">
                    <div className="d-flex me-auto">
                        <div className="text-center me-3">
                            <Link href={"/"}>
                                <button className="btn navlinks" type="button" aria-label="home">
                                    <i className="bi bi-house me-1"></i>Home
                                </button>
                            </Link>
                        </div>
                        <div className="text-center me-3">
                            <Link href={"/prices"}>
                                <button className="btn navlinks" type="button" aria-label="prices">
                                    <i className="bi bi-currency-rupee"></i>Prices
                                </button>
                            </Link>
                        </div>
                        <div className="text-center me-3">
                            <Link href={"/types"}>
                                <button className="btn navlinks" type="button" aria-label="types">
                                    <i className="bi bi-flower3"></i>Types
                                </button>
                            </Link>
                        </div>
                        <div className="text-center me-3">
                            <Link href={"/market"}>
                                <button className="btn navlinks" type="button" aria-label="market">
                                    <i className="bi bi-shop me-1"></i>Market
                                </button>
                            </Link>
                        </div>
                        <div className="text-center me-3">
                            <Link href={"/help/aboutus"}>
                                <button className="btn navlinks" type="button" aria-label="about us">
                                    <i className="bi bi-feather2"></i>About Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    <form className="d-lg-flex d-none" role="search">
                        <div className="border border-dark rounded-1">
                            <div className="input-group input-group-prefix input-group-sm">
                                <input type="text" className="form-control form-control-sm" placeholder="Search..."
                                    aria-label="Search input" aria-describedby="btnGroupAddon2" />
                                <div className="input-group-text">
                                    <button className='btn btn-sm btn-outline-dark' type="button" aria-label="search">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    )
}