import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-16 border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h2 className="font-display text-2xl font-bold text-text uppercase tracking-tight">
          05. Testimonios
        </h2>

        <div className="border border-border rounded-[6px] bg-surface p-8 text-center space-y-1">
          <p className="font-display font-bold text-sm text-text">Próximamente</p>
          <p className="text-text-muted text-xs">
            Testimonios de clientes de Traducción Creativa en actualización.
          </p>
        </div>
      </motion.div>
    </section>
  );
}