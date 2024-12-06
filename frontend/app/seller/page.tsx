"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import Seller from "@/components/Seller";
import { Suspense } from "react";

export default function Home7() {


    return (


        <>
            <Suspense fallback={<LoadingSpinner />}>
                <Seller />
            </Suspense>
        </>
    )
}