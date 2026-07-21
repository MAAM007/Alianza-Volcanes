import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Contacto from "./pages/Contacto"
import Proyectos from "./pages/Proyectos"
import Reglamento from "./pages/Reglamento"
import Educacion from "./pages/Educacion"
import Movilidad from "./pages/Movilidad"
import Turismo from "./pages/Turismo"

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
  <Route path="/comisiones/educacion" element={<Educacion />} />
  <Route path="/comisiones/movilidad" element={<Movilidad />} />
  <Route path="/comisiones/turismo" element={<Turismo />} />
</Routes>

    </BrowserRouter>
  </React.StrictMode>
)