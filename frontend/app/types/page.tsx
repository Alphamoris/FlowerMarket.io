"use client"
import Types from "@/components/Types";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { AuthProvider } from "@/components/AuthContext";


export default function Home5() {


    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <AuthProvider>
                    <Types />
                </AuthProvider>
                <footer className="footer bg-info-subtle">
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
            </Suspense>
        </>
    )
}