import { useState, useEffect } from "react"
import comisiones1 from "../assets/Comisiones1.png"
import { Link } from "react-router-dom"

export default function HeroCarousel() {
  const slides = [
  {
    id: 1,
    titulo: "Educación y Cultura",
    descripcion:
      "Formando comunidades con conocimiento, identidad y futuro.",
    boton: "Ver comisión",
    ruta: "/comisiones/educacion",
    imagen: comisiones1,
  },
  {
    id: 2,
    titulo: "Movilidad y Transporte",
    descripcion:
      "Conectando municipios, impulsando oportunidades.",
    boton: "Ver comisión",
    ruta: "/comisiones/movilidad",
    imagen: comisiones1,
  },
  {
    id: 3,
    titulo: "Turismo y Gastronomía",
    descripcion:
      "Descubriendo nuestra riqueza, compartiendo nuestra esencia.",
    boton: "Ver comisión",
    ruta: "/comisiones/turismo",
    imagen: comisiones1,
  },
]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[current].imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 transition-all duration-500">
          {slides[current].titulo}
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-10 leading-relaxed">
          {slides[current].descripcion}
        </p>

        <Link
        to={slides[current].ruta}
        className="inline-flex items-center bg-green-600 hover:bg-green-700 transition px-10 py-4 rounded-full text-xl font-semibold"
>       
  {slides[current].boton}
</Link>

      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white text-6xl hover:scale-125 transition"
      >
        ❮
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white text-6xl hover:scale-125 transition"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  )
}