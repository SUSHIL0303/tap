import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { getProducts } from "../services/googleSheets"
import "../styles/ProductDetail.css"
import ProductCard from "../components/ProductCard"

export default function ProductDetail(){

const { slug } = useParams()
const [related,setRelated] = useState([])

const [product,setProduct] = useState(null)
const [loading,setLoading] = useState(true)

useEffect(()=>{

async function load(){

try{

const data = await getProducts()

const found = data.find(p => p.slug === slug)

setProduct(found)

if(found){

const relatedProducts = data.filter(
p => p.category === found.category && p.slug !== slug
)

setRelated(relatedProducts.slice(0,4)) // show only 4

}

}catch(error){

console.error(error)

}finally{

setLoading(false)

}

}

load()

},[slug])

if(loading){
return <div className="product-detail-message">Loading product...</div>
}

if(!product){
return <div className="product-detail-message">Product not found</div>
}

return(

  <div className="product-detail-page">

    <Navbar/>

    <div className="product-detail-container">

    <div className="product-detail-image-container">
      <img
      src={product.image}
      alt={product.name}
      className="product-detail-image"
      />
    </div>
    

    <div className="product-detail-info">

    <div>
  <h1>{product.name}</h1>

    <ul>
      {product.description.split(".").filter(Boolean).map((item, index) => (
        <li key={index}>{item.trim()}</li>
      ))}
    </ul>
  </div>
    
    <div>
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="buy-button"
        >
        Buy on Amazon
        </a>
    </div>
    

    </div>

    </div>
    <div className="product-detail-page">

    <Navbar/>

    {/* RELATED PRODUCTS */}
    {related.length > 0 && (

    <div className="related-section">

    <h2 className="related-title" >You may also like</h2>

    <div className="related-grid">

    {related.map(product => (

    <ProductCard
    key={product.id}
    product={product}
    />

    ))}

    </div>

    </div>

    )}

    <Footer/>

    </div>

  </div>

)

}