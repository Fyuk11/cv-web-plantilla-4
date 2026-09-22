import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Career() {
  const careerData = portfolioData?.career || portfolioData?.experience || [];

  return (
    <div id="trayectoria" className="relative w-full my-16 sm:my-24">
      
      {/* 1. CORTE EN DIAGONAL (Base 100% continua que conecta sin huecos) */}
      <div className="w-full overflow-hidden leading-none text-surface pointer-events-none">
        <svg 
          className="relative block w-full h-12 sm:h-20 text-surface fill-current" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Diagonal limpia desde la izquierda hacia la derecha unida a la base */}
          <path d="M0 120 L1200 0 L1200 120 Z"></path>
        </svg>
      </div>

      {/* 2. FRANJA DE CONTRASTE ESTÉTICA */}
      <section className="w-full bg-surface border-b border-line py-12 sm:py-20 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Columna Izquierda: Encabezado Ejecutivo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                    Trayectoria & Acreditaciones
                  </span>
                </div>
                
                <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-text leading-[1.08] tracking-tight">
                  Experiencia consolidada en firmas y corporaciones.
                </h2>
              </div>

              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed font-normal pt-4 border-t border-line">
                Un recorrido enfocado en el derecho corporativo, la propiedad intelectual y la consultoría estratégica para negocios de alto impacto.
              </p>

              {/* Métricas destacadas */}
              <div className="pt-2 flex items-center gap-8 text-text-muted">
                <div>
                  <span className="font-serif-display text-3xl text-accent font-bold block">+12</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Años de práctica</span>
                </div>
                <div className="w-[1px] h-8 bg-line" />
                <div>
                  <span className="font-serif-display text-3xl text-text font-bold block">Top Tier</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Firmas & Consultoría</span>
                </div>
              </div>
            </motion.div>

            {/* Columna Derecha: Timeline limpia con nodos de doble anillo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 relative pl-8 sm:pl-10 border-l-2 border-accent/40 space-y-10 sm:space-y-12 my-2"
            >
              {careerData.map((item, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Nodo conector */}
                  <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-accent group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-bg transition-colors" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest block">
                      {item.period}
                    </span>
                    
                    <h3 className="font-serif-display text-2xl text-text group-hover:text-accent transition-colors leading-snug">
                      {item.role}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm font-semibold text-text-muted">
                      {item.institution || item.company}
                    </p>
                    
                    {item.description && (
                      <p className="font-sans text-xs sm:text-sm text-text-muted/80 leading-relaxed font-normal pt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}