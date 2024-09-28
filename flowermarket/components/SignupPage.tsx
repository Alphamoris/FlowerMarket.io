export default function SignupPage() {
    return (
        <>
            <button className="btn btn-outline-primary fs-6 btn-lg me-2 " type="button" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                <i className="bi bi-person-circle me-2"></i>Signup
            </button>
            <form action={""}>
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" tabIndex={-1}>
                    <div className="modal-dialog modal-md modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">First Modal</h5>
                            </div>
                            <div className="modal-body">
                                <div className="input-group input-group-prefix mb-3 mt-3">
                                    <span className="input-group-text">Name</span>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="FirstName" />
                                        <label>FirstName</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="LastName" />
                                        <label>LastName</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="form-floating mb-3">
                                            <input type="number" className="form-control" placeholder="Age" min={5} max={150} />
                                            <label>Age</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input type="tel" className="form-control"  placeholder="Contact No" />
                                            <label>Contact No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" placeholder="Email ID" />
                                    <label >Email ID</label>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-5">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="City" />
                                            <label>City</label>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="State" />
                                            <label>State</label>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" placeholder="Zip Code" />
                                            <label>Zip Code</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                                <button className="btn btn-primary" type="button" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel2">Second modal</h5>
                            </div>
                            <div className="modal-body">
                                <div className="input-group input-group-prefix mb-3">
                                    <span className="input-group-text">Date Of Birth</span>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="Date" />
                                        <label>Date</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="Month" />
                                        <label>Month</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="Year" />
                                        <label>Year</label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                    <label>Password</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                    <label>Confirm Password</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary me-2" type="button" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                                    Previous
                                </button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>

                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}


