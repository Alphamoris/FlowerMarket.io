
"use client";
import CheckoutForm from "@/components/CheckOut"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Suspense } from "react"



interface Params {
    id: number
}


export default function Home12({ params }: { params: Params }) {


    return (

        <>
            <Suspense fallback={<LoadingSpinner />}>
                <CheckoutForm id={params.id} />
            </Suspense>
        </>
    )
}