import Image from "next/image"
import Link from "next/link"
import React from "react"
import { TypesI } from "@/interfaces/interfaces"


interface Typeprops {
    Typeprops: TypesI[]
}

const Types: React.FC<Typeprops> = ({ Typeprops }) => {



    return (
        <>
            <section className=" border-1 border-black border-top typesclr">
                <div className="container">
                    <div className="row gy-3">
                    {
                        Typeprops.map((element , index) => (
                            <>


                                <div className=" pt-3 col-6 col-md-4 col-xl-2" key={index}>
                                    <Link href={"/"}>
                                        <h2 className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded display-6 p-3">
                                            <Image src="/pic1.png" layout="responsive" height={150} width={150} alt="Nothing"></Image>
                                            <span className="fs-7 text-body-secondary mt-2">{element.fname}</span>
                                        </h2>
                                    </Link>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </section >

            <footer className="footer bg-body-tertiary">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="py-3 text-center">
                                Built by <a href="localhost:3000" className="link-secondary text-decoration-none">FlowerMarket.io</a> with <span className="text-primary">&#9829;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default Types