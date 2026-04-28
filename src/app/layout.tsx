import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Grupo SRS | Liderazgo con Propósito",
  description: "Holding empresarial ecuatoriano con presencia en diversos sectores industriales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${playfair.variable} font-montserrat antialiased`}>
        <Header />
        
        <main>
          {children}
        </main>

        {/* Footer Identico */}
        <footer className="bg-srs-burgundy text-white py-16">
          <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-3xl font-bold tracking-widest mb-6">SRS</div>
              <div className="text-sm space-y-2 opacity-80">
                <p>Quito - Ecuador</p>
                <p>Av. Amazonas N34-451 y Atahualpa</p>
                <p>Edificio Centro de Negocios Amazonas,</p>
                <p>Piso 8.</p>
                <p className="mt-4">+593 2 243 0180</p>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="font-bold text-lg mb-2">MAPA DEL SITIO</h4>
              <Link href="/el-grupo" className="hover:text-srs-gold transition-colors">El grupo</Link>
              <Link href="/portafolio" className="hover:text-srs-gold transition-colors">Portafolio</Link>
              <Link href="/actualidad" className="hover:text-srs-gold transition-colors">Actualidad</Link>
              <Link href="/contacto" className="hover:text-srs-gold transition-colors">Contacto</Link>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-widest">Suscríbete a nuestro boletín</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="CORREO ELECTRÓNICO" 
                  className="bg-transparent border border-white/30 px-4 py-3 w-full focus:outline-none placeholder:text-white/50 text-sm"
                />
                <button className="bg-srs-gold text-white px-6 py-3 font-bold text-xs tracking-widest whitespace-nowrap hover:bg-white hover:text-srs-burgundy transition-all">
                  SUSCRÍBEME
                </button>
              </div>
              <div className="flex space-x-4 mt-8">
                {/* Social icons would go here */}
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-srs-burgundy cursor-pointer transition-all">in</div>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-srs-burgundy cursor-pointer transition-all">fb</div>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-srs-burgundy cursor-pointer transition-all">ig</div>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-10 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-[11px] tracking-widest opacity-60">
            <p>© 2024 SRS GRUPO EMPRESARIAL - TODOS LOS DERECHOS RESERVADOS</p>
            <p>DISEÑADO POR GRUPO SRS</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
