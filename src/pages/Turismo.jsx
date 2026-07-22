import Navbar from "../components/Navbar"
import movilidadBg from "../assets/movilidad.png"

export default function movilidad() {
  return (
    <>
      <Navbar />

      <main className="relative h-screen overflow-hidden">

  {/* Imagen de fondo */}
  <div
  className="absolute inset-0"
  style={{
    backgroundImage: `url(${movilidadBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>

  {/* Capa oscura */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Contenido */}
  <div className="relative z-10 h-full flex items-start px-10 md:px-24 pt-36">
  <div className="max-w-4xl">

    <div className="mb-6 text-white/70 tracking-[0.3em] uppercase text-sm">
      Comisión Permanente
    </div>

    <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8 text-white">
  Turismo
  <br />
  y Gastronomia
</h1>

    <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
  Formando comunidades con conocimiento, identidad y futuro.
</p>

  </div>

</div>
</main>
    </>
  )
}