const Loginpage = () => {
    return (
        <>
            <button className="btn btn-outline-primary fs-6 btn-lg me-2 " type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                <i className="bi bi-box-arrow-in-right me-2"></i>Login
            </button>
            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static"
                data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Enter Your Credentials To Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mt-3">
                            <form action={""}>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Always sign in on this device</label>
                                    </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}


export default Loginpage