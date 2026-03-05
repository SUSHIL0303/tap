import "../styles/ProductCard.css"

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

      <p className="product-description">
        {product.description}
      </p>

      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="product-button"
      >
        View Product
      </a>

    </div>
  )
}