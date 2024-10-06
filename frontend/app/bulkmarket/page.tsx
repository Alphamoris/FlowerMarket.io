import Prices from "@/components/Prices"

export default function Home8(){

    const prices: any = [{
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

    return(

        <>
        <Prices PricesList={prices} />
        
        </>
    )
}