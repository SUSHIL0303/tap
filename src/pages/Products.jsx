import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import { getProducts } from "../services/googleSheets"
import "../styles/Products.css"

export default function Products(){

const { category } = useParams()

const [products,setProducts] = useState([])
const [search,setSearch] = useState("")
const [loading,setLoading] = useState(true)

useEffect(()=>{

async function load(){

setLoading(true)

try{

const data = await getProducts()

let result = data

if(category){
result = data.filter(
p => p.category?.trim().toLowerCase() === category?.trim().toLowerCase()
)
}

setProducts(result)

}catch(error){

console.error(error)

}finally{

setLoading(false)

}

}

load()

},[category])

const filtered = products.filter(p =>
p.name?.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="products-page">

<Navbar setSearch={setSearch}/>

<div className="products-container">

{loading && (
<div className="products-message">
Loading products...
</div>
)}

{!loading && filtered.length === 0 && (
<div className="products-message">
*No products currently available
</div>
)}

{!loading && filtered.length > 0 && (

<div className="products-grid">

{filtered.map(product => (

<ProductCard
key={product.id}
product={product}
/>

))}

</div>

)}

</div>

<Footer/>

</div>

)

}