import Link from "next/link";
import React from "react";
import { PricePair } from "@/interfaces/interfaces"
import ProductPage from "./ProductPage";


interface PricesProps {
  PriceList: PricePair[];
}

const Prices: React.FC<PricesProps> = ({ PriceList }) => {

  const handleClick = ( id : number , event : React.MouseEvent ) => {

    <ProductPage id={id} />
    event.stopPropagation()
  }
  return (
    <div className="border-1 border-black border-top pricesclr">
      {PriceList.map((element, index) => (
        <div className="row row-cols-1 row-cols-md-2" key={index} onClick={(event) => handleClick(element.detail1.id , event)}>
          <div className="col">
            <div className="card m-3 border border-5 rounded-4" id="pricescard">
              <div className="card-header d-flex align-items-center">
                <span className="avatar text-bg-dark text-center align-content-center avatar-lg rounded-5 fs-5">R</span>
                <div className="ms-3">
                  <h6 className="mb-0 fs-sm">{element.detail1.id} {element.detail1.shop_name}</h6>
                  <span className="text-muted fs-sm">{element.detail1.time}</span>
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
                    <h5 className="card-title">{element.detail1.fname}</h5>
                    <p className="card-text">
                      {element.detail1.description}
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
                  <button type="button" className="btn btn-link p-0 ms-auto fw-bold">Explore</button>
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
                    <span className="text-muted fs-sm">{element.detail2.time}</span>
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
                      <h5 className="card-title">{element.detail2.fname}</h5>
                      <p className="card-text">
                        {element.detail2.description}
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
                    <button type="button" className="btn btn-link p-0 ms-auto fw-bold">Explore</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Prices;
