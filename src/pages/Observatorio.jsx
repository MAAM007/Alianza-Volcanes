import observatorio from "../assets/Observatorio.png"
import Navbar from "../components/Navbar"

export default function Observatorio() {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${observatorio})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <Navbar />

      <div className="relative z-10 pt-60 px-10 md:px-24">
        <h1 className="text-6xl md:text-8xl font-black mb-10">
          Observatorio Metropolitano
        </h1>

        <p className="text-xl text-white/80 max-w-4xl leading-relaxed text-justify">
          Hoy en la Región de los Volcanes enfrentamos muchos problemas: movilidad, agua, seguridad, salud, falta de oportunidades económicas, pero hay algo que casi no se ve y que es igual de importante:
        no tenemos información clara, actualizada y confiable sobre lo que realmente está pasando.
        Muchas veces las decisiones se toman con datos desactualizados, incompletos o simplemente sin información suficiente.
        Y cuando no hay datos, se termina decidiendo por ocurrencias, no por soluciones reales.
        Eso tiene consecuencias muy concretas: programas que no funcionan, inversiones mal dirigidas y problemas que se repiten una y otra vez.
        Por eso necesitamos un Observatorio Metropolitano de los Volcanes.
        Un espacio donde podamos:
      •	entender mejor lo que pasa en la región,
      •	medir los problemas con datos reales,
      •	y proponer soluciones bien sustentadas.
        Pero no se trata solo de números.
        Se trata de juntar tres cosas que hoy están separadas: la experiencia de la gente, el conocimiento técnico y la capacidad de proponer.
        Porque nadie conoce mejor los problemas que quienes los viven todos los días, y nadie puede resolverlos sin información seria.
        El observatorio es justamente eso: pasar de la opinión a la evidencia, y de la queja a la solución.

        </p>
      </div>
    </div>
  )
}