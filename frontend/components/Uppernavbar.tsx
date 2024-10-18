"use client"
import Link from "next/link"
import Image from "next/image";
import Loginpage from "./LoginPage";
import SignupPage from "./SignupPage";
import Mainheading from "./Mainheading";
import Logout from "./Logout";
import { useState } from "react";
import { AuthProvider } from "./AuthContext";



export default function Uppernavbar() {


    const [loginstatus, setloginstatus] = useState<Boolean>(true)
    const onclick1 = () => {
        const variable = document.querySelector("#offcanvasWithBothOptions")
        variable?.setAttribute("class", "offcanvas offcanvas-start bg-dark-subtle hide")
    }



    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light border border-bottom border-black w-100 unavclr">
                <button
                    className="btn btn-outline-dark ms-2 mt-1"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                    aria-label="Toggle menu">
                    <i className="bi bi-list"></i>
                </button>
                <a className="navbar-brand" href="#" aria-label="link">
                    <Image src="/logo.png" alt="Logo" width="25" height="25" className="d-inline-block align-text-center ms-3 me-1" />
                    <Mainheading />
                </a>
                <div className="d-flex ms-auto">
                    <Link href={"/help/contactus"}>
                        <button className="btn btn-outline-dark me-2" type="button" aria-label="telephone" title="Contact US">
                            <i className="bi bi-telephone"></i>
                        </button>
                    </Link>
                    <AuthProvider>
                        <Loginpage />
                        <SignupPage />
                        <Logout />
                    </AuthProvider>
                </div>
            </nav>

            <div

                className="offcanvas offcanvas-start bg-dark-subtle"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className=" offcanvas-sm navbar-brand" id="offcanvasWithBothOptionsLabel">Flower Market.in</h5>
                    <button
                        type="button"
                        className="btn btn-close "
                        data-bs-dismiss="offcanvas"
                        aria-label="Close">
                    </button>
                </div>
                <div className="offcanvas-body ">
                    {loginstatus && (
                        <Link href="/">
                            <span className="badge bi-arrow-down-right-circle text-bg-secondary fs-6 my-4 col-12">
                                Please Login</span></Link>
                    )}
                    <Link href="/market" onClick={onclick1} className=" link-dark d-block mb-3 ms-3 links"><i className="bi bi-caret-right-fill me-2"></i>Find Markets</Link>
                    <Link href="/seller" onClick={onclick1} className=" link-dark d-block mb-3 ms-3 links"><i className="bi bi-caret-right-fill me-2"></i>Find Sellers</Link>
                    <Link href="/bulkmarket" onClick={onclick1} className=" link-dark d-block mb-3 ms-3 links"><i className="bi bi-caret-right-fill me-2"></i>Bulk Market</Link>
                    <Link href="/" onClick={onclick1} className=" link-dark d-block mb-3 ms-3 links"><i className="bi bi-caret-right-fill me-2"></i>Transport</Link>
                    <Link href="/" onClick={onclick1} className=" link-dark d-block mb-3 ms-3 links"><i className="bi bi-caret-right-fill me-2"></i>History</Link>
                    <Link href="/help/contactus" onClick={onclick1} className=" link-dark d-block mb-3 ms-3 links"><i className="bi bi-caret-right-fill me-2"></i>Help</Link>

                </div>
            </div>
        </>
    );
}
