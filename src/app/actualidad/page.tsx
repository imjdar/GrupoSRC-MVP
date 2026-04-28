import Image from 'next/image';

export default function Actualidad() {
  const noticias = [
    {
      title: "Imptek obtiene certificación Carbono Neutro",
      date: "15 Octubre, 2023",
      category: "Sostenibilidad",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070"
    },
    {
      title: "Nuevo centro logístico de Grupo SRS en Guayaquil",
      date: "28 Septiembre, 2023",
      category: "Corporativo",
      image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2070"
    },
    {
      title: "Shamuna presenta su nueva colección ecológica",
      date: "10 Septiembre, 2023",
      category: "Innovación",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070"
    }
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-srs-burgundy mb-4">
          Actualidad
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Mantente informado sobre las últimas noticias, premios e hitos importantes de las empresas que conforman nuestro holding.
        </p>

        {/* Filtros (Placeholder UI) */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button className="px-6 py-2 bg-srs-burgundy text-white rounded-full font-semibold">Todas</button>
          <button className="px-6 py-2 bg-white text-gray-600 border border-gray-300 rounded-full hover:border-srs-burgundy hover:text-srs-burgundy transition-colors">Corporativo</button>
          <button className="px-6 py-2 bg-white text-gray-600 border border-gray-300 rounded-full hover:border-srs-burgundy hover:text-srs-burgundy transition-colors">Sostenibilidad</button>
        </div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-60 overflow-hidden">
                <Image 
                  src={noticia.image} 
                  alt={noticia.title} 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-bold text-srs-burgundy z-10">
                  {noticia.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-3">{noticia.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-srs-burgundy transition-colors line-clamp-2">
                  {noticia.title}
                </h3>
                <p className="text-srs-burgundy font-semibold text-sm">Leer más →</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
