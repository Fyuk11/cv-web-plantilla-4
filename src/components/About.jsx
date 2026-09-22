import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const about = portfolioData?.about || {};

  return (
    <section id="filosofia" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto border-t border-line">
      
      {/* Grid Editorial Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Columna Izquierda: Titular de Gran Formato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl text-text leading-[1.02] tracking-tight">
            {about.headingMain || "Rigor jurídico,"} <br />
            <span className="italic text-accent font-normal">
              {about.headingSub || "visión estratégica."}
            </span>
          </h2>

          {about.subtitle && (
            <p className="font-serif-display italic text-lg sm:text-xl text-text-muted leading-relaxed">
              "{about.subtitle}"
            </p>
          )}
        </motion.div>

        {/* Columna Derecha: Manifiesto + Pilares Numerados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 space-y-12"
        >
          {/* Cita de impacto con barra de acento vertical */}
          <div className="border-l-2 border-accent pl-6 sm:pl-8 py-1">
            <p className="font-sans text-lg sm:text-xl text-text leading-relaxed font-normal">
              {about.text || "Nos enfocamos en brindar soluciones jurídicas integrales diseñadas para proteger y potenciar empresas, startups y marcas de alto impacto, combinando excelencia técnica con una profunda comprensión del entorno comercial."}
            </p>
          </div>

          {/* Pilares Estratégicos (Desplegados con líneas y números 01, 02, 03 - Sin Cajas) */}
          {about.values && about.values.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-line">
              {about.values.map((item, index) => (
                <div key={index} className="space-y-3">
                  <span className="font-serif-display italic text-accent text-2xl sm:text-3xl font-medium block">
                    0{index + 1}.
                  </span>
                  <h3 className="font-sans text-xs font-bold text-text uppercase tracking-widest">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}