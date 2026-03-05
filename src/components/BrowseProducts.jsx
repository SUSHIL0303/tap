import { useNavigate } from "react-router-dom"
import "../styles/BrowseProducts.css"

export default function BentoGrid() {

  const navigate = useNavigate()

  return (
    <div className="browse-all-products-wrapper">

        <div className="browse-product-container">

            <h1 className="main-text">
                Smart saving space.
            </h1>

            <p className="main-text-content">
                Products for small apartments.
            </p>

            <button
            onClick={() => navigate("/products")}
            className="browse-all-button"
            >
                Browse All Products
            </button>

        </div>

    </div>
  )
}