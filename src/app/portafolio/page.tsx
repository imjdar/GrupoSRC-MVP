import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Portafolio() {
  const projects = [
    {
      title: 'Soluciones Viales Sostenibles',
      description: 'Lideramos la industria de impermeabilización y vialidad con productos de alta tecnología y bajo impacto ambiental.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2070',
      company: 'IMPTEK',
      link: 'https://www.gruposrs.ec/imptek/'
    },
    {
      title: 'Desarrollo Urbano Responsable',
      description: 'Creamos espacios de vida que integran arquitectura moderna con el respeto por el entorno natural.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      company: 'INMO SRS',
      link: 'https://www.gruposrs.ec/inmosrs/'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-srs-burgundy text-white pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestro Portafolio</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 font-light">
            Diversificación estratégica en sectores clave para el desarrollo del Ecuador.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 space-y-32">
          {projects.map((project, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 group`}>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-video overflow-hidden shadow-2xl rounded-sm">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2">
                <div className="text-srs-gold font-bold tracking-widest text-sm mb-4">{project.company}</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-srs-burgundy font-bold text-lg hover:text-srs-gold transition-colors"
                >
                  CONOCER MÁS <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
