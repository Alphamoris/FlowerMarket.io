"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { AuthProvider } from "./AuthContext"
import CommentToast from "./CommentToast"


interface Badgeprops {
    dummyarr: { imgurl: string, name: string }[]
}


const Badges: React.FC<Badgeprops> = ({ dummyarr }) => {
    return (
        <>
        <AuthProvider>
            <CommentToast/>
        </AuthProvider>
            <div className="d-flex overflow-hidden border border-bottom-5 border-black bg-light-subtle badgeclr">
                {dummyarr.map((element) => (
                    <>
                        <div className="">
                            <Link href="/">
                                <Image height={20} width={20} alt="Image" className="avatar rounded-5 text-bg-secondary border border-warning border-5 m-3 mb-0" src={element.imgurl} />
                            </Link>
                            <h6 className="ms-3 mt-0" id="badgename">{element.name}</h6>
                        </div>
                    </>

                )
                )}
            </div>
        </>
    )
}

export default Badges