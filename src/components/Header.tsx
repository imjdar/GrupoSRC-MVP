'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INICIO', href: '/' },
    { name: 'EL GRUPO', href: '/el-grupo' },
    { name: 'PORTAFOLIO', href: '/portafolio' },
    { name: 'ACTUALIDAD', href: '/actualidad' },
    { name: 'CONTACTO', href: '/contacto' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 h-24 flex items-center ${
        isScrolled || pathname !== '/' ? 'bg-srs-burgundy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-white tracking-widest">
            SRS <span className="font-light text-sm block -mt-1">GRUPO EMPRESARIAL</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`text-[14px] font-bold tracking-widest transition-colors ${
                pathname === item.href || (item.href === '/' && pathname === '/') 
                  ? 'text-srs-gold' 
                  : 'text-white hover:text-srs-gold'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
