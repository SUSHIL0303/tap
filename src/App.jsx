import { BrowserRouter } from "react-router-dom"
import RoutesFile from "./routes"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <RoutesFile />
    </BrowserRouter>
  )
}

export default App