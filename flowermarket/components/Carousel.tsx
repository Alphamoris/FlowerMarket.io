import Image from "next/image"

export default function Carousel() {
    return (
        <div className="carouselclr">
            <div id="carouselCaptions" className="carousel slide carousel-fade mx-5 border border-5 rounded-3 border-secondary" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active bg-body" data-bs-interval="1000">
                        <Image className="d-block w-100 Image-thumbnail carouselImage" width={100} height={400} src="/carousel1.jpeg" alt="Tokyo" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="fs-1">Flat 50% Off 1</h5>
                            <p className="fs-3">Only a limited time deal.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <Image className="d-block w-100  Image-thumbnail carouselImage" src="/carousel1.jpeg" width={100} height={400} alt="Shanghai" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="fs-1">Flat 50% Off 2</h5>
                            <p className="fs-3">Only a limited time deal.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <Image className="d-block w-100 Image-thumbnail carouselImage" src="/carousel1.jpeg" width={100} height={400} alt="Newyork" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="fs-1">Flat 50% Off 3</h5>
                            <p className="fs-3">Only a limited time deal.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}