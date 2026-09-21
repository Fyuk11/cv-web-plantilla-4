import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-line bg-surface/30 mt-16 sm:mt-24 relative overflow-hidden">
      {/* Trama tenue de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16 pb-8 relative z-10 space-y-10">
        
        {/* Bloque Superior: Marca / Mensaje de Cierre & Botón Volver Arriba */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-10 border-b border-line/60">
          
          <div className="space-y-3 max-w-xl">
            <span className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-text tracking-tight block">
              Rodrigo <span className="italic text-accent font-normal">Gómez</span>
            </span>
            <p className="font-sans text-xs sm:text-sm text-text-muted font-normal leading-relaxed">
              Creator, Educator & Community Lead · Impulsando proyectos digitales, cultura de comunidad y educación respetuosa desde Buenos Aires, Argentina.
            </p>
          </div>

          {/* Botón Volver Arriba */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2.5 border border-line bg-bg hover:border-accent/60 hover:text-accent text-text px-6 py-3 rounded-full font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-sm group shrink-0"
            title="Volver arriba"
          >
            <span>Volver Arriba</span>
            <div className="w-6 h-6 rounded-full bg-surface border border-line flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-accent group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

        </div>

        {/* Bloque Inferior: Copyright & Créditos */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-text-muted font-normal">
          <p>© {new Date().getFullYear()} Rodrigo Gómez. Todos los derechos reservados.</p>
          <p>
            Construido con <span className="text-text font-bold">React</span>, <span className="text-text font-bold">Tailwind CSS</span> &amp; <span className="text-accent font-bold">Framer Motion</span>.
          </p>
        </div>

      </div>
    </footer>
  );
}