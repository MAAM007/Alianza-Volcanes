import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import App from "./App"
import Observatorio from "./pages/Observatorio"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/observatorio"
          element={<Observatorio />}
        />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
)