"use client";
import Aboutus from "@/components/Aboutus";
import LoadingSpinner from "@/components/LoadingSpinner";
import "@/styles/Aboutus.css";
import { Suspense } from "react";

export default function AboutUsPage() {
    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <Aboutus />
            </Suspense>
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
        </>
    );
}