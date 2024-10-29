
import Achievements from "@/components/Achievements";
import Badges from "@/components/Badges";
import Carousel from "@/components/Carousel";
import Comments from "@/components/Comments";
import Faqs from "@/components/Faqs";
import Service from "@/components/Services";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense } from "react";



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
        <Suspense fallback={<LoadingSpinner />}>
          <Badges dummyarr={dummyarr} />
          <Carousel />
          <Achievements />
          <Service />
          <Faqs />
          <Comments />
        </Suspense>

      </main>
    </>
  );
}
