import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, FileText, ArrowUpRight, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function LinkedinIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const personalInfo = portfolioData?.personalInfo || {};
  const name = personalInfo.name || personalInfo.fullName || 'Dr. Julián Benítez';
  const email = personalInfo.email || 'j.benitez@estudio-benitez.com';

  // Mensaje prearmado para WhatsApp (Formato Argentina 54 9 + número)
  const phone = '5491121652703';
  const defaultMessage = encodeURIComponent('Hola Dr. Julián Benítez, quisiera realizar una consulta profesional.');
  const whatsappUrl = personalInfo.whatsappLink || `https://wa.me/${phone}?text=${defaultMessage}`;
  const linkedinUrl = personalInfo.linkedin || 'https://www.linkedin.com';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacto" className="py-12 sm:py-20 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div className="bg-surface border border-line rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden">
        
        {/* Trama de fondo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>Disponible para consultas corporativas</span>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-text leading-[1.05] tracking-tight">
                Iniciemos la <br />
                <span className="italic text-accent font-normal">conversación.</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-text-muted font-normal leading-relaxed max-w-md">
                Coordinemos una reunión inicial para evaluar asuntos corporativos, propiedad intelectual o representación legal estratégica.
              </p>
            </div>

            {/* Descarga de CV */}
            {personalInfo.cvPdfPath && (
              <div className="pt-2">
                <a
                  href={personalInfo.cvPdfPath}
                  download={`Perfil_Profesional_${name.replace(/\s+/g, '_')}.pdf`}
                  className="inline-flex items-center gap-3 bg-text text-bg hover:bg-accent hover:text-white px-7 py-3.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-sm w-full sm:w-auto justify-center group"
                >
                  <FileText className="w-4 h-4" />
                  <span>Descargar Perfil Profesional (PDF)</span>
                </a>
              </div>
            )}
          </motion.div>

          {/* Columna Derecha: Opciones de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-bg/80 border border-line rounded-2xl divide-y divide-line/60 overflow-hidden shadow-sm"
          >
            {/* 1. Opción Copiar Email */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full text-left group flex items-center justify-between p-5 sm:p-6 hover:bg-surface/60 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="p-3 rounded-xl border border-line bg-surface group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent transition-all shrink-0">
                  <Mail className="w-5 h-5 text-text group-hover:text-accent" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-accent font-bold">
                    Email Directo (Haz clic para copiar)
                  </span>
                  <span className="block font-serif-display text-base sm:text-xl text-text group-hover:text-accent transition-colors mt-0.5">
                    {email}
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shrink-0">
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                )}
              </div>
            </button>

            {/* 2. Opción WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 sm:p-6 hover:bg-surface/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="p-3 rounded-xl border border-line bg-surface group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent transition-all shrink-0">
                  <MessageSquare className="w-5 h-5 text-text group-hover:text-accent" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-accent font-bold">
                    WhatsApp
                  </span>
                  <span className="block font-serif-display text-lg sm:text-2xl text-text group-hover:text-accent transition-colors mt-0.5">
                    Iniciar chat directo
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shrink-0">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* 3. Opción LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 sm:p-6 hover:bg-surface/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="p-3 rounded-xl border border-line bg-surface group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent transition-all shrink-0">
                  <LinkedinIcon className="w-5 h-5 text-text group-hover:text-accent" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-accent font-bold">
                    LinkedIn
                  </span>
                  <span className="block font-serif-display text-lg sm:text-2xl text-text group-hover:text-accent transition-colors mt-0.5">
                    Perfil institucional
                  </span>
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shrink-0">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}