"use client"

import React, { useEffect, useState } from 'react';
import { Star, Heart, ShoppingCart, ArrowRight, IndianRupeeIcon, IndianRupee, TicketSlashIcon, CircleCheckBig } from 'lucide-react';
import { PriceDetail } from '@/interfaces/interfaces';
import { detailsById } from '@/apilib/Apilib';
import Image from 'next/image';
import Link from 'next/link';

interface ProductPageProps {
  id: { id: number };
};



const ProductPage = ({ id }: ProductPageProps) => {

  const [data, setData] = useState<PriceDetail>()
  const [likeState,setLikeState] = useState<boolean>(true)
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response: PriceDetail = await detailsById(id.id)
        setData(response)
      }
      catch (error) {
        throw new Error("Error is from product page!!!")
      }
    }
    apiCall()
  }, [])



  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "/pic1.png",
    "/logo.png",
    "/pic2.png",
    "/sidebarlogo.png"
  ];

  const features = [
    "Fresh From The Fields",
    "Handled with Care",
    "30-Day Money Back Guarantee",
    "Free Shipping Worldwide"
  ];

  const specs = [
    { label: "Seller", value: data?.seller_type },
    { label: "Availability", value: data?.availability },
    { label: "Delivery", value: "With in 4 days " },
    { label: "Place", value: data?.place }
  ];


  const [cartState,setCartState] = useState<boolean>(true)

  return (
    <>
      <div className='productpage border border-top-4 border-black '>
        <div className="container py-5" >
          <nav className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href={"/"} className="text-decoration-none">Home</a></li>
              <li className="breadcrumb-item"><a href={"/prices"} className="text-decoration-none">Price</a></li>
              <li className="breadcrumb-item active">{data?.flowname}</li>
            </ol>
          </nav>

          <div className="card border-0 shadow-sm">
            <div className="row g-0">
              {/* Product Images Section */}
              <div className="col-md-6 p-4">
                <div className="position-relative mb-4 mt-5">
                  <Image
                    src={images[selectedImage]}
                    className="img-fluid rounded"
                    alt="Product"
                    width={400}
                    height={400}
                  ></Image>
                  {likeState ? (<button aria-label='button' className="btn btn-light position-absolute top-0 end-0 m-2" onClick={()=>setLikeState(!likeState)}>
                    <Heart className="w-5 h-5" />
                  </button>) :
                  (<button aria-label='button' className="btn btn-light position-absolute top-0 end-0 m-2 text-danger" onClick={()=>setLikeState(!likeState)}>
                    <Heart className="w-5 h-5" />
                  </button>)}
                </div>

                <div className="row g-2 mt-5">
                  {images.map((img, index) => (
                    <div className="col-3" key={index}>
                      <img
                        src={img}
                        className={`img-fluid rounded cursor-pointer ${selectedImage === index ? 'border border-primary' : ''}`}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setSelectedImage(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details Section */}
              <div className="col-md-6 p-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h2 className="mb-1">{data?.flowname}</h2>
                    <p className="text-muted mb-2">Supplier :{data?.shop_name}</p>
                  </div>
                  <h3 className="text-primary mb-0"><IndianRupee />{data?.price}<small className='fs-6'>/kg</small></h3>
                </div>

                {/* Ratings */}
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" fill={i < (data?.rating || 4 ) ?  "gold" : "none"} color="gold" />
                    ))}
                    <span className="ms-2 text-muted">({data?.no_of_reviews} reviews)</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4">
                  {data?.main_description}
                </p>

                {/* Color Selection */}
                <div className="mb-4">
                  <h6 className="mb-3">Color</h6>
                  <div className="d-flex gap-2">
                    {['bg-danger', 'bg-warning',].map((color, index) => (
                      <button
                        key={index}
                        className={`btn ${color} rounded-circle p-3 border-0`}
                        aria-label={`Color option ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-4">
                  <h6 className="mb-3">Quantity</h6>
                  <div className="d-flex align-items-center gap-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="fs-5">{quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                    <div><small>(in Kg)</small></div>
                  </div>
                </div>

                {/* Action Buttons */}
                {cartState ?
                (<div className="d-grid gap-2 mb-4">
                  <button className="btn btn-primary btn-lg" onClick={() => setCartState(!cartState)}>
                    Add to Cart <ShoppingCart className="w-5 h-5 ms-2 text-center" />
                  </button>
                  <Link href={`/prices/checkout/${data?.id}`} className="btn btn-outline-primary btn-lg">
                    Buy Now <ArrowRight className="w-5 h-5 ms-2" />
                  </Link>
                </div>) : (<div className="d-grid gap-2 mb-4">
                  <button className="btn btn-success btn-lg" onClick={() => setCartState(!cartState)}>
                    Add to Cart <i className="bi bi-cart-check-fill fs-5 ms-2"></i>
                  </button>
                  <Link href={`/prices/checkout/${data?.id}`} className="btn btn-outline-primary btn-lg">
                    Buy Now <ArrowRight className="w-5 h-5 ms-2" />
                  </Link>
                </div>)}

                {/* Features */}
                <div className="mb-4">
                  <h6 className="mb-3">Key Features</h6>
                  <ul className="list-unstyled">
                    {features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div>
                  <h6 className="mb-3">Particulars</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        {specs.map((spec, index) => (
                          <tr key={index}>
                            <td className="fw-bold w-25">{spec.label}</td>
                            <td>{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="row mt-5">
            <div className="col-md-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="mb-4">Product Description</h4>
                  <p>
                    {data?.long_description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="mb-4">Delivery Information</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">✈️ Free worldwide shipping</li>
                    <li className="mb-3">🚚 2-4 business days delivery</li>
                    <li className="mb-3">📦 Secure packaging</li>
                    <li className="mb-3">🔄 Easy returns policy</li>


                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;