import { useState } from 'react';
import { Scale, Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Casos', href: '#casos' },
    { name: 'Trayectoria', href: '#trayectoria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const primaryActionUrl = portfolioData?.contact?.calendlyUrl || portfolioData?.contact?.whatsapp || '#contacto';

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur-md border-b border-line shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo Corporativo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            <Scale className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display text-xl font-bold tracking-wide text-text leading-none">
              {portfolioData?.personalInfo?.name || "Dr. Julián Benítez"}
            </span>
            <span className="text-[10px] font-sans text-text-muted tracking-widest uppercase mt-1">
              {portfolioData?.personalInfo?.credential || "Consultoría Legal"}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-widest uppercase text-text-muted hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={primaryActionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-lg transition-all shadow-sm hover:shadow-md hover:scale-105"
          >
            <span>Agendar Consulta</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-lg border border-line bg-surface text-text shadow-sm hover:border-accent transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-surface border-b border-line px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between text-text text-xs uppercase tracking-wider font-semibold py-2 border-b border-line/40 hover:text-accent transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-text-muted" />
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href={primaryActionUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg text-xs font-bold tracking-wider uppercase shadow-md transition-all"
            >
              <span>Agendar Consulta</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}