import "../styles/error.css"
import Image from 'next/image';

export default function Error() {

    return (
        <>
            <section>
                <div className="container">
                    <div className="text">
                        <h1>Page Not Found</h1>
                        <p>We can&apos;t seem to find the page you&apos;re looking for. Please check the URL for any typos.</p>
                        <div className="input-box">
                            <input type="text" placeholder="Search..."/>
                            <button aria-label="button"><i className="bi bi-search"></i></button>
                        </div>
                        <ul className="menu">
                            <li><a href="#">Go to Homepage</a></li>
                            <li><a href="#">Visit our Blog</a></li>
                            <li><a href="#">Contact support</a></li>
                        </ul>
                    </div>
                    <div>
                        <Image className="image" src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt="" width={500} height={300} />
                    </div>
                </div>
            </section>
        </>
    )
}