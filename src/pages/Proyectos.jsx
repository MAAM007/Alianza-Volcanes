import Navbar from "../components/Navbar"
import ejes from "../assets/ejes.png"

import mini1 from "../assets/mini1.jpg"
import mini2 from "../assets/mini2.jpg"
import mini3 from "../assets/mini3.jpg"
import mini4 from "../assets/mini4.jpg"
import mini5 from "../assets/mini5.jpg"
import mini6 from "../assets/mini6.jpg"
import mini7 from "../assets/mini7.jpg"
import mini8 from "../assets/mini1.jpg"


export default function Proyectos() {
  return (
    <div
  className="min-h-screen text-white relative bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: `url(${ejes})`,
  }}
>
    <div className="absolute inset-0 bg-black/45"></div>
      <Navbar />

      <section
        id="proyectos"
        className="relative z-10 px-10 md:px-24 py-32"
      >
        <div className="max-w-7xl mx-auto">

          <div className="mb-6 text-white/60 tracking-[0.3em] uppercase text-sm">
            Nuestros Proyectos
          </div>

          <h3 className="text-5xl md:text-7xl font-black leading-tight mb-16">
            Ejes de trabajo
            <br />
            para transformar
            <br />
            la región.
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
<div className="bg-black/40 border border-white/10 rounded-[30px] p-5 backdrop-blur-xl hover:scale-105 transition duration-300">
  <img
    src={mini1}
    alt="Comunidad y participación"
    className="w-full h-auto rounded-2xl"
  />
</div>

            <div className="bg-black/40 border border-white/10 rounded-[30px] p-5 backdrop-blur-xl hover:scale-105 transition duration-300">
  <img
    src={mini2}
    alt="Comunidad y participación"
    className="w-full h-auto rounded-2xl"
  />
</div>

            <div className="bg-black/40 border border-white/10 rounded-[30px] p-5 backdrop-blur-xl hover:scale-105 transition duration-300">
  <img
    src={mini3}
    alt="Comunidad y participación"
    className="w-full h-auto rounded-2xl"
  />
</div>
            <div className="bg-black/40 border border-white/10 rounded-[30px] p-5 backdrop-blur-xl hover:scale-105 transition duration-300">
  <img
    src={mini4}
    alt="Comunidad y participación"
    className="w-full h-auto rounded-2xl"
  />
</div>

            <div className="bg-black/40 border border-white/10 rounded-[30px] p-5 backdrop-blur-xl hover:scale-105 transition duration-300">
  <img
    src={mini5}
    alt="Comunidad y participación"
    className="w-full h-auto rounded-2xl"
  />
</div>
            <div className="bg-black/40 border border-white/10 rounded-[30px] p-5 backdrop-blur-xl hover:scale-105 transition duration-300">
  <img
    src={mini6}
    alt="Comunidad y participación"
    className="w-full h-auto rounded-2xl"
  />
</div>

            <div className="bg-black/40 border border-white/10 rounded-[30px] p-5 backdrop-blur-xl hover:scale-105 transition duration-300">
  <img
    src={mini7}
    alt="Comunidad y participación"
    className="w-full h-auto rounded-2xl"
  />
</div>

            <div className="bg-black/40 border border-white/10 rounded-[30px] p-5 backdrop-blur-xl hover:scale-105 transition duration-300">
  <img
    src={mini8}
    alt="Comunidad y participación"
    className="w-full h-auto rounded-2xl"
  />
</div>

          </div>
        </div>
      </section>
    </div>
  )
}