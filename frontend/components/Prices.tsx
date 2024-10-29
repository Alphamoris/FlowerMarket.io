import Link from "next/link";
import { getPriceDetails } from "@/apilib/Apilib";
import React, { useEffect, useState } from "react";
import { PriceDetail, PricePair } from "@/interfaces/interfaces"
import PleaseLogin from "@/components/PleaseLogin";
import { useAuth } from "@/components/AuthContext";
import moment from "moment";



const Prices: React.FC = () => {


  const [pricePairs, setPricePairs] = useState<PricePair[]>([]);
  const { isLoggedIn, setIsLoggedIn } = useAuth()

  


  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const priceDetails: PriceDetail[] | any = await getPriceDetails();
        if (priceDetails == "Unauthorized") {
          setIsLoggedIn(false)
        }
        else {
          const pairs: PricePair[] = [];

          for (let i = 0; i < priceDetails.length; i += 2) {
            pairs.push({
              detail1: priceDetails[i],
              detail2: priceDetails[i + 1] || null
            });
          }
          setPricePairs(pairs);
        }
      } catch (error) {

        console.error("Error fetching price details:", error);
      }
    };

    fetchPrices();
  }, []);


  return (
    <>
      {isLoggedIn ? (
        <div className="border-1 border-black border-top pricesclr">
          {pricePairs.map((element, index) => (
            <div className="row row-cols-1 row-cols-md-2" key={index} >
              <div className="col">
                <div className="card m-3 border border-5 rounded-4" id="pricescard">
                  <div className="card-header d-flex align-items-center">
                    <span className="avatar text-bg-dark text-center align-content-center avatar-lg rounded-5 fs-5">R</span>
                    <div className="ms-3">
                      <h6 className="mb-0 fs-sm">{element.detail1.id} {element.detail1.shop_name}</h6>
                      <span className="text-muted fs-sm">{moment(`${element.detail1.date}T${(element.detail1.time)}`).format("hh:mm:ss A")}</span>
                    </div>
                    <div className="dropstart ms-auto">
                      <button className="btn text-muted" type="button" data-bs-toggle="dropdown" aria-label="button" aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="/pic1.png" className="img-fluid rounded-start" alt="images" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{element.detail1.flowname}</h5>
                        <p className="card-text">
                        {(element.detail1.main_description.split(" ")).slice(0,15).join(" ")+"..."}
                        <h6>Price: <i className="bi bi-currency-rupee"></i>{element.detail1.price}</h6>
                          <h6>Place: <i className="bi bi-geo-alt-fill"></i>{element.detail1.place}</h6>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                      </div>
                    </div>
                    <div className="card-footer d-flex">
                      <button className="btn btn-subtle" type="button" aria-label="button">
                        <i className="bi bi-suit-heart-fill fs-6"></i>
                      </button>
                      <button className="btn btn-subtle" type="button" aria-label="button">
                        <i className="bi bi-share-fill fs-5"></i>
                      </button>
                      <Link href={`prices/${element.detail1.id}`} className="btn btn-link p-0 ms-auto fw-bold">Explore</Link>
                    </div>
                  </div>
                </div>
              </div>
              {element.detail2 && (
                <div className="col">
                  <div className="card m-3 border border-5 rounded-4" id="pricescard">
                    <div className="card-header d-flex align-items-center">
                      <span className="avatar text-bg-dark text-center align-content-center avatar-lg rounded-5 fs-5">R</span>
                      <div className="ms-3">
                        <h6 className="mb-0 fs-sm">{element.detail2.id} {element.detail2.shop_name}</h6>
                        <span className="text-muted fs-sm">{moment(`${element.detail1.date}T${(element.detail1.time)}`).format("hh:mm:ss A")}</span>
                      </div>
                      <div className="dropstart ms-auto">
                        <button className="btn text-muted" type="button" data-bs-toggle="dropdown" aria-label="button" aria-expanded="false">
                          <i className="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" href="#">Action</Link></li>
                          <li><Link className="dropdown-item" href="#">Another action</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="/pic2.png" className="img-fluid rounded-start" alt="images" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{element.detail2.flowname}</h5>
                          <p className="card-text">
                            {(element.detail2.main_description.split(" ")).slice(0,15).join(" ")+"..."}
                            <h6>Price: <i className="bi bi-currency-rupee"></i>{element.detail2.price}</h6>
                            <h6>Place: <i className="bi bi-geo-alt-fill"></i>{element.detail2.place}</h6>
                          </p>
                          <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </p>
                        </div>
                      </div>
                      <div className="card-footer d-flex">
                        <button className="btn btn-subtle" type="button" aria-label="button">
                          <i className="bi bi-suit-heart-fill fs-5"></i>
                        </button>
                        <button className="btn btn-subtle" type="button" aria-label="button">
                          <i className="bi bi-share-fill fs-6"></i>
                        </button>
                        <Link href={`prices/${element.detail2.id}`} className="btn btn-link p-0 ms-auto fw-bold">Explore</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>)
        :
        (<PleaseLogin />)
      }
    </>
  );
};

export default Prices;
