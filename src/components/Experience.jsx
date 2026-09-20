import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experiencia" className="border-b border-line bg-bg py-20 lg:py-28">
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
              Experiencia <span className="italic text-accent font-normal">Profesional</span>
            </h2>
          </div>

          {/* Línea Temporal Editorial */}
          <div className="space-y-10 relative border-l border-line ml-3 sm:ml-4 pl-6 sm:pl-10">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="relative space-y-3 group">
                {/* Viñeta cuadrada en la línea */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 bg-bg border border-line group-hover:border-accent group-hover:bg-accent transition-colors duration-300 rounded-none" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-line/40 pb-3">
                  <h3 className="font-serifDisplay text-2xl text-text">
                    {exp.role}{' '}
                    <span className="font-sans text-base text-accent font-light">
                      — {exp.company}
                    </span>
                  </h3>
                  <span className="font-sans text-xs uppercase tracking-wider text-text-muted font-medium">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 pt-2">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="font-sans text-sm sm:text-base text-text-muted leading-relaxed font-light flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-accent/60 shrink-0 mt-2 rounded-none" />
                      <span>{bullet}</span>
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