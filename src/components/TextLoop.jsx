import "../styles/TextLoop.css";

export default function TextLoop() {

  const texts = [
    "Use Vertical Space",
    ".",
    "Foldable Furniture",
    ".",
    "Organize Your Kitchen Smartly",
    ".",
    "Hidden Storage Matters",
    ".",
    "Double Your Closet Space"
  ]

  return (
    <div className="carousel">

      <div className="carousel-track">

        {[...texts, ...texts].map((text, index) => (
          <div className="carousel-item" key={index}>
            {text}
          </div>
        ))}

      </div>

    </div>
  )
}