export default function Achievements() {
    return (
        <>
            <section className="border pb-5 border-black pt-4 achievementsclr">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="mb-4 display-5 text-center fs-3 fw-semibold">The Finest Platform For Your Needs</h2>
                            <p className="text-secondary mb-4 text-center lead fs-4">Blooming flowers , as fresh as they are in plants</p>
                            <hr className="w-50 mx-auto mb-4 mb-xl-9 text-dark "/>
                        </div>
                    </div>
                </div>

                <div className="container overflow-hidden">
                    <div className="row gy-5 gy-md-6 gy-lg-0">
                        <div className="col-6 col-lg-3">
                            <div className="text-center">
                                <div className="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto rounded-pill">
                                <i className="bi bi-people-fill fs-1 text-light"></i>            
                                </div>
                                <h5 className="display-6 fw-bold m-1">120K</h5>
                                <p className="text-secondary m-0">Happy Customers</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="text-center">
                                <div className="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto rounded-pill">
                                <i className="bi bi-activity  fs-1 text-light"></i>
                                </div>
                                <h5 className="display-6 fw-bold m-1">1890+</h5>
                                <p className="text-secondary m-0">Issues Solved</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="text-center">
                                <div className="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto rounded-pill">
                                    <i className="bi bi-briefcase-fill fs-1 text-light"></i>
                                </div>
                                <h5 className="display-6 fw-bold m-1">250K</h5>
                                <p className="text-secondary m-0">Orders Delivered</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="text-center">
                                <div className="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto rounded-pill">
                                <i className="bi bi-award-fill fs-1 text-light"></i>
                                </div>
                                <h5 className="display-6 fw-bold m-1">786+</h5>
                                <p className="text-secondary m-0">Awards Winning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}