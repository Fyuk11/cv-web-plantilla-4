import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Scale, Gavel } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Building2,
  ShieldCheck,
  Scale,
  Gavel,
};

export default function PracticeAreas() {
  const areas = portfolioData?.practiceAreas || [];

  return (
    <section id="especialidades" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto border-t border-line">
      
      {/* Layout Asimétrico de 2 Columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Columna Izquierda: Titular Directo (Sin etiquetas) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 space-y-4 lg:sticky lg:top-24"
        >
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-text leading-tight tracking-tight">
            Cobertura legal estratégica para empresas.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal pt-2">
            Asesoramiento integral y especializado adaptado a los desafíos comerciales y regulatorios actuales.
          </p>
        </motion.div>

        {/* Columna Derecha: Filas Horizontales con Divisores Finos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-8 border-t border-b border-line divide-y divide-line"
        >
          {areas.map((area, idx) => {
            const IconComponent = iconMap[area.icon] || Scale;

            return (
              <div 
                key={area.id || idx}
                className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start group hover:bg-surface/30 transition-colors duration-300 -mx-4 px-4 sm:mx-0 sm:px-0"
              >
                {/* Número + Ícono */}
                <div className="sm:col-span-2 flex items-center justify-between sm:justify-start gap-4">
                  <span className="font-serif-display italic text-accent text-2xl sm:text-3xl font-medium">
                    0{idx + 1}.
                  </span>
                  <IconComponent className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                </div>

                {/* Título de la Especialidad */}
                <div className="sm:col-span-4">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-text leading-snug group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>
                </div>

                {/* Descripción */}
                <div className="sm:col-span-6">
                  <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>

    </section>
  );
}