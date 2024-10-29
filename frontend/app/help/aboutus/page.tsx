import Aboutus from "@/components/Aboutus";
import LoadingSpinner from "@/components/LoadingSpinner";
import "@/styles/Aboutus.css"
import { Suspense } from "react";


export default function Home3() {


    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <Aboutus />
            </Suspense>
        </>
    )
}