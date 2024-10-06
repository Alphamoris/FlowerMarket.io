import Link from "next/link";

export default function Faqs() {

  return (
    <>
      <section className="bg-light py-3 py-md-5 border border-bottom-5 border-black faqsclr">
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img className="img-fluid rounded" loading="lazy" src="./faqimg.jpeg" alt="How can we help you?" />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">How can we help you?</h2>
                  <p className="lead fs-4 text-secondary mb-5">We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or<Link className="fs-4" href={"/help/contactus"}> contact us</Link> via email.</p>
                  <div className="accordion accordion-flush" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Where can I find my transportation incharge number?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>To find your tranport incharge number, please follow these steps:</p>
                          <ul>
                            <li><i className="bi bi-bullseye me-2"></i>Go to our website and sign in to your account.</li>
                            <li><i className="bi bi-bullseye me-2"></i>Click on the menu in the top left corner of the page and select "Orders History"</li>
                            <li><i className="bi bi-bullseye me-2"></i>Click on the order for which you want the contact details</li>
                            <li><i className="bi bi-bullseye me-2"></i>Scroll down you can find the contact details</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Can I avail transport after checkout?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <i className="bi bi-bullseye me-2"></i>No , it is not possible to avail transport after checkout.                 </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          How to cancel the ordered flowers?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>To cancel your order, please follow these steps:</p>
                          <ul>
                            <li><i className="bi bi-bullseye me-2"></i>Go to our website and sign in to your account.</li>
                            <li><i className="bi bi-bullseye me-2"></i>Click on the menu ,in the top left corner of the page and select "History."</li>
                            <li><i className="bi bi-bullseye me-2"></i>Select your order</li>
                            <li><i className="bi bi-bullseye me-2"></i>Scroll to the bottom of the page and click on "Cancel Order."</li>
                            <li><i className="bi bi-bullseye me-2"></i><strong>! Cancellation charges will be applied with respect to the T&C</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}