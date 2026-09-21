import { motion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const about = portfolioData?.about || {};

  return (
    // Cambiar id="sobre-mi" por:
<section id="filosofia" className="py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div className="bg-surface border border-line rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden">
        
        {/* Trama orgánica de fondo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Columna Izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-bg border border-line px-3.5 py-1.5 rounded-full text-xs font-bold text-accent shadow-sm">
              <Compass className="w-3.5 h-3.5" />
              <span>{about.title || "Manifiesto & Filosofía"}</span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.05] tracking-tight">
              Relaciones genuinas, <br />
              <span className="italic text-accent font-normal">no solo seguidores.</span>
            </h2>

            {about.subtitle && (
              <p className="font-serif-display italic text-lg sm:text-xl text-text-muted leading-relaxed pt-2">
                "{about.subtitle}"
              </p>
            )}
          </motion.div>

          {/* Columna Derecha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-bg/80 border border-line rounded-2xl p-6 sm:p-8 shadow-sm">
              <p className="font-sans text-base sm:text-lg text-text leading-relaxed font-normal">
                {about.text}
              </p>
            </div>

            {about.values && about.values.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {about.values.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-bg/50 border border-line rounded-2xl p-5 hover:border-accent/50 transition-colors duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-3">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h3 className="font-sans text-sm font-bold text-text mb-1.5">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}