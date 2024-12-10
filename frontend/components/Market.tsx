"use client";

import dynamic from 'next/dynamic';
import Map from "@/components/Map"
import "../styles/mainstyle.css";

// Dynamically import LocationComponent with no SSR
const LocationComponent = dynamic(() => import('./LocationComponent'), { ssr: false });

export default function Market() {

    return (

        <>
            <div className="marketsclr">
                <h3 className="text-center rounded-5 boder border-bottom bg-dark-subtle border-black border-3 marketheading">Locate nearby markets...</h3>
                <LocationComponent />
                <h6 className="text-center p-3 text-decoration-underline ">Location accuracy may vary upto 10 meters</h6>
                {/* <h6 className="text-center "><small>cross-check your location to avoid ambiguity</small></h6> */}
            </div>
        </>
    )
}