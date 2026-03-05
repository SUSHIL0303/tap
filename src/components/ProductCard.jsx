import "../styles/ProductCard.css"
import { Link } from "react-router-dom"
export default function ProductCard({ product }) {

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3 className="product-title">
        {product.name}
      </h3>

      <Link
        to={`/product/${product.slug}`}
        className="product-button"
      >
        View Details
      </Link>

    </div>
  )
}