"use client"
import React, { useState, useEffect } from 'react';
import { CreditCard, ShieldCheck, Clock, ArrowLeft, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { PriceDetail } from '@/interfaces/interfaces';
import { detailsById } from '@/apilib/Apilib';
import Image from 'next/image';

interface Id {
  id: number
}

const CheckoutForm = ({ id }: Id) => {

  const [data, setData] = useState<PriceDetail>()

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response: PriceDetail = await detailsById(id)
        setData(response)
      }
      catch (error) {
        console.error("Error fetching product details:", error);
      }
    }
    apiCall()
  }, [id]) // Added 'id' as a dependency

  const productPrice = (data?.price || 0);
  const shippingPrice = 10.34;
  const [quantity, setQuantity] = useState(1);
  const total = (productPrice * quantity) + shippingPrice;

  return (
    <div className="bg-light min-vh-100 checkout">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand fw-bold" href="/">
            <i className="bi bi-bag-heart-fill me-2"></i>
          </Link>
          <a href="/prices" className="btn btn-outline-light btn-sm">
            <ArrowLeft className="me-2" size={16} />
            Continue Shopping
          </a>
        </div>
      </nav>

      <div className="container py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none">Home</a></li>
            <li className="breadcrumb-item"><a href="/prices" className="text-decoration-none">Price</a></li>
            <li className="breadcrumb-item"><a href={`/prices/${id}`} className="text-decoration-none">Flower</a></li>
            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
          </ol>
        </nav>

        <div className="row g-5">
          {/* Product Summary Column */}
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title mb-4">Order Summary</h5>

                {/* Product Details */}
                <div className="d-flex mb-4">
                  <Image src="/pic1.png" width={50} height={50} className="rounded" alt="Product" />
                  <div className="ms-3">
                    <h6 className="mb-1">{data?.flowname}</h6>
                    <p className="text-muted mb-1 small">{data?.shop_name}</p>
                    <div className="input-group input-group-sm w-75">
                      <span className="input-group-text">Qty</span>
                      <select id='quantity'
                        className="form-select"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5 , 6 , 7 , 8].map(num => (
                          <option key={num} value={num}>{num + " kg"}</option>
                        ))}
                      </select>
                      <label htmlFor='quantity' className=' visually-hidden'>d</label>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="border-top pt-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Product Price</span>
                    <span><i className="bi bi-currency-rupee"></i>{productPrice}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Quantity</span>
                    <span>×{quantity}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Shipping</span>
                    <span><i className="bi bi-currency-rupee"></i>{shippingPrice.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between border-top pt-3 mt-3">
                    <strong>Total</strong>
                    <strong className="text-primary"><i className="bi bi-currency-rupee"></i>{total.toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="card border-0 bg-primary-subtle">
              <div className="card-body">
                <div className="row g-3 text-center">
                  <div className="col-4">
                    <ShieldCheck size={24} className="text-primary mb-2" />
                    <div className="small">Secure Payment</div>
                  </div>
                  <div className="col-4">
                    <Clock size={24} className="text-primary mb-2" />
                    <div className="small">24/7 Support</div>
                  </div>
                  <div className="col-4">
                    <i className="bi bi-arrow-counterclockwise fs-5 text-primary mb-2"></i>
                    <div className="small">Easy Returns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form Column */}
          <div className="col-md-7 col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-4">Payment Details</h4>
                <form className="needs-validation" noValidate>
                  {/* Card Details Section */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <CreditCard size={20} className="text-primary me-2" />
                      <h6 className="mb-0">Card Information</h6>
                    </div>
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" required />
                          <label htmlFor="cardNumber">Card Number</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="expiry" placeholder="MM/YY" required />
                          <label htmlFor="expiry">Expiry Date</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="cvv" placeholder="123" required />
                          <label htmlFor="cvv">CVV</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Billing Address Section */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-house-door text-primary me-2"></i>
                      <h6 className="mb-0">Billing Address</h6>
                    </div>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="firstName" placeholder="John" required />
                          <label htmlFor="firstName">First name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="lastName" placeholder="Doe" required />
                          <label htmlFor="lastName">Last name</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                          <label htmlFor="email">Email address</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                          <label htmlFor="address">Address</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="form-floating">
                          <select className="form-select" id="country" required>
                            <option value="">Select country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                          </select>
                          <label htmlFor="country">Country</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating">
                          <select className="form-select" id="state" required>
                            <option value="">Select state</option>
                            <option>California</option>
                            <option>New York</option>
                            <option>Texas</option>
                          </select>
                          <label htmlFor="state">State</label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="zip" placeholder="12345" required />
                          <label htmlFor="zip">Zip Code</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="button" className="btn btn-primary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#paymentModal">
                    Pay <i className="bi bi-currency-rupee"></i>{total.toFixed(2)}
                  </button>
                  <div className="modal fade" id="paymentModal" data-bs-keyboard="false" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title text-danger">Exception<ShieldAlert className="mx-1 mb-1" /></h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fw-medium">
                          <p>Our payment gateways are currently experiencing high traffic. We understand how important this is for you and we are working diligently to resolve the issue.
                          </p>
                          <p>For immediate assistance or further inquiries, please do not hesitate to contact our support team.
                             <a href="/help/contactus" >We&apos;re here to help!</a>
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-outline-secondary mx-auto w-75" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-3">
                    <small className="text-muted">
                      <i className="bi bi-lock-fill me-1"></i>
                      Your payment information is encrypted
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-4 bg-white mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted mb-2">&copy; 2024 FlowerMarket.io , All rights reserved.</p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="#" className="link-secondary text-decoration-none">Privacy</a></li>
                <li className="list-inline-item"><a href="#" className="link-secondary text-decoration-none">Terms</a></li>
                <li className="list-inline-item"><a href="#" className="link-secondary text-decoration-none">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutForm;