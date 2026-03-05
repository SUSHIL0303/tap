import { useState } from "react"
import "../styles/AboutContact.css"
import { Link } from "react-router-dom"

export default function AboutContact(){

const [active,setActive] = useState("about")

return(

<div className="about-contact-page">

    <div className="panel-container">

    {/* ABOUT PANEL */}

    <div
    className={`panel about ${active === "about" ? "active" : "collapsed"}`}
    onClick={()=>setActive("about")}
    >

    <div className="panel-header">
    <span className="panel-title">About TAP</span>
    <span className="arrow">→</span>
    </div>

    <div className="panel-content">

    <h2>About <span style={{color:"#1e35ff"}}>TAP</span> – Tiny Apartment Products</h2>

    <p>
    TAP helps people living in small apartments discover smart products
    that save space and improve organization. Many modern homes have
    limited space, and finding the right products can make a big
    difference in comfort and efficiency.
    </p>

    <p>
    Our goal is to curate practical and innovative items designed for
    compact living. From tiny room storage solutions to kitchen
    organizers, bedroom space savers, and closet setups, TAP highlights
    products that help you make the most of every square foot.
    </p>

    <p>
    We focus on products that are simple, useful, and suitable for
    everyday apartment living. Whether you want to organize your room,
    maximize storage, or improve functionality, TAP provides inspiration
    and product recommendations to help create a smarter and more
    comfortable home.
    </p>

    </div>

    </div>


    {/* CONTACT PANEL */}

    <div
    className={`panel contact ${active === "contact" ? "active" : "collapsed"}`}
    onClick={()=>setActive("contact")}
    >

    <div className="panel-header">
    <span className="panel-title">Contact</span>
    <span className="arrow">←</span>
    </div>

    <div className="panel-content">

    <h2 style={{color:"#999999"}}>Contact TAP</h2>

    <p>
    If you have questions, suggestions, or product recommendations,
    feel free to get in touch.
    </p>

    <p>
  <strong style={{ color: "#999999" }}>Email</strong><br/>
  
  <a href="mailto:support@tinyapartmentproducts.com">
    support@tinyapartmentproducts.com
  </a>

</p>

    <p>
    <strong style={{color:"#999999"}}>Business Inquiries</strong><br/>
    For collaborations or brand partnerships,
    please reach out through our email.
    </p>

    </div>

    </div>

    </div>

    <Link to="/"><button className="return-button">Return To Home</button></Link>

</div>

)

}