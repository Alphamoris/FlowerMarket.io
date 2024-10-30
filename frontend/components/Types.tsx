import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useState, useEffect } from "react";
import { TypesI } from "@/interfaces/interfaces";
import { getTypesDetails } from "@/apilib/Apilib";
import PleaseLogin from "@/components/PleaseLogin";
import { useAuth } from "@/components/AuthContext";
import TypesToast from "./TypesToast";


interface Typeprops {
    Typeprops: TypesI[]
}

const Types: React.FC = () => {


    const [data, setdata] = useState<TypesI[]>([])
    const { isLoggedIn, setIsLoggedIn } = useAuth()

    useEffect(() => {
        const Fetch_data = async () => {
            try {
                const result: TypesI[] | any = await getTypesDetails()
                if (result[0] == "Unauthorized") {
                    setdata([])
                    setIsLoggedIn(false)
                }
                else {
                    setdata(result)
                }
            }
            catch (error) {
                console.log("The Error is :", error)
                setdata([])
            }
        }
        Fetch_data()
    }, [])


    return (
        <>
        <TypesToast />
            {isLoggedIn ? (
                <section className=" border-1 border-black border-top typesclr">
                    <div className="container">
                        <div className="row gy-3">
                            {
                                data.map((element, index) => (
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
            ) :
                <PleaseLogin />
            }
           
        </>
    )
}


export default Types