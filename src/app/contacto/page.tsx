export default function Contacto() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tienes alguna consulta o deseas trabajar con nosotros? Déjanos tus datos y nuestro equipo se pondrá en contacto contigo a la brevedad.
          </p>
        </div>
      </section>

      {/* Formulario e Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            
            {/* Formulario */}
            <div className="w-full lg:w-3/5 bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Envíanos un mensaje</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-srs-burgundy focus:border-transparent outline-none transition-all" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Empresa</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-srs-burgundy focus:border-transparent outline-none transition-all" placeholder="Ej. Mi Empresa S.A." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-srs-burgundy focus:border-transparent outline-none transition-all" placeholder="juan@ejemplo.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-srs-burgundy focus:border-transparent outline-none transition-all">
                    <option>Información General</option>
                    <option>Ventas / Negocios</option>
                    <option>Trabaja con nosotros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-srs-burgundy focus:border-transparent outline-none transition-all resize-none" placeholder="Escribe tu mensaje aquí..."></textarea>
                </div>
                <button type="button" className="w-full bg-srs-burgundy text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-lg shadow-srs-burgundy/30">
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-srs-burgundy pl-4">Oficina Principal</h3>
                <p className="text-gray-600 leading-relaxed">
                  Av. Amazonas N34-451 y Atahualpa.<br/>
                  Edificio Corporativo SRS, Piso 8.<br/>
                  Quito, Ecuador
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-srs-burgundy pl-4">Contacto Directo</h3>
                <div className="text-gray-600 space-y-2">
                  <p><strong>Teléfono:</strong> +593 2 222 3333</p>
                  <p><strong>Email:</strong> info@gruposrs.ec</p>
                  <p><strong>Horario:</strong> Lunes a Viernes, 08:30 - 17:30</p>
                </div>
              </div>

              {/* Mapa Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden relative border border-gray-300">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-semibold">
                  [Mapa Interactivo de Google Maps]
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
