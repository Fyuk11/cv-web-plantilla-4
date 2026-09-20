import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-line bg-bg py-12">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-line/60">
          
          {/* Identidad de Footer */}
          <div className="space-y-1">
            <span className="font-serifDisplay text-2xl text-text tracking-tight">
              Rodrigo <span className="italic text-accent font-normal">Gómez</span>
            </span>
            <p className="font-sans text-xs text-text-muted font-light">
              Front-End Developer (AI-Assisted) · Buenos Aires, Argentina
            </p>
          </div>

          {/* Botón Volver Arriba */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 border border-line bg-surface/20 hover:border-accent hover:text-accent text-text px-5 py-3 font-sans text-xs uppercase tracking-widest transition-colors rounded-none"
              title="Volver arriba"
            >
              <span>Volver Arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright y Créditos */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-text-muted font-light">
          <p>© {new Date().getFullYear()} Rodrigo Gómez. Todos los derechos reservados.</p>
          <p>
            Construido con <span className="text-text font-normal">React</span>, <span className="text-text font-normal">Tailwind CSS</span> &amp; <span className="text-accent font-medium">Cursor AI</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}