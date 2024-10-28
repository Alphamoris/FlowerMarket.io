import Link from "next/link";

const PleaseLogin = () => {


    return (
        <div className="container bg-dark-subtle rounded-5 my-1">
            <div className="row justify-content-center align-items-center pleaselogin">
                <div className="col-md-6 text-center ">
                    <div className="card shadow-sm p-4 ">
                        <i className="bi bi-lock text-primary mb-3"></i>
                        <h4 className="mb-3">Please Login to Continue</h4>
                        <p className="text-muted mb-4">You need to be logged in to access this content</p>
                        <Link href={"/"}>
                            Go to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PleaseLogin;