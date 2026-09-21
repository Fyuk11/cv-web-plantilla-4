import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const experienceData = portfolioData?.experience || [];

  return (
    // Cambiar id="experiencia" por:
<section id="trayectoria" className="py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto">
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
            className="space-y-4 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-bg border border-line px-3.5 py-1.5 rounded-full text-xs font-bold text-accent shadow-sm">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Trayectoria & Experiencia</span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.05] tracking-tight">
              Recorrido, proyectos & <br />
              <span className="italic text-accent font-normal">roles desempeñados.</span>
            </h2>
          </motion.div>

          {/* Línea Temporal */}
          <div className="relative border-l border-line/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8 sm:space-y-10">
            {experienceData.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group bg-bg/60 border border-line rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-colors duration-300 shadow-sm"
              >
                {/* Indicador de Línea Temporal */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-8 w-4 h-4 rounded-full bg-surface border-2 border-line group-hover:border-accent group-hover:bg-accent transition-colors duration-300 shadow-sm" />

                {/* Header del Rol */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line/60 pb-4 mb-4">
                  <div>
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-text leading-tight">
                      {exp.role}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-accent block mt-1">
                      {exp.company}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-surface border border-line px-3 py-1 rounded-full text-[11px] font-bold text-text-muted shrink-0 self-start sm:self-center">
                    <Calendar className="w-3 h-3 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Viñetas */}
                <ul className="space-y-2.5 pt-1">
                  {exp.bullets && exp.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}