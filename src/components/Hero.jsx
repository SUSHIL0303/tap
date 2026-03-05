import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

export default function Hero(){

const navigate = useNavigate()

return(

<div className="hero-wrapper">

    <div className="hero-text">
        <h1 className="main-text">
            Smart saving space.
        </h1>

        <p className="main-text-content">
            Products for small apartments.
        </p>

        <button
        onClick={()=>navigate("/products")}
        className="explore-button"
        >
            Explore Categories
        </button>
    </div>
    

    

</div>

)

}