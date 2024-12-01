"use client"
import Link from "next/link"
import Image from "next/image";
import Loginpage from "./LoginPage";
import SignupPage from "./SignupPage";
import Mainheading from "./Mainheading";
import Logout from "./Logout";
import { AuthProvider } from "./AuthContext";
import CommentToast from "./CommentToast";

export default function Uppernavbar() {
    const onclick1 = () => {
        const variable = document.querySelector("#offcanvasWithBothOptions")
        variable?.setAttribute("class", "offcanvas offcanvas-start bg-dark-subtle hide")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-2 border-black w-100 unavclr shadow-sm">
                <button
                    className="btn btn-outline-dark ms-3 mt-1 rounded-pill hover:bg-gray-200 transition-colors"
                    type="button"
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                    aria-label="Toggle menu">
                    <i className="bi bi-list"></i>
                </button>
                <a className="navbar-brand d-flex align-items-center hover:opacity-80 transition-opacity" href="#" aria-label="link">
                    <Image src="/logo.png" alt="Logo" width="35" height="35" className="d-inline-block ms-3 me-2" />
                    <Mainheading />
                </a>
                <div className="d-flex ms-auto">
                    <Link href={"/help/contactus"}>
                        <button className="btn btn-outline-dark me-3 rounded-pill hover:bg-gray-200 transition-colors" type="button" aria-label="telephone" title="Contact US">
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
                className="offcanvas offcanvas-start bg-gradient-to-r from-blue-100 to-white"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-sm navbar-brand fw-bold" id="offcanvasWithBothOptionsLabel">
                        <i className="bi bi-flower1 me-2"></i>
                        Flower Market.in
                    </h5>
                    <button
                        type="button"
                        className="btn btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close">
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="nav flex-column">
                        <Link href="/market" onClick={onclick1} className="link-dark d-flex align-items-center p-3 mb-2 rounded hover:bg-blue-50 transition-colors">
                            <i className="bi bi-shop me-3 fs-5"></i>Find Markets
                        </Link>
                        <Link href="/bulkmarket" onClick={onclick1} className="link-dark d-flex align-items-center p-3 mb-2 rounded hover:bg-blue-50 transition-colors">
                            <i className="bi bi-box-seam me-3 fs-5"></i>Bulk Market
                        </Link>
                        <Link href="/seller" onClick={onclick1} className="link-dark d-flex align-items-center p-3 mb-2 rounded hover:bg-blue-50 transition-colors">
                            <i className="bi bi-people me-3 fs-5"></i>Find Sellers
                        </Link>
                        <Link href="/" onClick={onclick1} className="link-dark d-flex align-items-center p-3 mb-2 rounded hover:bg-blue-50 transition-colors">
                            <i className="bi bi-truck me-3 fs-5"></i>Transport
                        </Link>
                        <Link href="/" onClick={onclick1} className="link-dark d-flex align-items-center p-3 mb-2 rounded hover:bg-blue-50 transition-colors">
                            <i className="bi bi-clock-history me-3 fs-5"></i>History
                        </Link>
                        <Link href="/help/contactus" onClick={onclick1} className="link-dark d-flex align-items-center p-3 mb-2 rounded hover:bg-blue-50 transition-colors">
                            <i className="bi bi-question-circle me-3 fs-5"></i>Help
                        </Link>
                    </div>
                    <div className="text-center mt-4">
                        <Image 
                            src="/logo.png"
                            alt="Main Logo"
                            width={150}
                            height={150} 
                            className=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
