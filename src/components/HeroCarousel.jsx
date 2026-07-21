import { useState } from "react"

export default function HeroCarousel() {

  const slides = [
    {
      titulo: "Comisiones",
      descripcion:
        "Trabajamos juntos por el desarrollo de la Región de los Volcanes.",
      boton: "Conocer más",
    },
    {
      titulo: "Medio Ambiente",
      descripcion:
        "Protegiendo los recursos naturales para las futuras generaciones.",
      boton: "Ver comisión",
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative z-10 h-screen flex items-center justify-center">

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-8 text-white text-6xl hover:scale-125 transition"
      >
        ❮
      </button>

      {/* Contenido */}
      <div className="text-center max-w-4xl px-6">

        <h1 className="text-7xl md:text-8xl font-black mb-8">
          {slides[current].titulo}
        </h1>

        <p className="text-2xl text-white/90 mb-10">
          {slides[current].descripcion}
        </p>

        <button className="bg-green-600 hover:bg-green-700 transition px-10 py-4 rounded-full text-xl font-semibold">
          {slides[current].boton}
        </button>

      </div>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-8 text-white text-6xl hover:scale-125 transition"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-10 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  )
}