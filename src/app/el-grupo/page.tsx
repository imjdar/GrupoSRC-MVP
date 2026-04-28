import Timeline from '@/components/Timeline';
import Image from 'next/image';

export default function ElGrupo() {
  return (
    <div>
      {/* HEADER DE LA PÁGINA */}
      <section className="bg-srs-burgundy text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">El Grupo</h1>
          <p className="text-xl max-w-3xl mx-auto font-light opacity-90">
            Nuestra historia está marcada por la constante búsqueda de la excelencia y el compromiso con el desarrollo de nuestro entorno.
          </p>
        </div>
      </section>

      {/* SECCIÓN DE FILOSOFÍA / VALORES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <div className="mb-12">
                <h2 className="text-sm font-bold text-srs-gold tracking-[0.3em] mb-4 uppercase">Misión</h2>
                <p className="text-2xl font-light leading-relaxed text-srs-burgundy">
                  &quot;Hacemos nuestro mayor esfuerzo para ser un holding financiero que aporta al crecimiento de cada sector, a través de un portafolio de negocios diversificado que cimenta sus acciones en la rentabilidad, innovación y sostenibilidad en el tiempo.&quot;
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-sm font-bold text-srs-gold tracking-[0.3em] mb-4 uppercase">Visión</h2>
                <p className="text-2xl font-light leading-relaxed text-srs-burgundy italic">
                  &quot;Con una ambiciosa visión de futuro Grupo SRS continuará su legado a las siguientes generaciones.&quot;
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold text-srs-gold tracking-[0.3em] mb-8 uppercase">Nuestros Valores</h2>
                <div className="grid grid-cols-2 gap-6">
                  {['Ética', 'Estética', 'Innovación', 'Responsabilidad Social', 'Pasión'].map((valor) => (
                    <div key={valor} className="flex items-center space-x-3 group cursor-default">
                      <div className="w-2 h-2 rounded-full bg-srs-gold group-hover:scale-150 transition-transform" />
                      <span className="text-lg font-bold text-gray-800">{valor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative w-full aspect-[4/3]">
              <Image 
                src="https://www.gruposrs.ec/wp-content/uploads/2024/01/collage-home.jpg" 
                alt="Grupo SRS" 
                fill
                className="object-cover shadow-2xl rounded-sm"
              />
              <div className="absolute -bottom-10 -left-10 bg-srs-burgundy p-10 hidden lg:block z-10">
                <p className="text-white font-playfair italic text-3xl">Liderazgo con propósito</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LÍNEA DE TIEMPO ANIMADA */}
      <Timeline />
    </div>
  );
}
