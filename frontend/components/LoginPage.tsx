import { Token, UserCrd } from "@/interfaces/interfaces"
import React, { useState } from "react"
import { login } from "@/apilib/Apilib"


const Loginpage = () => {


    const [data, setData] = useState<UserCrd>({
        username: "",
        password: ""
    })

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)

    const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        console.log("dsdds")
        setIsSubmitting(true)

        try {
            const reponse = await login(data)
            console.log("The Token is : ", reponse)
            setSubmitSuccess(true)
        }
        catch (error) {
            console.log("The error is from login :", error)
            throw new Error("Couldn't Upload The Credentials")
        }
        finally {
            setIsSubmitting(false)
            setData({
                username: "",
                password: ""
            })
        }

    }


    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: [value] }))
    }



    return (
        <>
        {!submitSuccess && 
            <button className="btn btn-outline-primary fs-6 btn-lg me-2 " type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                <i className="bi bi-box-arrow-in-right me-2"></i>Login
            </button>}
            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static"
                data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Enter Your Credentials To Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mt-3">
                            <form onSubmit={handlesubmit}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="username" value={data.username} onChange={handlechange} />
                                    <label htmlFor="floatingInput">Email address</label>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" value={data.password} onChange={handlechange} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Always sign in on this device</label>
                                </div>


                                {isSubmitting && <p className="text-center">Loading<i className="bi bi-arrow-repeat"></i></p>}
                                {submitSuccess && <p className="text-center bg-body-secondary fs-5">Successfully Logged in <i className="bi bi-check2-circle"></i></p>}

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}


export default Loginpage