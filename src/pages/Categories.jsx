import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Categories(){

const categories = [
{ value: "tiny-room", label: "TINY ROOM" },
{ value: "kitchen-storage", label: "KITCHEN STORAGE" },
{ value: "bedroom-organization", label: "BEDROOM ORGANIZATION" },
{ value: "closet-setup", label: "CLOSET SETUP" }
]

return(

<div>

<Navbar/>

<div className="grid grid-cols-2 gap-6 p-10">

{categories.map(cat => (

<Link
key={cat.value}
to={`/products/category/${cat.value}`}
className="border p-10 text-center rounded"
>

{cat.label}

</Link>

))}

</div>

</div>

)

}