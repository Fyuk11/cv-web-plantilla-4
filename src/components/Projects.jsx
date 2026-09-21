import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderKanban, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const projectsData = portfolioData?.projects || [];
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    // Cambiar id="proyectos" por:
<section id="programas" className="py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div className="bg-surface border border-line rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden">
        
        {/* Trama orgánica de fondo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="relative z-10 space-y-8 sm:space-y-12">
          
          {/* Header de Sección */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-bg border border-line px-3.5 py-1.5 rounded-full text-xs font-bold text-accent shadow-sm">
                <FolderKanban className="w-3.5 h-3.5" />
                <span>Programas & Proyectos</span>
              </div>

              <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.05] tracking-tight">
                Iniciativas clave & <br />
                <span className="italic text-accent font-normal">experiencias de impacto.</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-text-muted max-w-xs font-normal">
              Soluciones estructuradas, formación continua y recursos diseñados para potenciar el aprendizaje y la transformación.
            </p>
          </motion.div>

          {/* Grilla de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((proj, idx) => {
              const hasImage = proj.image && !failedImages[idx];

              return (
                <motion.a
                  key={proj.id || idx}
                  href={proj.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-bg/80 border border-line rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-300 shadow-sm flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Contenedor de Imagen o Fallback */}
                    <div className="h-52 bg-surface border-b border-line overflow-hidden relative">
                      {hasImage ? (
                        <img
                          src={proj.image}
                          alt={proj.title}
                          onError={() => handleImageError(idx)}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center font-sans text-xs text-text-muted/70 p-6 text-center bg-surface/80 gap-2">
                          <Sparkles className="w-5 h-5 text-accent/60" />
                          <span>{proj.title}</span>
                        </div>
                      )}

                      {/* Tag de Categoría */}
                      {proj.category && (
                        <div className="absolute top-3 left-3 bg-neutral-900/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider shadow-md z-10">
                          {proj.category}
                        </div>
                      )}

                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Contenido Editorial */}
                    <div className="p-6 space-y-3">
                      <h3 className="font-serif-display text-2xl text-text group-hover:text-accent transition-colors leading-tight">
                        {proj.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                        {proj.description}
                      </p>

                      {proj.tags && proj.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {proj.tags.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx}
                              className="bg-surface text-text-muted border border-line/60 px-2.5 py-0.5 rounded-full text-[10px] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer de Tarjeta */}
                  <div className="px-6 pb-6 pt-3 flex items-center justify-between font-sans text-xs font-semibold text-text-muted border-t border-line/40 mx-6 mt-2">
                    <span className="truncate max-w-[180px] text-[11px] font-mono text-text-muted">
                      {proj.url ? proj.url.replace('https://', '').replace('http://', '').replace(/\/$/, '') : 'Ver detalle'}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-surface border border-line flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}