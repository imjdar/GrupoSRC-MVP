'use client';

import { motion } from 'framer-motion';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  { year: '1979', title: 'El inicio de un sueño', description: 'Fundación de Chova del Ecuador S.A. Una empresa del sector industrial dedicada a la manufactura y comercialización de productos de construcción y viabilidad.' },
  { year: '1987', title: 'Compra de la marca Chova', description: 'Adquisición de Chova del Ecuador S.A, convirtiéndonos en los accionistas mayoritarios de la empresa.' },
  { year: '1995', title: 'Fundación de FLOREXOT', description: 'Experiencia de aprendizaje: Emprendimos en el mercado de exportaciones, creamos Florexot, empresa exportadora de flores tropicales.' },
  { year: '1999', title: 'La creación de ASTS', description: 'Enfocados en brindar Servicios de Outsourcing ASTS apoyamos la cogestión de desarrollo humano y resultados empresariales.' },
  { year: '2003', title: 'Fundación de JARIBU ADVENTURES', description: 'Experiencia de aprendizaje: Creamos JARIBU ADVENTURES, dedicada a ecoturismo y turismo de aventura.' },
  { year: '2007', title: 'Fundación de SRS', description: 'Con el objetivo de crecer y expandirnos a otros mercados se fundó Grupo SRS, para ser el holding de proyectos exitosos e innovadores.' },
  { year: '2011', title: 'Nace Inmo SRS', description: 'Nos insertamos en el mercado de bienes raíces a través de InmoSRS para reconstruir, administrar y comercializar bienes inmuebles.' },
  { year: '2015', title: 'Shamuna marca el estilo de Ecuador', description: 'Nuestro amor por la identidad se materializó con Shamuna, una marca de streetwear con base en la moda, el arte, la naturaleza y el deporte.' },
  { year: '2023', title: 'Un legado generacional', description: 'Nuestro espíritu ávido de retos continúa motivándonos para crear proyectos que aporten al desarrollo del país.' },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-srs-burgundy mb-4">
            Nuestra Trayectoria
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Más de cuatro décadas construyendo el futuro del país a través del esfuerzo continuo y la visión estratégica.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Línea Central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-srs-burgundy/20 hidden md:block rounded-full" />

          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between mb-16 w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex-col`}
            >
              {/* Espaciador para el efecto alternado */}
              <div className="hidden md:block w-5/12" />

              {/* Punto en la línea */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-srs-burgundy border-4 border-white shadow-md z-10 hidden md:block" />

              {/* Contenido del Hito */}
              <div className="w-full md:w-5/12">
                <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 border-srs-burgundy hover:shadow-xl transition-shadow ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <span className="inline-block px-4 py-1 bg-srs-burgundy/10 text-srs-burgundy font-bold rounded-full mb-4">
                    {event.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
