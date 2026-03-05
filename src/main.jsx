import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./styles/global.css"

const params = new URLSearchParams(window.location.search)
const redirect = params.get("p")

if (redirect) {
  window.history.replaceState(null, "", "/tap" + redirect)
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/tap">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)