import React from 'react';

const CheckoutForm = () => {
  return (
    <div className="bg-light min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-bag-heart-fill me-2"></i>
            HappyPurchase
          </a>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7 mb-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Cart</a></li>
                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Main Form Column */}
          <div className="col-lg-8 col-xl-7">
            {/* Checkout Steps */}
            <div className="position-relative mb-5 pt-3">
              <div className="progress" >
                <div className="progress-bar bg-primary checkoutprogress" aria-label='progress' role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <div className="position-absolute top-0 start-0 translate-middle">
                <button className="btn btn-primary btn-sm rounded-pill px-3">1. Address</button>
              </div>
              <div className="position-absolute top-0 start-50 translate-middle">
                <button className="btn btn-secondary btn-sm rounded-pill px-3">2. Payment</button>
              </div>
              <div className="position-absolute top-0 start-100 translate-middle">
                <button className="btn btn-secondary btn-sm rounded-pill px-3">3.Review</button>
              </div>
            </div>

            {/* Main Form */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title mb-4">Billing Address</h4>
                <form className="needs-validation" noValidate>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="firstName" placeholder="John" required />
                        <label htmlFor="firstName">First name</label>
                        <div className="invalid-feedback">Valid first name is required.</div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="lastName" placeholder="Doe" required />
                        <label htmlFor="lastName">Last name</label>
                        <div className="invalid-feedback">Valid last name is required.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                        <label htmlFor="email">Email address</label>
                        <div className="invalid-feedback">Please enter a valid email address.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        <label htmlFor="address">Address</label>
                        <div className="invalid-feedback">Please enter your shipping address.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        <label htmlFor="address2">Address 2 (Optional)</label>
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
                        <div className="invalid-feedback">Please select a valid country.</div>
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
                        <div className="invalid-feedback">Please select a valid state.</div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="zip" placeholder="12345" required />
                        <label htmlFor="zip">Zip Code</label>
                        <div className="invalid-feedback">Zip code required.</div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="form-check mb-2">
                    <input type="checkbox" className="form-check-input" id="same-address" />
                    <label className="form-check-label" htmlFor="same-address">
                      Shipping address is the same as my billing address
                    </label>
                  </div>

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="save-info" />
                    <label className="form-check-label" htmlFor="save-info">
                      Save this information for next time
                    </label>
                  </div>

                  <hr className="my-4" />

                  <h4 className="mb-3">Payment Method</h4>

                  <div className="my-3">
                    <div className="form-check">
                      <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                      <label className="form-check-label" htmlFor="credit">Credit card</label>
                    </div>
                    <div className="form-check">
                      <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                      <label className="form-check-label" htmlFor="debit">Debit card</label>
                    </div>
                    <div className="form-check">
                      <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                      <label className="form-check-label" htmlFor="paypal">PayPal</label>
                    </div>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="cc-name" placeholder="Name on card" required />
                        <label htmlFor="cc-name">Name on card</label>
                        <div className="invalid-feedback">Name on card is required</div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="cc-number" placeholder="Credit card number" required />
                        <label htmlFor="cc-number">Credit card number</label>
                        <div className="invalid-feedback">Credit card number is required</div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="cc-expiration" placeholder="MM/YY" required />
                        <label htmlFor="cc-expiration">Expiration</label>
                        <div className="invalid-feedback">Expiration date required</div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="cc-cvv" placeholder="CVV" required />
                        <label htmlFor="cc-cvv">CVV</label>
                        <div className="invalid-feedback">Security code required</div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button className="btn btn-primary btn-lg w-100" type="submit">Complete Purchase</button>
                </form>
              </div>
            </div>
          </div>

          {/* Order Summary Column */}
          <div className="col-lg-4 col-xl-3 mt-5">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center mb-3">
                  <span>Your Cart</span>
                  <span className="badge bg-primary rounded-pill">3</span>
                </h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between lh-sm border-0 px-0">
                    <div>
                      <h6 className="my-0">Premium T-Shirt</h6>
                      <small className="text-muted">Cotton Blend, Size L</small>
                    </div>
                    <span className="text-muted">$12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm border-0 px-0">
                    <div>
                      <h6 className="my-0">Designer Jeans</h6>
                      <small className="text-muted">Slim Fit, Blue</small>
                    </div>
                    <span className="text-muted">$8</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm border-0 px-0">
                    <div>
                      <h6 className="my-0">Sport Shoes</h6>
                      <small className="text-muted">Running, Size 42</small>
                    </div>
                    <span className="text-muted">$5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light border-0 px-0 mb-3">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>SUMMER2024</small>
                    </div>
                    <span className="text-success">−$5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between border-0 px-0 mb-3">
                    <strong>Total (USD)</strong>
                    <strong>$20</strong>
                  </li>
                </ul>

                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code" />
                  <button type="submit" className="btn btn-secondary">Apply</button>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title">Need Help?</h5>
                <p className="card-text small">Our customer service team is available 24/7 to assist you with your purchase.</p>
                <a href="#" className="btn btn-light btn-sm">Contact Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-5 bg-white mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted mb-2">&copy; 2024 StyleStore. All rights reserved.</p>
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