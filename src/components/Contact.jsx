import { motion } from 'framer-motion';
import { Mail, MessageSquare, FileText, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function LinkedinIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export default function Contact() {
  const { personalInfo } = portfolioData;

  const contactLinks = [
    {
      label: 'Email Directo',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'WhatsApp',
      value: 'Mensaje directo',
      href: personalInfo.whatsappLink,
      icon: MessageSquare,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'Perfil profesional',
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
      external: true,
    },
  ];

  return (
    <section id="contacto" className="border-b border-line bg-bg py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Columna Izquierda: Mensaje & Status de Disponibilidad */}
          <div className="lg:col-span-5 space-y-8">
            {/* Indicador de Disponibilidad */}
            <div className="inline-flex items-center gap-2.5 border border-line bg-surface/30 px-3.5 py-1.5 font-sans text-xs text-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Disponible para nuevos proyectos</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-serifDisplay text-5xl sm:text-6xl text-text leading-[0.98]">
                ¿Hablamos de tu <br />
                <span className="italic text-accent font-normal">próximo proyecto?</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-md">
                Escribime para evaluar propuestas, ideas o vacantes. Suelo responder en el mismo día.
              </p>
            </div>

            {/* Descarga de CV integrada como Botón Principal */}
            <div className="pt-4">
              <a
                href={personalInfo.cvPdfPath}
                download="CV_Rodrigo_Gomez.pdf"
                className="group relative inline-flex items-center gap-3 bg-text text-bg px-8 py-4 font-sans text-xs uppercase tracking-widest font-bold rounded-none hover:bg-accent hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>Descargar CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Canales de Contacto en Filas Editoriales */}
          <div className="lg:col-span-7 border border-line divide-y divide-line bg-surface/10">
            {contactLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className="group flex items-center justify-between p-6 sm:p-8 hover:bg-surface/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-3 border border-line/60 bg-bg group-hover:border-accent group-hover:text-accent transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-sans text-xs uppercase tracking-widest text-text-muted font-semibold">
                        {item.label}
                      </span>
                      <span className="block font-serifDisplay text-xl sm:text-2xl text-text group-hover:text-accent transition-colors mt-0.5">
                        {item.value}
                      </span>
                    </div>
                  </div>

                  <div className="border border-line bg-bg p-2.5 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
}