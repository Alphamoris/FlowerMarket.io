
import Achievements from "@/components/Achievements";
import Badges from "@/components/Badges";
import Carousel from "@/components/Carousel";
import Comments from "@/components/Comments";
import Error from "@/components/Error";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Loginpage from "@/components/LoginPage";
import Mainheading from "@/components/Mainheading";
import Service from "@/components/Services";
import SignupPage from "@/components/SignupPage";
import Types from "@/components/Types";
import LocationComponent from "@/components/LocationComponent";
import Map from "@/components/Map"
import LoadingSpinner from "@/components/LoadingSpinner";
import CheckoutForm from "@/components/CheckOut";
import PleaseLogin from "@/components/PleaseLogin";



export default function Home() {
  let dummyarr: any = [
    { imgurl: "/pic1.png", name: "Jasmine" }, { imgurl: "/pic1.png", name: "Jasmine" },
    { imgurl: "/pic1.png", name: "Jasmine" }, { imgurl: "/pic1.png", name: "Jasmine" },
    { imgurl: "/pic1.png", name: "Jasmine" }, { imgurl: "/pic1.png", name: "Jasmine" },
    { imgurl: "/pic1.png", name: "Jasmine" }, { imgurl: "/pic1.png", name: "Jasmine" },
    { imgurl: "/pic1.png", name: "Jasmine" }, { imgurl: "/pic1.png", name: "Jasmine" }
  ]
  return (
    <>
      <main>
        <Badges dummyarr={dummyarr} />
        <Carousel />
        <Achievements />
        <Service />
        <Faqs />
        <Comments />

      </main>
    </>
  );
}
