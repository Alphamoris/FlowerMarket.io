import LoadingSpinner from "@/components/LoadingSpinner"
import { Suspense } from "react"

export default function Home8() {


    const prices = [{
        imgurl: "/pic1.png",
        fname: "Jasmine",
        content: "These are super fresh flowers from urban areas of india",
        place: "Hosur",
        price: 4500,
        time: "04:20 AM"
    }, {
        imgurl: "/pic1.png",
        fname: "Jasmine",
        content: "These are super fresh flowers from urban areas of india",
        place: "Hosur",
        price: 4500,
        time: "04:20 AM"
    }, {
        imgurl: "/pic1.png",
        fname: "Jasmine",
        content: "These are super fresh flowers from urban areas of india",
        place: "Hosur",
        price: 4500,
        time: "04:20 AM"
    }, {
        imgurl: "/pic1.png",
        fname: "Jasmine",
        content: "These are super fresh flowers from urban areas of india",
        place: "Hosur",
        price: 4500,
        time: "04:20 AM"
    }
    ]


    return (

        <>
            <Suspense fallback={<LoadingSpinner />}>
                <h1>under Construction!!!</h1>
            </Suspense>
        </>
    )
}