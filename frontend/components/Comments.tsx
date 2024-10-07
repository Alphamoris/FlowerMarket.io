export default function Comments() {
    return (
        <>
            <section className="bg-light py-3 py-md-5 border border-black border-bottom-5 commentsclr">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="mb-4 display-5 text-center">Comment Form</h2>
                            <p className="text-secondary mb-5 text-center">Good comments can help us to be more effective and engaging, and they can also help to build a strong understanding about the users needs.</p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-lg-center">
                        <div className="col-12 col-lg-9">
                            <div className="bg-white border rounded shadow-sm overflow-hidden">

                                <form action="#!">
                                    <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="fullname" className="form-label">Name <span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                <i className="bi bi-person-circle"></i>
                                                </span>
                                                <input type="text" className="form-control" id="fullname" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                <i className="bi bi-envelope-at-fill"></i>
                                                </span>
                                                <input type="email" className="form-control" id="email" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="website" className="form-label">Rating for 5</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                <i className="bi bi-star-fill"></i>
                                                </span>
                                                <input type="url" className="form-control" id="website" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="comment" className="form-label"><i className="bi bi-pencil-fill"></i>Comment <span className="text-danger">*</span></label>
                                            <textarea className="form-control" id="comment" rows={3} required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <input className="form-check-input" type="checkbox" value="" id="savecheck"/>
                                                <label className="form-check-label" htmlFor="savecheck">
                                                    Save my data in this browser for the next time I comment.
                                                </label>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn btn-primary btn-lg" type="submit">Post Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}