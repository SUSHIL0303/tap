import { Link } from "react-router-dom"
import "../styles/Footer.css"

export default function Footer(){

return(

<footer className="footer-wrapper">
    
        <div className="footer-content">

            <div className="website-info-wrapper">
                <h1>ABOUT TAP</h1>
                <p className="website-info">
                    TAP helps people living in small apartments discover smart products
                    that save space and improve organization. We curate useful items for
                    tiny rooms, kitchen storage, bedroom organization, and closet setups
                    to make compact living more efficient and comfortable.
                </p>
            </div>

            <div className="quick-links-wrapper">
                <h4>QUICK LINKS</h4>

                <Link to="/">
                    <p>Home</p>
                </Link>

                <Link to="/products">
                    <p>Categories</p>
                </Link>

                <p>Amazon Finds</p>

            </div>

            <div className="info-wrapper">
                <h4>INFO</h4>

                <Link to="/about">
                    <p>About</p>
                </Link>

                <Link to="/about">
                    <p>Contact</p>
                </Link>

            </div>

        </div>  

        <div className="associate-msg">
            <p>
                As an Amazon Associate I earn from qualifying purchases &#x2764;.
            </p>
        </div>  

</footer>

)

}