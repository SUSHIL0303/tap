import "../styles/SearchBar.css"

export default function SearchBar({setSearch}){

return(

<input
placeholder="Search products..."
className="search-bar"
onChange={(e)=>setSearch(e.target.value)}
/>

)

}