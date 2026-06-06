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
    El Observatorio Metropolitano de los Volcanes permitirá:
  </h2>

  <ul className="space-y-3 text-xl text-white/80">
    <li>• Entender mejor lo que sucede en la región.</li>
    <li>• Medir los problemas con datos reales y verificables.</li>
    <li>• Proponer soluciones sustentadas en evidencia.</li>
  </ul>
</div>
<p className="text-xl text-white/80 leading-relaxed text-justify">
El Observatorio busca unir tres elementos fundamentales:
la experiencia de la ciudadanía, el conocimiento técnico y la
capacidad de proponer soluciones. Su propósito es transformar
la opinión en evidencia, y la preocupación ciudadana en acciones
concretas que contribuyan al desarrollo de la Región de los Volcanes.
</p>
        </p>
      </div>
    </div>
  )
}