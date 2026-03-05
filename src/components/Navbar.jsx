import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import SearchBar from "./SearchBar"
import "../styles/Navbar.css"

export default function Navbar({ setSearch }) {

const location = useLocation()
const isProductsPage = location.pathname === "/products"

const [open,setOpen] = useState(false)

const categories = [
"TINY-ROOM",
"KITCHEN-STORAGE",
"BEDROOM-ORGANIZATION",
"CLOSET-SETUP"
]

return(

<nav className="navbar-wrapper">

<div className="navbar-top">

<Link to="/" className="logo-text">
TAP
</Link>

<div className="navbar-buttons">

{!isProductsPage && (
<>
<Link to="/" className="btns">Home</Link>
<Link to="/products" className="btns">Products</Link>
</>
)}

{isProductsPage && (
<SearchBar setSearch={setSearch}/>
)}

<div className="dropdown">

<span
className="btns"
onClick={() => setOpen(!open)}
>
Categories
</span>

</div>

</div>

</div>

<div className={`dropdown-menu ${open ? "dropdown-open" : ""}`}>

{categories.map(cat => (

<Link
key={cat}
to={`/products/category/${cat.toLowerCase()}`}
className="dropdown-item"
onClick={() => setOpen(false)}
>
{cat}
</Link>

))}

</div>

</nav>

)

}