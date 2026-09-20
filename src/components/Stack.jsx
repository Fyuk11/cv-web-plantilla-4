import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Stack() {
  return (
    <section id="stack" className="border-b border-line bg-bg py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Titular Principal */}
          <div>
            <h2 className="font-serifDisplay text-5xl sm:text-6xl text-text leading-[1.02]">
              Stack & <span className="italic text-accent font-normal">Herramientas</span>
            </h2>
          </div>

          {/* Grilla con esquinas superiores acentuadas con triángulos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.stack.map((group, idx) => (
              <div 
                key={idx} 
                className="relative border border-line bg-surface/20 p-8 sm:p-10 space-y-6 group hover:border-accent transition-colors duration-300"
              >
                {/* Detalle Geométrico: Triángulo Acento en la esquina superior derecha */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-t-accent border-l-[24px] border-l-transparent transition-transform group-hover:scale-125 duration-300" />

                {/* Categoría */}
                <h3 className="font-sans text-xs font-bold uppercase text-accent tracking-widest border-b border-line pb-4 pr-6">
                  {group.category}
                </h3>

                {/* Lista de Tecnologías */}
                <ul className="space-y-3 pt-2">
                  {group.items.map((item, itemIdx) => (
                    <li 
                      key={itemIdx}
                      className="font-sans text-sm sm:text-base text-text font-light flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-accent shrink-0 rounded-none" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}