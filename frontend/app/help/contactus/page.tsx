import ContactPage from "@/components/ContactPage";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home2() {


    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <ContactPage />
            </Suspense>
        </>
    )
}