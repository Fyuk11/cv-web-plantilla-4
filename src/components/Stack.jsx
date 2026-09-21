import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Stack() {
  const stackData = portfolioData?.stack || [];

  return (
    // Cambiar id="stack" por:
<section id="pilares" className="py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto">
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
            className="max-w-2xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-bg border border-line px-3.5 py-1.5 rounded-full text-xs font-bold text-accent shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>Especialidades & Herramientas</span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.05] tracking-tight">
              Pilares de trabajo & <br />
              <span className="italic text-accent font-normal">metodología clave.</span>
            </h2>
          </motion.div>

          {/* Grilla de Categorías */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stackData.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-bg/80 border border-line rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 shadow-sm relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
                    <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-accent">
                      {group.category}
                    </h3>
                    <span className="text-[10px] font-bold text-text-muted bg-surface px-2.5 py-1 rounded-full border border-line">
                      0{idx + 1}
                    </span>
                  </div>

                  <ul className="space-y-3.5">
                    {group.items?.map((item, itemIdx) => (
                      <li 
                        key={itemIdx}
                        className="font-sans text-sm text-text font-medium flex items-center gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span>{typeof item === 'string' ? item : item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}