import observatorio from "../assets/observatorio.png"
import Navbar from "../components/Navbar"

export default function Observatorio() {
  return (
    <div

  className="min-h-screen text-white bg-cover bg-center relative"
  style={{
    backgroundImage: `url(${observatorio})`,
  }}
  
>

      <Navbar />

      <div className="relative z-10 pt-40 px-10 md:px-24">

        <h1 className="text-6xl md:text-8xl font-black mb-10">
          Observatorio Metropolitano
        </h1>

        <p className="text-xl text-white/70 max-w-4xl leading-relaxed">
          Aquí podrás agregar información, imágenes, proyectos,
          estadísticas y todo lo relacionado con el Observatorio
          Metropolitano de la Región de los Volcanes.
        </p>

      </div>
    </div>
  )
}