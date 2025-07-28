
import Link from "next/link";

export default function Aboutus() {

    return (
        <>
            <div className="main border border-top-5 border-black">
                <div className="container1">
                    <div className="main-header">
                        Why should you choose us...<i className="bi bi-patch-question-fill fs-3"></i>
                    </div>
                    <div className="box">
                        <div className="header">
                            Predominant in Networking
                        </div>
                        <div className="content">
                            Although there exist a lot of Flower Markets , they are not well oraganised but <Link href={"/"}> flowermarket.io </Link>
                            provides a solution for it by organising the entire industry through our networking professionals , even the small petti shops are also in to the network providing you a
                            variety of options to buy from and you can buy things according to your desire and budget
                        </div>
                    </div>
                    <div className="box">
                        <div className="header">
                            Budget Friendly
                        </div>
                        <div className="content">
                            As the flowers are directly picked up from the sellers without any reatail sellers in between , we can cut down unwanted costs on the flowers and transportation. Our executives negeotiate
                            with the sellers and update the prices daily , Often many offers boom out in our website so, remember to checkout our website(<Link href={"/"}>flowermarket.io</Link>) regularly for availing offers.
                        </div>
                    </div>
                    <div className="box">
                        <div className="header">
                            Transportation
                        </div>
                        <div className="content">
                            Transportation plays a crucial role in this industry as flowers have a shorter life span so they must be delivered on time , our network of delivery partners will make this
                            problem easier by providing faster delivery times and ensure that the flowers are at a good condition at the time of delivery
                        </div>
                    </div>
                    <div className="box">
                        <div className="header">
                            24 X 7 Customer Support
                        </div>
                        <div className="content">
                            At anytime , anywhere , anybody can feel free to reachout to our 24 X 7 customer care service center through our helpline no : 7010815310 ,
                            our customer care agents are very kind and responsive to the consumers and they serve customers according to their needs and explain the 
                            process of our website clearly in a legible way , we offer our customer care service in various languages like English , Hindi , Tamil , Telugu , Kanada. 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}