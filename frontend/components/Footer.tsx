"use client";
import Link from "next/link"
import Image from 'next/image'; // Importing Image from next/image
import "../styles/footerstyle.css"

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link href="index.html" aria-label="link">
                                <Image src="/logo.png" alt="" className="img-fluid logo-footer mb-4" width={500} height={300} /> {/* Replaced img with Image */}
                            </Link>
                            <div className="footer-about">
                                <p>Flower Market.io is customer satisfaction first website , which has vision of providing values to the society </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="useful-link">
                                <h2>Useful Links</h2>
                                <div className="use-links">
                                    <ul>
                                        <li><Link href="/" className="fs-5"><i className="bi bi-bullseye"></i> Home</Link></li>
                                        <li><Link href="/help/aboutus" className="fs-5"><i className="bi bi-bullseye"></i> About Us</Link></li>
                                        <li><Link href="/prices" className="fs-5"><i className="bi bi-bullseye"></i> Prices</Link></li>
                                        <li><Link href="/help/contactus" className="fs-5"><i className="bi bi-bullseye"></i> Contact</Link></li>
                                        <li><Link href="/" className="fs-5"><i className="bi bi-bullseye"></i> Market</Link></li>
                                        <li><Link href="/" className="fs-5"><i className="bi bi-bullseye"></i> Types</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="social-links">
                                <h2>Follow Us</h2>
                                <div className="social-icons">
                                    <ul>    
                                        <li><Link href=""><i className="bi bi-facebook"></i> Facebook</Link></li>
                                        <li><Link href=""><i className="bi bi-instagram"></i> Instagram</Link></li>
                                        <li><Link href=""><i className="bi bi-linkedin"></i> Linkedin</Link></li>
                                        <li><Link href=""><i className="bi bi-github"></i> Github</Link></li>
                                        <li><Link href=""><i className="bi bi-twitter-x"></i> X<small>(twitter)</small></Link></li>
                                        <li><Link href=""><i className="bi bi-whatsapp"></i> Whatsapp</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="address">
                                <h2>Address</h2>
                                <div className="address-links">
                                    <ul>    
                                        <li className="address1"><i className="bi bi-geo-alt-fill"></i> 20th floor , alpha services and technologies ,
                                        mookandapalli ,
                                        Hosur 635126</li>
                                        <li><Link href=""><i className="bi bi-telephone-fill"></i> +91 7010815310</Link></li>
                                        <li><Link href=""><i className="bi bi-envelope-at-fill"></i>alphamoris45@gmail.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <section id="copy-right">
                <div className="copy-right-sec"><i className="bi bi-c-circle"></i>
                    All Rights Reserved By <Link href="#">@alphamoris45</Link>
                </div>
            </section>
        </>
    )
}