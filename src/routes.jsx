import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import AboutContact from "./pages/AboutContact"

export default function RoutesFile() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/products/category/:category" element={<Products />} />

      <Route path="/about" element={<AboutContact />} />

    </Routes>
  )
}