import logo from "./assets/logo.png"
import popo from "./assets/popo.jpg"
import PPT1 from "./assets/PPT1.png"
import Protesta from "./assets/Protesta.jpg"
import Protesta2 from "./assets/Protesta2.jpg"
import Protesta3 from "./assets/Protesta3.jpg"
import Bacheo from "./assets/Bacheo.jpeg"
import comunidadyparticipacion from "./assets/comunidadyparticipacion.jpg"
import masoportunidadeseconomicas from "./assets/masoportunidadeseconomicas.jpg"
import mejorcalidaddevida from "./assets/mejorcalidaddevida.jpg"
import planeaciondelaregion from "./assets/planeaciondelaregion.jpg"
import educacionycapacitacion from "./assets/educacionycapacitacion.jpg"
import cuidadodelmbiente from "./assets/cuidadodelmbiente.jpg"
import prevencion from "./assets/prevencion.jpg"
import trabajoenequipo from "./assets/trabajoenequipo.jpg"
import PPT2 from "./assets/PPT2.png"
import { Link } from "react-router-dom"


import Navbar from "./components/Navbar"



export default function App() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">

      <img
        src={popo}
        alt="Popocatépetl"
        className="absolute inset-0 w-full h-full object-contain object-top"
      />

      <div className="absolute inset-0 bg-black/30" />


    <Navbar />

    {/* HERO */}
   
      <section
        id="inicio"
        className="relative z-10 min-h-[85vh] pt-36 flex items-center px-10 md:px-24"
      >
<div className="absolute inset-0 bg-black/35 z-0" />

        <div className="max-w-4xl relative z-10">

          {/* Eslogan */}
          <div className="mb-6 text-white/70 tracking-[0.3em] uppercase text-sm">
            14 Municipios, Una Sola Voz
          </div>

          {/* Título */}
          <h2 className="text-4xl md:text-7xl font-black leading-[0.95] mb-8">
            ALIANZA POR EL
            <br />
            DESARROLLO
            <br />
            DE LA REGIÓN
            <br />
            DE LOS VOLCANES
          </h2>

          {/* Texto */}
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
            Impulsando innovación, desarrollo regional y transformación
            social para construir un futuro más fuerte para nuestra región.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-5">

            <Link
  to="/reglamento"
  className="px-10 py-5 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300 inline-block text-center"
>
  Reglamento
</Link>

            <Link
  to="/proyectos"
  className="px-10 py-5 rounded-full border border-white/30 hover:bg-white/10 transition duration-300 inline-block text-center"
>
  Ejes de trabajo
</Link>

          </div>
        </div>
      </section>



      {/* Conócenos */}
      <section
        id="conocenos"
        className="relative z-10 px-10 md:px-24 py-32 bg-black"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>

            <div className="mb-6 text-white/60 tracking-[0.3em] uppercase text-sm">
              Quiénes Somos
            </div>

            <h3 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Una alianza
              <br />
              construida por
              <br />
              la región.
            </h3>

            <p className="text-lg text-white/70 leading-relaxed mb-6 text-justify">
              La Región de los Volcanes enfrenta muchos desafíos, pero también tiene un gran potencial para crecer 
              y transformarse.
              Con esa visión nace Alianza Volcanes A.C., una iniciativa ciudadana que busca generar información, 
              diagnósticos y propuestas que ayuden a mejorar la calidad de vida en los 14 municipios de la región.
            </p>

            <img
              src={PPT2}
              alt="Volcanes"
              className="mt-10 w-full h-[350px] object-contain rounded-[30px] border border-white/10 shadow-2xl"
            />

          </div>

          {/* Caja */}
          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">

            <div className="text-6xl font-black mb-4">
              14
            </div>

            <div className="text-2xl text-white/80 mb-6">
              Municipios Unidos
            </div>

            <div className="grid grid-cols-2 gap-4 text-white/70 text-lg">

              <p>• Amecameca</p>
              <p>• Atlautla</p>

              <p>• Ayapango</p>
              <p>• Chalco</p>

              <p>• Cocotitlán</p>
              <p>• Ecatzingo</p>

              <p>• Ixtapaluca</p>
              <p>• Juchitepec</p>

              <p>• Ozumba</p>
              <p>• Temamatla</p>

              <p>• Tenango del Aire</p>
              <p>• Tepetlixpa</p>

              <p>• Tlalmanalco</p>
              <p>• Valle de Chalco</p>

            </div>

          </div>

        </div>
      </section>

      {/* Historia */}
      <section
        id="historia"
        className="relative z-10 px-10 md:px-24 py-32 bg-black/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">

          <div className="mb-6 text-white/60 tracking-[0.3em] uppercase text-sm">
            Nuestra Historia
          </div>

          <h3 className="text-5xl md:text-7xl font-black leading-tight mb-10">
            Una alianza nacida
            <br />
            para transformar
            <br />
            la región.
          </h3>

          <p className="text-xl text-white/70 leading-relaxed mb-8 text-justify">
            La Alianza Por El Desarrollo De La Región De Los Volcanes A.C.
            surge con el propósito de unir esfuerzos entre municipios,
            ciudadanos y organizaciones para impulsar el crecimiento,
            la innovación y el bienestar regional.
          </p>

          <p className="text-lg text-white/60 leading-relaxed text-justify">
            La asociación reúne a ciudadanos, especialistas, académicos 
            y jóvenes profesionistas para analizar temas fundamentales como movilidad,
            salud, seguridad, turismo, desarrollo económico, agua, medio ambiente y educación. 
            El objetivo es claro: construir soluciones y tomar mejores 
            decisiones con base en datos reales, escuchando a la gente y 
            entendiendo las necesidades de cada comunidad.
          </p>

          {/* EVENTOS */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {/* Evento 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:scale-[1.02] transition duration-300">

              <img
                src={Bacheo}
                alt="Evento"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h4 className="text-2xl font-bold mb-4">
                  Foro Por La Solución Vial
                </h4>

                <p className="text-white/60 mb-6 text-justify">
                  Se impulsó un movimiento ciudadano para promover el bacheo
                  y mejoramiento de la carretera México–Cuautla.
                </p>

                <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
                  Ver Evento
                </button>

              </div>
            </div>

            {/* Evento 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:scale-[1.02] transition duration-300">

              <img
                src={Protesta}
                alt="Evento"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h4 className="text-2xl font-bold mb-4">
                  Toma de protesta
                </h4>

                <p className="text-white/60 mb-6 text-justify">
                  Inicio oficial de la alianza regional con representantes
                  de distintos municipios.
                </p>

                <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
                  Ver Evento
                </button>

              </div>
            </div>

            {/* Evento 3 */}
            <div className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:scale-[1.02] transition duration-300">

              <img
                src={logo}
                alt="Evento"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h4 className="text-2xl font-bold mb-4">
                  Participación Ciudadana
                </h4>

                <p className="text-white/60 mb-6 text-justify">
                  En espera...
                </p>

                <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
                  Ver Evento
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Contacto */}
      <section
        id="contacto"
        className="relative z-10 px-10 md:px-24 py-24"
      >
        <div className="max-w-4xl mx-auto text-center">

          <div className="mb-6 text-white/60 tracking-[0.3em] uppercase text-sm">
            Contacto
          </div>

          <h3 className="text-5xl font-black mb-8">
            Construyamos juntos el futuro de la región.
          </h3>

          <p className="text-lg text-white/70 mb-10">
            Ponte en contacto con nosotros para colaborar, participar
            o conocer más sobre nuestros proyectos.
          </p>

          <Link
  to="/contacto"
  className="px-10 py-5 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300 inline-block"
>
  Contactar
</Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-white/50 text-sm">
        © 2026 Alianza Por El Desarrollo De La Región De Los Volcanes A.C.
      </footer>

    </div>
  )
}