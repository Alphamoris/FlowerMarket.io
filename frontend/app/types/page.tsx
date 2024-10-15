"use client"
import Types from "@/components/Types";
import { useState, useEffect } from "react";
import { TypesI } from "@/interfaces/interfaces";
import { getTypesDetails } from "@/apilib/Apilib";
import { error } from "console";


export default function Home5() {

    const [data, setdata] = useState<TypesI[]>([])

    useEffect(() => {
        const Fetch_data = async () => {
            try {
                const result: TypesI[] = await getTypesDetails()
                setdata(result)
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
            <Types Typeprops={data} />

        </>
    )
}