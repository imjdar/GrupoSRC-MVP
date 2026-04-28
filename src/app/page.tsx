import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://www.gruposrs.ec/wp-content/uploads/2024/01/hero-home.jpg" 
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="text-white font-bold text-6xl md:text-9xl tracking-[0.2em] mb-4">SRS</div>
          <h1 className="text-white font-playfair italic text-3xl md:text-5xl font-light">Ser los mejores</h1>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-[1px] h-20 bg-white/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. EL GRUPO */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-bold text-srs-burgundy mb-8 tracking-tight">El grupo</h2>
            <p className="text-lg leading-relaxed text-srs-gray-dark mb-10 opacity-90">
              Somos un holding empresarial ecuatoriano con más de 40 años de trayectoria, 
              comprometidos con la excelencia, la ética y el desarrollo integral del país. 
              Nuestra visión trasciende los negocios, buscando generar un impacto positivo 
              en la sociedad y el medio ambiente a través de la innovación constante.
            </p>
            <button className="bg-srs-gray text-white px-10 py-4 font-bold text-sm tracking-widest hover:bg-srs-burgundy transition-all duration-300">
              EL GRUPO
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] shadow-2xl">
              <Image 
                src="https://www.gruposrs.ec/wp-content/uploads/2024/01/collage-home.jpg" 
                alt="Gente SRS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUESTRAS EMPRESAS (Carousel Simulation) */}
      <section className="py-24 bg-srs-light-gray overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <h2 className="text-5xl font-bold text-srs-burgundy">Nuestras Empresas</h2>
        </div>
        
        <div className="flex gap-6 px-6 overflow-x-auto pb-10 no-scrollbar">
          {[
            { name: 'IMPTEK', desc: 'Vialidad e Impermeabilización', img: 'https://www.gruposrs.ec/wp-content/uploads/2024/01/empresa-imptek.jpg' },
            { name: 'ASTS', desc: 'Servicios Estratégicos', img: 'https://www.gruposrs.ec/wp-content/uploads/2024/01/empresa-asts.jpg' },
            { name: 'SHAMUNA', desc: 'Industria Textil', img: 'https://www.gruposrs.ec/wp-content/uploads/2024/01/empresa-shamuna.jpg' },
            { name: 'INMO SRS', desc: 'Desarrollo Inmobiliario', img: 'https://www.gruposrs.ec/wp-content/uploads/2024/01/empresa-inmo.jpg' }
          ].map((company) => (
            <div key={company.name} className="min-w-[400px] h-[500px] relative group cursor-pointer overflow-hidden">
              <Image 
                src={company.img} 
                alt={company.name} 
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-srs-burgundy/60 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                <div className="text-white font-bold text-4xl mb-2 tracking-widest">{company.name}</div>
                <div className="text-white/80 font-light text-lg">{company.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SOSTENIBILIDAD */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] shadow-xl">
              <Image 
                src="https://www.gruposrs.ec/wp-content/uploads/2024/01/sostenibilidad-home.jpg" 
                alt="Sostenibilidad"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-srs-burgundy mb-4 uppercase tracking-tighter">Sostenibilidad y</h2>
            <h3 className="text-3xl font-light text-srs-gray mb-8">desarrollo integral</h3>
            <p className="text-lg leading-relaxed text-srs-gray-dark opacity-90 mb-10">
              Nuestro compromiso con el planeta es real. Implementamos procesos 
              industriales limpios, energías renovables y programas de responsabilidad 
              social que aseguran un futuro próspero para las próximas generaciones.
            </p>
            <button className="border border-srs-gray text-srs-gray px-10 py-4 font-bold text-sm tracking-widest hover:bg-srs-burgundy hover:text-white hover:border-srs-burgundy transition-all">
              LEER MÁS
            </button>
          </div>
        </div>
      </section>

      {/* 5. IMPACTO / INVERSIONISTAS */}
      <section className="py-32 px-6 bg-srs-light-gray">
        <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[4/3] shadow-xl">
              <Image 
                src="https://www.gruposrs.ec/wp-content/uploads/2024/01/inversionistas-home.jpg" 
                alt="Inversionistas"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-srs-burgundy mb-4 uppercase tracking-tighter">Nuestro impacto</h2>
            <h3 className="text-3xl font-light text-srs-gray mb-8">visión a largo plazo</h3>
            <p className="text-lg leading-relaxed text-srs-gray-dark opacity-90 mb-10">
              Generamos valor compartido para nuestros accionistas y socios estratégicos, 
              manteniendo una solidez financiera respaldada por décadas de crecimiento 
              sostenido y una gestión corporativa transparente.
            </p>
            <button className="border border-srs-gray text-srs-gray px-10 py-4 font-bold text-sm tracking-widest hover:bg-srs-burgundy hover:text-white hover:border-srs-burgundy transition-all">
              PORTAFOLIO
            </button>
          </div>
        </div>
      </section>

      {/* 6. ACTUALIDAD */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-bold text-srs-burgundy">Actualidad</h2>
            <button className="text-srs-burgundy font-bold border-b-2 border-srs-burgundy pb-1 text-sm tracking-widest">
              VER TODAS
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Reconocimiento a la Excelencia Industrial', cat: 'PREMIOS', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070' },
              { title: 'Nueva Alianza Estratégica Regional', cat: 'NOTICIAS', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2070' },
              { title: 'Inauguración de Planta Fotovoltaica', cat: 'SOSTENIBILIDAD', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070' }
            ].map((news, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden mb-6">
                  <Image 
                    src={news.img} 
                    alt={news.title} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="text-srs-gold font-bold text-xs tracking-widest mb-3">{news.cat}</div>
                <h3 className="text-xl font-bold text-gray-800 leading-snug group-hover:text-srs-burgundy transition-colors">
                  {news.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
