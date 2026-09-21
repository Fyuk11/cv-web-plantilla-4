import { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Pilares', href: '#pilares' },
    { name: 'Programas', href: '#programas' },
    { name: 'Trayectoria', href: '#trayectoria' },
    { name: 'Comunidad', href: '#comunidad' },
  ];

  const primaryActionUrl = portfolioData?.personalInfo?.skoolUrl || portfolioData?.personalInfo?.whatsappLink || '#contacto';

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-8 max-w-[1400px] mx-auto">
      {/* Píldora Flotante Principal */}
      <div className="bg-surface/85 backdrop-blur-md border border-line shadow-md hover:shadow-lg rounded-full px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Isotipo & Marca */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent font-serif-display text-lg font-bold transition-transform group-hover:scale-105">
            RG
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display italic text-xl sm:text-2xl font-semibold leading-none text-text">
              {portfolioData?.personalInfo?.name || "Rodrigo Gómez"}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-sans text-text-muted tracking-wider uppercase mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Community Architect
            </span>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center gap-1 bg-bg/60 border border-line/60 rounded-full px-3 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-text-muted hover:text-text hover:bg-surface transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Acciones Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={primaryActionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unirme a Skool</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Trigger Mobile */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-full border border-line bg-surface text-text shadow-sm hover:border-accent transition-colors"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {isMenuOpen && (
        <div className="sm:hidden mt-2 bg-surface/95 backdrop-blur-xl border border-line rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between text-text text-sm font-semibold py-3 px-4 rounded-2xl hover:bg-surface-hover hover:text-accent transition-all"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-text-muted" />
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-line space-y-2">
            <a
              href={primaryActionUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Unirme a Skool</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            {portfolioData?.personalInfo?.cvPdfPath && (
              <a
                href={portfolioData.personalInfo.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full border border-line bg-surface text-text-muted hover:text-text py-2.5 rounded-full text-xs font-semibold tracking-wide transition-colors"
              >
                <span>Ver CV (PDF)</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}