"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import Market from "@/components/Market";
import { Suspense } from "react";

export default function Home6() {

    return (

        <>
            <Suspense fallback={<LoadingSpinner />}>
                <Market />
            </Suspense>
        </>
    )
}