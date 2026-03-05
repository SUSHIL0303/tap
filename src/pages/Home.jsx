import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Bento from "../components/Bento"
import BrowseProducts from "../components/BrowseProducts"
import Features from "../components/Features"
import TextLoop from "../components/TextLoop"

export default function Home() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, [])

  return (
    <div className="home">

      <Navbar />
      <Hero />

      {isMobile ? <TextLoop /> : <Bento />}

      <BrowseProducts />
      <Features />
      <Footer />

    </div>
  )
}