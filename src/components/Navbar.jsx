import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Especialidades', href: '#stack' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Trayectoria', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Monograma Editorial */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="w-3 h-3 bg-accent rounded-none group-hover:scale-125 transition-transform" />
          <span className="font-serifDisplay italic text-2xl sm:text-3xl tracking-tight text-text">
            Rodrigo Gómez
          </span>
          <span className="hidden sm:inline-block font-sans text-[10px] tracking-widest uppercase opacity-50 border-l border-line pl-3">
            STUDIO 2026
          </span>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="h-full flex items-center px-6 font-sans text-xs tracking-wider uppercase text-text/80 hover:text-accent hover:bg-surface/50 border-r border-line/40 transition-all duration-200"
            >
              <span>{link.name}</span>
            </a>
          ))}

          <div className="flex items-center gap-4 pl-6">
            <ThemeToggle />
            <a
              href={portfolioData.personalInfo.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-text bg-text text-bg px-4 py-2 text-xs font-sans font-semibold tracking-wider uppercase rounded-none hover:bg-accent hover:border-accent hover:text-white transition-colors"
            >
              <span>CV Editorial</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </nav>

        {/* Trigger Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border border-text bg-bg text-text rounded-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Drawer Mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-line bg-bg px-6 py-8 space-y-4 font-sans text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between text-text uppercase tracking-widest py-3 border-b border-line/30 hover:text-accent transition-colors"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 text-text-muted" />
            </a>
          ))}
          <a
            href={portfolioData.personalInfo.cvPdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-text bg-text text-bg py-3 text-xs uppercase font-bold tracking-widest mt-4 rounded-none"
          >
            <span>Descargar CV (PDF)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}