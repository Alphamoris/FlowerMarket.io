import Link from "next/link"
import "../styles/contacticons.css"



export default function Contacticons() {


    return (
        <>
            <div className="wrapper">
                <Link href="#" className="icon facebook">
                    <div className="tooltip">Facebook</div>
                    <span><i  className="bi bi-facebook"></i></span>
                </Link>
                <Link href="#" className="icon twitter">
                    <div className="tooltip">Twitter</div>
                    <span><i  className="bi bi-twitter-x"></i></span>
                </Link>
                <Link href="#" className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <span><i  className="bi bi-instagram"></i></span>
                </Link>
                <Link href="#" className="icon github">
                    <div className="tooltip">Github</div>
                    <span><i  className="bi bi-github"></i></span>
                </Link>
                <Link href="#" className="icon youtube">
                    <div className="tooltip">Youtube</div>
                    <span><i  className="bi bi-youtube"></i></span>
                </Link>
            </div>
        </>
    )
}