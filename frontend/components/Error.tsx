import "../styles/error.css"
export default function Error() {

    return (
        <>
            <body>
                <section>
                    <div className="container">
                        <div className="text">
                            <h1>Page Not Found</h1>
                            <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
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
                        <div><img className="image" src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt=""/></div>
                    </div>
            </section>

        </body >

        </>
    )
}