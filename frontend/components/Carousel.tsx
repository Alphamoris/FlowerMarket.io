import Image from "next/image"

export default function Carousel() {
    return (
        <div className="carouselclr">
            <div id="carouselCaptions" className="carousel slide carousel-fade mx-3 border border-5 rounded-3 border-secondary p-1" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active bg-body" data-bs-interval="2000">
                        <Image className="d-block w-100 Image-thumbnail carouselImage" width={400} height={400} src="/carousel1.jpeg" alt="Tokyo" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="fs-1">Flat 50% Off</h5>
                            <p className="fs-3">Only a limited time deal.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Image className="d-block w-100  Image-thumbnail carouselImage" src="/carousel2.png" width={400} height={400} alt="Shanghai" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="fs-1">Special Offer on Bouquets</h5>
                            <p className="fs-3">Suprise your loved ones with our special bouquets.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Image className="d-block w-100 Image-thumbnail carouselImage" src="/carousel31.jpeg" width={400} height={400} alt="Newyork" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="fs-1">Free Delivery</h5>
                            <p className="fs-3">Get free delivery on orders above 399.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}