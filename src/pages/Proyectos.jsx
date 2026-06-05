import Navbar from "../components/Navbar"

export default function Proyectos() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-40 px-10 md:px-24">

        <div className="mb-6 text-white/60 tracking-[0.3em] uppercase text-sm">
          Nuestros Objetivos
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-10">
          Ejes de trabajo
          <br />
          para transformar
          <br />
          la región.
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-4">
              Comunidad y participación
            </h2>
            <p className="text-white/70">
              Impulsar proyectos que fortalezcan la organización ciudadana y la participación comunitaria.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-4">
              Más oportunidades económicas
            </h2>
            <p className="text-white/70">
              Promover el empleo, el emprendimiento y el desarrollo productivo.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-4">
              Mejor calidad de vida
            </h2>
            <p className="text-white/70">
              Apoyar acciones que mejoren las condiciones de vida de la población.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-4">
              Planeación Regional
            </h2>
            <p className="text-white/70">
              Construir propuestas para el crecimiento ordenado de la región.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}