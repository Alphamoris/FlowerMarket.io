"use client"

import { setComments } from "@/apilib/Apilib"
import { Comment } from "@/interfaces/interfaces"
import React, { useState } from "react"


export default function Comments() {

    const [formData, setFormData] = useState<Comment>({
        name: '',
        email: '',
        rating: 5,
        comment: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<string | null>(null)


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        setIsSubmitting(true)

        try {
            const data = await setComments(formData)
            setSubmitResult(data)
        }
        catch (error) {
            console.log("The Error is due to : ", error)
            throw new Error("Couldn't upload Records")
        }
        finally {
            setFormData({
                name: '',
                email: '',
                rating: 5,
                comment: '',
            })
            setIsSubmitting(false)
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: name === "rating" ? Number(value) : value }))

    }

    return (
        <>
            <section className="bg-light py-3 py-md-5 border border-black border-bottom-5 commentsclr">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="mb-4 display-5 text-center">Comment Form</h2>
                            <p className="text-secondary mb-5 text-center">Good comments can help us to be more effective and engaging, and they can also help to build a strong understanding about the users needs.</p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-lg-center">
                        <div className="col-12 col-lg-9">
                            <div className="bg-white border rounded shadow-sm overflow-hidden">

                                <form onSubmit={handleSubmit}>
                                    <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-person-circle"></i>
                                                </span>
                                                <input type="text" className="form-control" id="name" 
                                                    onChange={handleChange} value={formData.name} name="name" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-envelope-at-fill"></i>
                                                </span>
                                                <input type="email" className="form-control" id="email" 
                                                    onChange={handleChange} value={formData.email} name="email" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <label htmlFor="rating" className="form-label">Rating for 5</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-star-fill"></i>
                                                </span>
                                                <input type="number" className="form-control" id="rating" 
                                                    onChange={handleChange} value={formData.rating} name="rating" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="comment" className="form-label"><i className="bi bi-pencil-fill"></i>Comment <span className="text-danger">*</span></label>
                                            <textarea className="form-control" id="comment" rows={3} onChange={handleChange} value={formData.comment} name="comment" required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <input className="form-check-input" type="checkbox" id="comment" required />
                                            <label className="form-check-label" htmlFor="savecheck">
                                                Save my data in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn btn-primary btn-lg" type="submit" disabled={isSubmitting}>Post Comment</button>
                                            </div>
                                        </div>
                                    </div>
                                    {submitResult && <p className="text-center bg-body-secondary fs-5">Thank You for your valuable comment<i className="bi bi-balloon-heart"/><i className="bi bi-balloon-heart"/><i className="bi bi-balloon-heart"/></p>}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}