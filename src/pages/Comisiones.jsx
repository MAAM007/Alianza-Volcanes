import comisiones from "../assets/Comisiones.png"
import Navbar from "../components/Navbar"

export default function Comisiones() {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${comisiones})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <Navbar />

      <div className="relative z-10 pt-60 px-10 md:px-24 max-w-5xl">

        <h1 className="text-6xl md:text-8xl font-black mb-10">
          Comisiones
        </h1>

        <p className="text-xl text-white/80 leading-relaxed text-justify mb-6">
          Hoy en la Región de los Volcanes enfrentamos muchos desafíos:
          movilidad, agua, seguridad, salud y oportunidades económicas.
          Sin embargo, existe un problema igual de importante: la falta de
          información clara, actualizada y confiable para comprender lo que
          realmente sucede en nuestra región.
        </p>

        <p className="text-xl text-white/80 leading-relaxed text-justify mb-6">
          Cuando no existen datos confiables, las decisiones suelen tomarse
          con información incompleta o desactualizada. Esto provoca programas
          poco efectivos, inversiones mal dirigidas y problemas que se repiten
          sin encontrar soluciones de fondo.
        </p>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Las Comisiones de la Alianza permitirán:
          </h2>

          <ul className="space-y-3 text-xl text-white/80">
            <li>• Analizar las principales necesidades de la región.</li>
            <li>• Proponer estrategias y proyectos para cada tema.</li>
            <li>• Coordinar esfuerzos entre ciudadanía, especialistas y autoridades.</li>
            <li>• Impulsar soluciones con participación social.</li>
          </ul>
        </div>

        <p className="text-xl text-white/80 leading-relaxed text-justify">
          Las Comisiones buscan reunir a ciudadanos, profesionistas,
          académicos y representantes sociales para trabajar de manera
          organizada en temas prioritarios como movilidad, medio ambiente,
          salud, educación, desarrollo económico, seguridad y participación
          ciudadana. Su propósito es convertir las ideas en acciones que
          fortalezcan el desarrollo de la Región de los Volcanes.
        </p>

      </div>
    </div>
  )
}