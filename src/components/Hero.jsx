import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;
  const [imgError, setImgError] = useState(false);

  return (
    <section className="border-b border-line bg-bg overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">
        
        {/* Columna Izquierda: Editorial Typography & Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-6 sm:p-10 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-line"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-end border-b border-line/60 pb-6">
            <span className="font-sans text-xs text-text-muted uppercase tracking-widest font-light">
              2026 / BUENOS AIRES
            </span>
          </div>

          {/* Headline Titular con Serif Display + Inclinaciones Itálicas */}
          <div className="py-8 lg:py-12 space-y-6">
            <h1 className="font-serifDisplay text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-text leading-[0.88] tracking-tight">
              Rodrigo <br />
              <span className="italic text-accent font-normal">Gómez</span>
            </h1>

            <div className="max-w-xl space-y-4 pt-4 border-t border-line/40">
              <p className="font-sans text-xs sm:text-sm uppercase tracking-widest font-bold text-text">
                Director Creativo & Diseñador de Experiencias Web
              </p>
              <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed font-light">
                Construcción de identidades digitales memorables, combinación de diseño editorial, estrategia visual y desarrollo web de alto rendimiento.
              </p>
            </div>
          </div>

          {/* CTA Buttons + Grid de Metadatos */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="group flex items-center gap-3 bg-text text-bg px-8 py-4 font-sans text-xs uppercase tracking-widest font-bold rounded-none hover:bg-accent hover:text-white transition-all duration-300"
              >
                <span>Explorar Portfolio</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-text text-text px-8 py-4 font-sans text-xs uppercase tracking-widest font-bold rounded-none hover:bg-surface transition-colors"
              >
                Iniciar Proyecto
              </a>
            </div>

            {/* Metadatos / Stats estilo Revista */}
            <div className="grid grid-cols-3 border-t border-b border-line py-4">
              <div className="pr-4 border-r border-line/40">
                <span className="block font-serifDisplay italic text-2xl sm:text-3xl text-text">100%</span>
                <span className="block font-sans text-[10px] uppercase tracking-wider text-text-muted mt-1">Estrategia Medida</span>
              </div>
              <div className="px-4 border-r border-line/40">
                <span className="block font-serifDisplay italic text-2xl sm:text-3xl text-text">05-07</span>
                <span className="block font-sans text-[10px] uppercase tracking-wider text-text-muted mt-1">Días de Ejecución</span>
              </div>
              <div className="pl-4">
                <span className="block font-serifDisplay italic text-2xl sm:text-3xl text-accent">High-End</span>
                <span className="block font-sans text-[10px] uppercase tracking-wider text-text-muted mt-1">Acabado Editorial</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Columna Derecha: Imagen Agrandada en PC */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 bg-surface/20 relative flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-[550px] lg:min-h-full group cursor-pointer overflow-hidden"
        >
          {/* Contenedor amplia de la foto */}
          <div className="relative w-full max-w-[560px] aspect-[4/5] border border-line p-3 sm:p-4 bg-bg transition-all duration-500 group-hover:border-accent">
            
            {/* Capa Trasera Desplazada */}
            <div className="absolute inset-0 border border-accent/40 translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-500 ease-out" />

            {/* Ventana de la Imagen */}
            <div className="relative w-full h-full overflow-hidden bg-surface">
              {!imgError ? (
                <img
                  src="/profile.png"
                  alt="Rodrigo Gómez"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-center items-center text-center p-6 text-text-muted font-sans text-xs">
                  <span>[Imagen de perfil]</span>
                  <span className="mt-2 text-[10px] opacity-60">Cargá tu imagen en /public/profile.png</span>
                </div>
              )}

              {/* Tint de color tenue en Hover */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}