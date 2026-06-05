import Navbar from "../components/Navbar"
import reglamento from "../assets/Reglamento.png"

export default function Reglamento() {
  return (
    <div
  className="min-h-screen text-white relative bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: `url(${reglamento})`,
  }}
><div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/75"></div>
      <Navbar />

      <section className="relative z-10 pt-32 px-10 md:px-24 pb-20">

        <div className="max-w-5xl mx-auto">

          <div className="mb-6 text-white/60 tracking-[0.3em] uppercase text-sm">
            Reglamento Interno
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-10">
            Reglamento Interno
          </h1>

          <p className="text-white/70 text-lg leading-8 text-justify"> 
            ¿Por qué es importante?

            El Reglamento Interno establece las bases para el funcionamiento ordenado de Alianza 
            Volcanes A.C. Su propósito es garantizar la transparencia, fortalecer la participación 
            ciudadana y definir con claridad los derechos y obligaciones de quienes forman parte 
            de la organización.

            A través de estas disposiciones se busca generar confianza, certeza institucional
            y mecanismos de colaboración que permitan alcanzar los objetivos de desarrollo
             regional de manera responsable y organizada.
          </p>

          <div className="bg-black/55 border border-white/15 rounded-[30px] p-10 backdrop-blur-sm">

            <h2 className="text-3xl font-bold mb-6">
              Principios Generales
            </h2>

            <ul className="space-y-4 text-white/70 text-lg">
              <li>• Respeto a la participación ciudadana.</li>
              <li>• Transparencia en las actividades de la organización.</li>
              <li>• Inclusión y respeto a la diversidad de opiniones.</li>
              <li>• Compromiso con el desarrollo regional sostenible.</li>
              <li>• Trabajo colaborativo entre municipios y comunidades.</li>
            </ul>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Derechos de los Integrantes
            </h2>

            <ul className="space-y-4 text-white/70 text-lg">
              <li>• Participar en actividades y proyectos.</li>
              <li>• Presentar propuestas e iniciativas.</li>
              <li>• Recibir información sobre las actividades de la organización.</li>
              <li>• Ser escuchados dentro de los espacios de participación.</li>
            </ul>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Obligaciones de los Integrantes
            </h2>

            <ul className="space-y-4 text-white/70 text-lg">
              <li>• Respetar el reglamento interno.</li>
              <li>• Conducirse con respeto hacia los demás integrantes.</li>
              <li>• Promover los principios y objetivos de la organización.</li>
              <li>• Participar de manera responsable en las actividades.</li>
            </ul>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Estructura Organizacional
            </h2>

            <ul className="space-y-4 text-white/70 text-lg">
              <li>• Asamblea General.</li>
              <li>• Consejo Directivo.</li>
              <li>• Comité de Vigilancia.</li>
              <li>• Consejo Consultivo.</li>
              <li>• Comité Técnico.</li>
              <li>• CComités Municipales.</li>
              <li>• Observatorio Metropolitano de los Volcanes.</li>
            </ul>

          </div>

        </div>

      </section>

    </div>
  )
}