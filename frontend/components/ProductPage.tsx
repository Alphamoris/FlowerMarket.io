"use client"

import React, { useState } from 'react';
import { Star, Heart , ShoppingCart, ArrowRight } from 'lucide-react';
import { PriceDetail } from '@/interfaces/interfaces';
import { detailsById, getalluserid } from '@/apilib/Apilib';



const ProductPage : React.FC<PriceDetail> = ( details ) => {

  interface Props {
    params: {
        id: string | number
    }
}


  console.log(details)
  console.log(details)
  console.log(details)
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "/pic1.png",
    "/pic1.png",
    "/pic1.png",
    "/pic1.png"
  ];

  const features = [
    "Premium Quality Materials",
    "Handcrafted with Care",
    "30-Day Money Back Guarantee",
    "Free Shipping Worldwide"
  ];

  const specs = [
    { label: "Material", value: "Premium Leather" },
    { label: "Dimensions", value: "12\" x 8\" x 4\"" },
    { label: "Weight", value: "1.5 lbs" },
    { label: "Manufacturing", value: "Handmade in Italy" }
  ];



  return (

    <div className="container py-5" key={details.id}>
      {/* Breadcrumb */}
      <nav className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Home</a></li>
          <li className="breadcrumb-item"><a href="#" className="text-decoration-none">Accessories</a></li>
          <li className="breadcrumb-item active">Premium Leather Bag</li>
        </ol>
      </nav>

      <div className="card border-0 shadow-sm">
        <div className="row g-0">
          {/* Product Images Section */}
          <div className="col-md-6 p-4">
            <div className="position-relative mb-4">
              <img
                src={images[selectedImage]}
                className="img-fluid rounded"
                alt="Product"
              />
              <button aria-label='button' className="btn btn-light position-absolute top-0 end-0 m-2">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            
            <div className="row g-2">
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
                <h2 className="mb-1">Premium Leather Bag</h2>
                <p className="text-muted mb-2">SKU: LB-2024-001</p>
              </div>
              <h3 className="text-primary mb-0">$430.99</h3>
            </div>

            {/* Ratings */}
            <div className="mb-4">
              <div className="d-flex align-items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill={i < 4 ? "gold" : "none"} color="gold" />
                ))}
                <span className="ms-2 text-muted">(441 reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-4">
              Crafted from premium Italian leather, this elegant bag combines timeless design with modern functionality. 
              Perfect for both casual and formal occasions, it features multiple compartments and a durable construction 
              that will last for years to come.
            </p>

            {/* Color Selection */}
            <div className="mb-4">
              <h6 className="mb-3">Color</h6>
              <div className="d-flex gap-2">
                {['bg-dark', 'bg-danger', 'bg-warning', 'bg-success', 'bg-primary'].map((color, index) => (
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
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-grid gap-2 mb-4">
              <button className="btn btn-primary btn-lg">
                Add to Cart <ShoppingCart className="w-5 h-5 ms-2" />
              </button>
              <button className="btn btn-outline-primary btn-lg">
                Buy Now <ArrowRight className="w-5 h-5 ms-2" />
              </button>
            </div>

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
              <h6 className="mb-3">Specifications</h6>
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
                This premium leather bag represents the perfect blend of style and functionality. 
                Each piece is meticulously crafted by skilled artisans using the finest Italian leather, 
                ensuring both durability and elegance. The bag features multiple compartments for 
                organized storage, including a padded laptop sleeve and secure zippered pockets.
              </p>
              <p>
                The adjustable shoulder strap and comfortable handles provide versatile carrying options, 
                while the water-resistant coating adds practical protection for your belongings. Whether 
                you're heading to the office or traveling, this bag is designed to meet your needs while 
                making a sophisticated statement.
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
                <li>🔄 Easy returns within 30 days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const productIds = await getalluserid();
    const paths = productIds.map((id) => ({
      params: { id: id.toString() }
    }));

    return {
      paths,
      fallback: true // Enable ISR
    };
  } catch (error) {
    console.error('Error generating paths:', error);
    return {
      paths: [],
      fallback: true
    };
  }
}

// export async function getStaticProps({ params }) {
//   try {
//     const details = await detailsById(params.id);
    
//     if (!details) {
//       return {
//         notFound: true
//       };
//     }

//     return {
//       props: {
//         details,
//       },
//       revalidate: 3600 // Revalidate every hour
//     };
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     return {
//       props: {
//         error: 'Failed to load product'
//       },
//       revalidate: 60 // Retry sooner if there was an error
//     };
//   }
// }

export default ProductPage;