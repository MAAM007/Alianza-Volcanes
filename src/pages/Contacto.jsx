import Navbar from "../components/Navbar"

export default function Contacto() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-40 px-10 md:px-24 max-w-3xl mx-auto">

        <h1 className="text-5xl font-black mb-10">
          Contáctanos
        </h1>

        <form className="space-y-6">

          <div>
            <label className="block mb-2">Nombre completo</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
            />
          </div>

          <div>
            <label className="block mb-2">Correo electrónico</label>
            <input
              type="email"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
            />
          </div>

          <div>
            <label className="block mb-2">Municipio</label>

            <select className="w-full p-4 rounded-xl bg-white text-black border border-white/20">
              <option>Amecameca</option>
              <option>Atlautla</option>
              <option>Ayapango</option>
              <option>Chalco</option>
              <option>Cocotitlán</option>
              <option>Ecatzingo</option>
              <option>Ixtapaluca</option>
              <option>Juchitepec</option>
              <option>Ozumba</option>
              <option>Temamatla</option>
              <option>Tenango del Aire</option>
              <option>Tepetlixpa</option>
              <option>Tlalmanalco</option>
              <option>Valle de Chalco</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Mensaje</label>

            <textarea
              rows="6"
              className="w-full p-4 rounded-xl bg-white/10 border border-white/20"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-4 rounded-full bg-white text-black font-bold"
          >
            Enviar mensaje
          </button>

        </form>

      </div>
    </div>
  )
}