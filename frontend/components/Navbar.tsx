"use client"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navclr" id="mark">
            <div className="container-fluid">
                <div className="d-flex me-auto">
                    {[
                        { href: "/", label: "Home", icon: "bi-house" },
                        { href: "/prices", label: "Prices", icon: "bi-currency-rupee" },
                        { href: "/types", label: "Types", icon: "bi-flower3" },
                        { href: "/market", label: "Market", icon: "bi-shop" },
                        { href: "/help/aboutus", label: "About Us", icon: "bi-feather2" }
                    ].map((item, index) => (
                        <div className="text-center me-3" key={index}>
                            <Link href={item.href}>
                                <button className="btn navlinks" type="button" aria-label={item.label.toLowerCase()}>
                                    <i className={`bi ${item.icon} me-1`}></i>{item.label}
                                </button>
                            </Link>
                        </div>
                    ))}
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
    )
}