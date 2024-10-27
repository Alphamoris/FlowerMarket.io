import React, { use, useState } from "react"
import { SignUp } from "@/interfaces/interfaces"
import { signUp } from "@/apilib/Apilib"
import { useAuth } from "./AuthContext"
import { MessageSquareWarning } from "lucide-react";




export default function SignupPage() {

    const { isLoggedIn } = useAuth()

    const [data, setData] = useState<SignUp>({
        fname: "",
        lname: "",
        age: 0,
        contactno: 0,
        zipcode: 0,
        city: "",
        state: "",
        dob: "",
        emailid: "",
        password: "",

    })

    const [date, setDate] = useState<string[]>([])
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [submitResult, setSubmitResult] = useState<string | null>(null)
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
    const [isError , setIsError ] = useState<boolean>(false)


    async function waitFor(time : number, callback : Function) {
        setTimeout(() => {
            callback();
        }, time);
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        setIsSubmitting(true)
        const formattedDob = `${date[2]}-${date[1]}-${date[0]}`;
        const newData = { ...data, dob: formattedDob };
        try {

            console.log(data)
            const response = await signUp(newData)
            if(response == false){
                setIsError(true)
            }
            else{
            setSubmitResult(response)
            setSubmitSuccess(true)
            }

        }

        catch (error) {
            console.log("The error is due to ", error)
            throw new Error("Uploading the records failed")
        }

        finally {
            setIsSubmitting(false)
            setData({
                fname: "",
                lname: "",
                age: 0,
                contactno: 0,
                zipcode: 0,
                city: "",
                state: "",
                dob: "",
                emailid: "",
                password: "",
            })
            setDate([])
        }

    }


    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: name === "age" || name === "contactno" || name === "zipcode" ? Number(value) : value }))

    }

    const handledobchange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target
        setDate(prev => {
            const newDate = [...prev]
            switch (name) {
                case "date":
                    newDate[0] = value
                    break
                case "month":
                    newDate[1] = value
                    break
                case "year":
                    newDate[2] = value
                    break
            }
            return newDate
        })
    }
    return (
        <>
        
            {!isLoggedIn && !submitSuccess &&
                <button className="btn btn-outline-primary fs-6 btn-lg me-2 " type="button" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                    <i className="bi bi-person-circle me-2"></i>Signup
                </button>
            }
            <form onSubmit={handleSubmit}>
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" tabIndex={-1}>
                    <div className="modal-dialog modal-md modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">Enter Your Details ---- <i className="bi bi-1-circle-fill fs-5"></i></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group input-group-prefix mb-3 mt-3">
                                    <span className="input-group-text">Name</span>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="FirstName" name="fname" onChange={handlechange} value={data.fname} />
                                        <label>FirstName</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="LastName" name="lname" onChange={handlechange} value={data.lname} />
                                        <label>LastName</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="form-floating mb-3">
                                            <input type="number" className="form-control" placeholder="Age" min={5} max={150} name="age" onChange={handlechange} value={data.age} />
                                            <label>Age</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input type="number" className="form-control" placeholder="Contact No" name="contactno" onChange={handlechange} value={data.contactno} />
                                            <label>Contact No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" placeholder="Email ID" name="emailid" onChange={handlechange} value={data.emailid} />
                                    <label >Email ID</label>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-5">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="City" name="city" onChange={handlechange} value={data.city} />
                                            <label>City</label>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="State" name="state" onChange={handlechange} value={data.state} />
                                            <label>State</label>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" min={0} placeholder="Zip Code" name="zipcode" onChange={handlechange} value={data.zipcode} />
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
                                <h5 className="modal-title " id="exampleModalToggleLabel2">Enter Your Details ---- <i className="bi bi-2-circle-fill fs-5"></i> </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group input-group-prefix mb-3">
                                    <span className="input-group-text">Date Of Birth</span>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="Date" name="date" onChange={handledobchange} value={date[0]} />
                                        <label>Date</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="Month" name="month" onChange={handledobchange} value={date[1]} />
                                        <label>Month</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" placeholder="Year" name="year" onChange={handledobchange} value={date[2]} />
                                        <label>Year</label>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                    <label>Password</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" placeholder="Confirm Password" name="password" onChange={handlechange} value={data.password} />
                                    <label>Confirm Password</label>
                                </div>
                            </div>
                            {isSubmitting && <p className="text-center">Loading<i className="bi bi-arrow-repeat"></i></p>}
                            {submitSuccess && <p className="text-center bg-body-secondary fs-5">New User Registered <i className="bi bi-check2-circle"></i></p>}
                            {isError && <p className="text-center bg-body-secondary fs-5"><MessageSquareWarning/>Already a user exits with given credentials <i className="bi bi-check2-circle"></i></p>}
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



