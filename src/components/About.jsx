import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="sobre-mi" className="border-b border-line bg-bg py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Grilla de Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Titular Serif */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="font-serifDisplay text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.02]">
              Diseño, código & <br />
              <span className="italic text-accent font-normal">criterio editorial.</span>
            </h2>
          </motion.div>

          {/* Columna Derecha: Box Principal y Métricas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Box Principal con Texto */}
            <div className="border border-line bg-surface/20 p-8 sm:p-10 relative group hover:border-accent/60 transition-colors">
              <p className="font-sans text-base sm:text-lg text-text leading-relaxed font-light">
                {about.text}
              </p>
            </div>

            {/* Fila de Especificaciones Técnicas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-sans text-xs">
              <div className="border border-line/60 p-4 bg-bg">
                <span className="block text-accent text-[11px] uppercase tracking-wider font-semibold">MODO</span>
                <span className="block text-text font-medium mt-1">AI-Assisted</span>
              </div>
              <div className="border border-line/60 p-4 bg-bg">
                <span className="block text-accent text-[11px] uppercase tracking-wider font-semibold">ENTREGA</span>
                <span className="block text-text font-medium mt-1">Rápida & Pulida</span>
              </div>
              <div className="border border-line/60 p-4 bg-bg col-span-2 sm:col-span-1">
                <span className="block text-accent text-[11px] uppercase tracking-wider font-semibold">ENFOQUE</span>
                <span className="block text-text font-medium mt-1">Clean Code</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}