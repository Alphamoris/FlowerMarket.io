"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense } from "react";

export default function BulkMarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <>
      <Suspense fallback={<LoadingSpinner />}>
        <h4 className="text-bg-warning tex m-0 text-center display-1 fs-4 p-3 border border-top border-black ">Bulk Market is only for customers who purchase flowers <strong className=" fw-bolder fs-3">More Than 10kg</strong> </h4>
        {children}
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