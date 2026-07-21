import comisiones1 from "../assets/Comisiones1.png"
import Navbar from "../components/Navbar"

export default function Comisiones() {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: `url(${comisiones1})`,
        backgroundSize: "cover",
        backgroundPosition: "center 120px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Oscurece la imagen */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/90" />

      <Navbar />

      {/* HERO */}
      <section className="relative z-10 h-screen flex items-center justify-center text-center px-6">

        <div className="max-w-4xl">

          <h1 className="text-7xl md:text-8xl font-black mb-8">
            Comisiones
          </h1>

          <p className="text-2xl md:text-3xl text-white/90 mb-10">
            Trabajamos juntos por el desarrollo de la Región de los Volcanes.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
            className="bg-green-600 hover:bg-green-700 transition px-10 py-4 rounded-full text-xl font-semibold"
          >
            Conocer más
          </button>

        </div>

      </section>

      {/* CONTENIDO */}
      <section className="relative z-10 bg-black/65 backdrop-blur-sm">

        <div className="max-w-6xl mx-auto px-8 md:px-20 py-24">

          <h2 className="text-5xl font-bold mb-10">
            ¿Por qué son importantes las Comisiones?
          </h2>

          <p className="text-xl text-white/80 leading-relaxed text-justify mb-8">
            Hoy en la Región de los Volcanes enfrentamos muchos desafíos:
            movilidad, agua, seguridad, salud y oportunidades económicas.
            Sin embargo, existe un problema igual de importante: la falta de
            información clara, actualizada y confiable para comprender lo que
            realmente sucede en nuestra región.
          </p>

          <p className="text-xl text-white/80 leading-relaxed text-justify mb-8">
            Cuando no existen datos confiables, las decisiones suelen tomarse
            con información incompleta o desactualizada. Esto provoca programas
            poco efectivos, inversiones mal dirigidas y problemas que se
            repiten sin encontrar soluciones de fondo.
          </p>

          <h3 className="text-3xl font-bold mb-6">
            Las Comisiones permitirán:
          </h3>

          <ul className="space-y-4 text-xl text-white/80 mb-10">
            <li>• Analizar las principales necesidades de la región.</li>
            <li>• Proponer estrategias y proyectos para cada tema.</li>
            <li>• Coordinar esfuerzos entre ciudadanía, especialistas y autoridades.</li>
            <li>• Impulsar soluciones con participación social.</li>
          </ul>

          <p className="text-xl text-white/80 leading-relaxed text-justify">
            Las Comisiones buscan reunir a ciudadanos, profesionistas,
            académicos y representantes sociales para trabajar de manera
            organizada en temas prioritarios como movilidad, medio ambiente,
            salud, educación, desarrollo económico, seguridad y participación
            ciudadana. Su propósito es convertir las ideas en acciones que
            fortalezcan el desarrollo de la Región de los Volcanes.
          </p>

        </div>

      </section>

    </div>
  )
}