import Map from "@/components/Map"
import LocationComponent from "./LocationComponent"
import "../styles/mainstyle.css"


export default function Market(){

    return (

        <>
        <h3 className="text-center m-3 rounded-5 boder border-bottom bg-dark-subtle border-black border-3 marketheading">Locate nearby markets...</h3>
        <LocationComponent />
        
        </>
    )
}