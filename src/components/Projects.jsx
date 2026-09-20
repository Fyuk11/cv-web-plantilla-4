import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="proyectos" className="border-b border-line bg-bg py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Titular Serif Editorial */}
          <div>
            <h2 className="font-serifDisplay text-5xl sm:text-6xl text-text leading-[1.02]">
              Proyectos <span className="italic text-accent font-normal">Destacados</span>
            </h2>
          </div>

          {/* Grilla de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((proj) => (
              <a
                key={proj.id}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line hover:border-accent bg-surface/20 flex flex-col justify-between group transition-all duration-300 rounded-none"
              >
                <div>
                  {/* Contenedor de Imagen */}
                  <div className="h-56 bg-bg border-b border-line overflow-hidden relative">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    {/* Fallback de imagen en caso de no cargar */}
                    <div className="hidden w-full h-full items-center justify-center font-sans text-xs text-text-muted/60 p-4 text-center bg-surface/50">
                      [Vista previa no disponible]
                    </div>
                    
                    {/* Overlay de color tenue en hover */}
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Detalle del Proyecto */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serifDisplay text-2xl text-text group-hover:text-accent transition-colors">
                      {proj.title}
                    </h3>
                    <p className="font-sans text-sm text-text-muted leading-relaxed font-light">
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Footer de Tarjeta */}
                <div className="p-6 pt-0 flex items-center justify-between font-sans text-xs text-text-muted group-hover:text-text transition-colors">
                  <span className="font-mono tracking-wider text-[11px]">
                    {proj.url.replace('https://', '').replace('http://', '').replace(/\/$/, '')}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}