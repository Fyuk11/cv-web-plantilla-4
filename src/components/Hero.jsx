import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Users, Trophy, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-6 sm:py-10 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Columna Izquierda: Copy + Call To Actions + Active Challenge Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-surface border border-line rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-sm relative overflow-hidden"
        >
          {/* Trama orgánica de fondo */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Header Badge: Active Challenge Status */}
          {personalInfo.activeChallenge && (
            <div className="relative z-10 self-start inline-flex items-center gap-2.5 bg-bg border border-line px-4 py-2 rounded-full mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-text tracking-wide uppercase">
                {personalInfo.activeChallenge.status}:
              </span>
              <span className="text-xs text-accent font-semibold">
                {personalInfo.activeChallenge.title}
              </span>
              <span className="text-[10px] bg-accent/15 text-accent px-2 py-0.5 rounded-full font-bold ml-1">
                {personalInfo.activeChallenge.participants}
              </span>
            </div>
          )}

          {/* Copy Principal */}
          <div className="relative z-10 space-y-6 my-auto">
            <h1 className="font-serif-display text-5xl sm:text-7xl xl:text-8xl text-text leading-[0.95] tracking-tight">
              {personalInfo.name.split(' ')[0]} <br />
              <span className="italic text-accent font-normal">
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-xl font-medium text-text leading-snug max-w-xl">
              {personalInfo.tagline}
            </p>

            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-xl font-normal">
              {personalInfo.bioShort}
            </p>
          </div>

          {/* Acciones & Indicadores de Impacto */}
          <div className="relative z-10 pt-8 mt-8 border-t border-line space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.skoolUrl || personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-7 py-4 text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Unirme a Skool</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line bg-bg hover:bg-surface-hover text-text px-7 py-4 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-accent" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

            {/* Grid de Indicadores Rápidos */}
            {personalInfo.indicators && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {personalInfo.indicators.map((indicator, index) => (
                  <div key={index} className="bg-bg/80 border border-line rounded-2xl p-3.5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-xs font-semibold text-text leading-tight">
                      {indicator}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Columna Derecha: Tarjeta de Perfil & Métricas Flotantes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          {/* Tarjeta con Foto de Perfil */}
          <div className="bg-surface border border-line rounded-3xl p-4 sm:p-6 relative flex-1 flex items-center justify-center overflow-hidden group shadow-sm min-h-[420px]">
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden bg-bg border border-line">
              {!imgError ? (
                <img
                  src="/profile.png"
                  alt={personalInfo.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-center items-center text-center p-6 text-text-muted font-sans text-xs">
                  <Users className="w-8 h-8 text-accent mb-2" />
                  <span>[Foto de Perfil]</span>
                  <span className="mt-1 text-[10px] opacity-60">Cargá tu foto en /public/profile.png</span>
                </div>
              )}

              {/* Overlay suave en Hover */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Tag Flotante Superior */}
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md border border-line px-3.5 py-1.5 rounded-full text-xs font-bold text-text shadow-sm flex items-center gap-2">
                <Trophy className="w-3.5 h-3.5 text-accent" />
                <span>Skool Top Creator</span>
              </div>
            </div>
          </div>

          {/* Tarjeta Inferior de Métricas Rápidas */}
          <div className="bg-surface border border-line rounded-3xl p-6 shadow-sm grid grid-cols-2 gap-4">
            <div className="bg-bg border border-line rounded-2xl p-4 text-center">
              <span className="block font-serif-display italic text-3xl sm:text-4xl text-accent font-semibold">
                +15K
              </span>
              <span className="block text-[11px] font-bold text-text-muted uppercase tracking-wider mt-1">
                Miembros en Comunidad
              </span>
            </div>
            <div className="bg-bg border border-line rounded-2xl p-4 text-center">
              <span className="block font-serif-display italic text-3xl sm:text-4xl text-text font-semibold">
                98%
              </span>
              <span className="block text-[11px] font-bold text-text-muted uppercase tracking-wider mt-1">
                Retención en Challenges
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}