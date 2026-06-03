import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 backdrop-blur-xl bg-black/20 border-b border-white/10">

      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Logo"
          className="w-14 h-auto object-contain"
        />

        <h1 className="text-2xl font-semibold tracking-[0.2em] uppercase">
          Alianza Volcanes
        </h1>
      </div>

      {/* Menú */}
      <nav className="flex gap-12 text-sm tracking-wide text-white/80">

  <HashLink smooth to="/#inicio" className="hover:text-white transition">
    Inicio
  </HashLink>

  <HashLink smooth to="/#conocenos" className="hover:text-white transition">
    Conócenos
  </HashLink>

  <HashLink smooth to="/#historia" className="hover:text-white transition">
    Historia
  </HashLink>

  <Link
    to="/observatorio"
    className="hover:text-white transition"
  >
    Observatorio Metropolitano
  </Link>

  <HashLink smooth to="/#comites" className="hover:text-white transition">
    Comités Municipales
  </HashLink>

</nav>

      {/* Botón */}
      <button className="border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
        Únete
      </button>

    </header>
  )
}