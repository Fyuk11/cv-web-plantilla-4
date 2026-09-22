import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Scale, Building2, MessageCircle, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo, contact } = portfolioData;
  const [imgError, setImgError] = useState(false);

  // Mensaje automático para agendamiento directo por WhatsApp
  const whatsappMessage = encodeURIComponent("Hola, me gustaría agendar una consulta profesional.");
  const whatsappUrl = contact?.whatsapp 
    ? `${contact.whatsapp}${contact.whatsapp.includes('?') ? '&' : '?'}text=${whatsappMessage}` 
    : '#contacto';

  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts.slice(0, 1).join(' ');
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Columna Izquierda: Presentación Editorial + CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Headline & Copy Principal */}
          <div className="space-y-6">
            <h1 className="font-serif-display text-5xl sm:text-7xl xl:text-8xl text-text leading-[0.92] tracking-tight">
              {firstName} <br />
              <span className="italic text-accent font-normal">
                {lastName}
              </span>
            </h1>

            <p className="font-sans text-xl sm:text-2xl font-medium text-text leading-snug max-w-xl">
              {personalInfo.title}
            </p>

            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-xl font-normal">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Acciones de Agendamiento & Contacto Directo */}
          <div className="pt-6 border-t border-line space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-7 py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Consulta</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 border border-line hover:border-accent text-text px-7 py-4 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Ver Contacto</span>
              </a>
            </div>

            {/* Ubicación / Cobertura */}
            <div className="flex items-center gap-2 text-xs font-medium text-text-muted">
              <Building2 className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Columna Derecha: Retrato Oficial & Métricas de Autoridad */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col justify-between gap-8"
        >
          {/* Fotografía Institucional con formato más alto (Vertical Editorial) */}
          <div className="relative aspect-[3/4] sm:aspect-[3/4] lg:aspect-[2/3] w-full max-h-[580px] rounded-2xl overflow-hidden bg-surface border border-line group">
            {!imgError ? (
              <img
                src={personalInfo.avatarUrl || "/profile.png"}
                alt={personalInfo.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            ) : (
              <div className="w-full h-full flex flex-col justify-center items-center text-center p-6 text-text-muted font-sans text-xs">
                <Scale className="w-10 h-10 text-accent mb-3" />
                <span className="font-semibold text-text">{personalInfo.name}</span>
                <span className="mt-1 text-[11px] opacity-70">{personalInfo.title}</span>
              </div>
            )}

            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 pointer-events-none" />

            {/* Leyenda sobria integrada */}
            <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end text-white/90">
              <span className="font-serif-display italic text-sm sm:text-base tracking-wide">Socio Principal</span>
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-75">Firma Legal</span>
            </div>
          </div>

          {/* Métricas de Experiencia */}
          {personalInfo.about?.stats && (
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-line">
              {personalInfo.about.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block font-serif-display italic text-3xl sm:text-4xl text-accent font-semibold leading-none">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-bold text-text-muted uppercase tracking-wider leading-tight pt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
}