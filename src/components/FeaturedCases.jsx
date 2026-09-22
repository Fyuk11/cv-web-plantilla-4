import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedCases() {
  // Soporte para featuredCases o fallback a projects
  const cases = portfolioData?.featuredCases || portfolioData?.projects || [];

  return (
    <section id="casos" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto border-t border-line">
      
      {/* Encabezado Editorial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20"
      >
        <div className="space-y-4 max-w-2xl">
          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-text leading-[1.02] tracking-tight">
            Casos representativos & <br />
            <span className="italic text-accent font-normal">operaciones clave.</span>
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-text-muted max-w-xs font-normal">
          Selección de mandatos corporativos, transacciones transfronterizas y defensas estratégicas llevadas a cabo con éxito.
        </p>
      </motion.div>

      {/* Grilla Editorial Abierta (3 Columnas) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
        {cases.map((item, idx) => (
          <motion.div
            key={item.id || idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="border-t border-line pt-6 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              {/* Número y Categoría en línea */}
              <div className="flex items-baseline justify-between border-b border-line/60 pb-3">
                <span className="font-serif-display italic text-accent text-2xl sm:text-3xl font-medium">
                  0{idx + 1}.
                </span>
                {item.category && (
                  <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted">
                    {item.category}
                  </span>
                )}
              </div>

              {/* Título */}
              <h3 className="font-serif-display text-2xl text-text group-hover:text-accent transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Resumen / Descripción */}
              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                {item.summary || item.description}
              </p>

              {/* Impacto destacado con barra vertical de acento */}
              {item.impact && (
                <div className="border-l-2 border-accent pl-4 py-1 my-2">
                  <p className="font-sans text-xs font-medium text-text leading-relaxed">
                    {item.impact}
                  </p>
                </div>
              )}
            </div>

            {/* Tags e Indicador de Acción */}
            <div className="pt-4 border-t border-line/40 space-y-4">
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-[10px] font-mono text-text-muted/80 uppercase tracking-wider"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {item.linkText && (
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}