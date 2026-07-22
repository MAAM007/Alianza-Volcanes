import Navbar from "../components/Navbar"
import movilidadBg from "../assets/movilidad.png"
import movilidadInfo from "../assets/movilidad-info.jpg"

export default function Movilidad() {
  return (
    <>
      <Navbar />

      {/* HERO */}
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
              Movilidad
              <br />
              y Transporte
            </h1>

          </div>

        </div>

      </main>

      {/* INFORMACIÓN */}
<section className="relative py-12 overflow-hidden">

{/* Fondo difuminado */}
<div
  className="absolute inset-0"
  style={{
    backgroundImage: `url(${movilidadBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(18px)",
    transform: "scale(1.1)",
  }}
/>

{/* Capa de color */}
<div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

  <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* Texto */}
      <div>

        <span className="text-white uppercase tracking-[0.3em] text-sm font-semibold">
          Comisión Permanente
        </span>

        <h2 className="text-5xl font-bold text-white mt-4 mb-8">
          Movilidad y Transporte
        </h2>

        <p
          className="text-lg text-white leading-9"
          style={{ textAlign: "justify" }}
        >
          Impulsamos una movilidad más eficiente, segura y sostenible para la
          Región de los Volcanes, promoviendo proyectos y estrategias que
          fortalezcan la conectividad, reduzcan los tiempos de traslado y
          generen mejores oportunidades de desarrollo para los habitantes de
          nuestros 14 municipios. Nuestro compromiso es impulsar soluciones
          integrales mediante el trabajo coordinado entre ciudadanía,
          empresarios e instituciones para fortalecer el desarrollo regional.
        </p>

        <div className="mt-8 space-y-3">

          <div className="flex items-center gap-3">
  <span className="text-green-400 text-xl">✓</span>
  <span className="text-white text-lg">Conectividad Regional</span>
</div>

<div className="flex items-center gap-3">
  <span className="text-green-400 text-xl">✓</span>
  <span className="text-white text-lg">Infraestructura Vial</span>
</div>

<div className="flex items-center gap-3">
  <span className="text-green-400 text-xl">✓</span>
  <span className="text-white text-lg">Desarrollo Económico</span>
</div>

        </div>

      </div>

      {/* Imagen */}
      <div>

        <img
          src={movilidadInfo}
          alt="Movilidad Región de los Volcanes"
          className="w-full rounded-3xl shadow-2xl"
        />

      </div>

    </div>

  </div>

</section>
    </>
  )
}