import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Contacto from "./pages/Contacto"
import Proyectos from "./pages/Proyectos"
import Reglamento from "./pages/Reglamento"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import App from "./App"
import Comisiones from "./pages/Comisiones"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
  <Route path="/" element={<App />} />
  <Route path="/comisiones" element={<Comisiones />} />
  <Route path="/contacto" element={<Contacto />} />
  <Route path="/proyectos" element={<Proyectos />} />
  <Route path="/reglamento" element={<Reglamento />} />
</Routes>

    </BrowserRouter>
  </React.StrictMode>
)