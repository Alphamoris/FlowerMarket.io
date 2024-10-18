import React, { useState } from "react"
import { AuthProvider, useAuth } from "./AuthContext"

export default function Logout() {


    const { isLoggedIn, setIsLoggedIn } = useAuth()
    const [ showModal, setShowModal ] = useState<boolean>(true)

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        setIsLoggedIn(false)
        setShowModal(false)

    }

    return (
        <>
            {isLoggedIn &&
                <button className="btn btn-outline-primary fs-6 btn-lg me-2 " type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                    <i className="bi bi-box-arrow-left me-2"></i>Logout
                </button>
            }
                <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static"
                    data-bs-keyboard="true" tabIndex={-1} aria-labelledby="staticBackdropLabel1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel1"><i className="bi bi-exclamation-octagon-fill me-2"></i><i className="bi bi-exclamation-octagon-fill me-2"></i><i className="bi bi-exclamation-octagon-fill me-2"></i>Confirmation<i className="bi bi-exclamation-octagon-fill mx-2"></i><i className="bi bi-exclamation-octagon-fill me-2"></i><i className="bi bi-exclamation-octagon-fill me-2"></i></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body mt-3">
                                <form onSubmit={handlesubmit}>
                                    {isLoggedIn && <h3 className="text-center text-danger my-5 text-uppercase "><u>Are you sure to LOGOUT from this Device</u></h3>}
                                    {!isLoggedIn && <h3 className="text-center text-success my-5 text-uppercase "><u>Successfully Logged Out From The Device</u></h3>}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Confirm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
        </>
    )
}

