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
  const personalInfo = portfolioData?.personalInfo || {};

  const contactLinks = [
    {
      label: 'Email Directo',
      value: personalInfo.email || 'Contacto',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'WhatsApp',
      value: 'Mensaje directo',
      href: personalInfo.whatsappLink || '#',
      icon: MessageSquare,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'Perfil profesional',
      href: personalInfo.linkedin || '#',
      icon: LinkedinIcon,
      external: true,
    },
  ];

  return (
    // Cambiar id="contacto" por:
<section id="comunidad" className="py-8 sm:py-12 px-4 sm:px-8 max-w-[1400px] mx-auto">
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
            <div className="inline-flex items-center gap-2.5 bg-bg border border-line px-3.5 py-1.5 rounded-full text-xs font-bold text-text-muted shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Disponible para nuevos proyectos & alianzas</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.05] tracking-tight">
                ¿Hablamos de tu <br />
                <span className="italic text-accent font-normal">próximo proyecto?</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-text-muted font-normal leading-relaxed max-w-md">
                Escribime para evaluar consultorías, colaboraciones o propuestas educativas.
              </p>
            </div>

            {/* Descarga de CV */}
            {personalInfo.cvPdfPath && (
              <div className="pt-2">
                <a
                  href={personalInfo.cvPdfPath}
                  download="CV_Rodrigo_Gomez.pdf"
                  className="inline-flex items-center gap-3 bg-text text-bg hover:bg-accent hover:text-white px-7 py-3.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-sm w-full sm:w-auto justify-center group"
                >
                  <FileText className="w-4 h-4" />
                  <span>Descargar Perfil / CV (PDF)</span>
                </a>
              </div>
            )}
          </motion.div>

          {/* Columna Derecha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-bg/80 border border-line rounded-2xl divide-y divide-line/60 overflow-hidden shadow-sm"
          >
            {contactLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className="group flex items-center justify-between p-5 sm:p-6 hover:bg-surface/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="p-3 rounded-xl border border-line bg-surface group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent transition-all shrink-0">
                      <Icon className="w-5 h-5 text-text group-hover:text-accent" />
                    </div>
                    <div>
                      <span className="block font-sans text-[11px] uppercase tracking-wider text-accent font-bold">
                        {item.label}
                      </span>
                      <span className="block font-serif-display text-lg sm:text-2xl text-text group-hover:text-accent transition-colors mt-0.5">
                        {item.value}
                      </span>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}