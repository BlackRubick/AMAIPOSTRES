import React from 'react'
import { motion } from 'framer-motion'
import { makeWhatsAppUrl } from '../lib/whatsapp'

export default function Hero(){
  return (
    <section id="hero" className="min-h-[75vh] flex items-center justify-center px-6 relative overflow-hidden" style={{background: 'linear-gradient(180deg, var(--rosa-palido) 0%, var(--white-pure) 100%)'}}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="w-full max-w-5xl text-center p-8 relative z-20"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden flex items-center justify-center bg-[var(--white-pure)] shadow-lg">
            <motion.img src="/AMAI.jpeg" alt="Amai Postres" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>

          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="title-brand text-4xl md:text-6xl font-bold text-[var(--rojo-pasion)]">Amai Postres</motion.h1>

          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="text-center">
            <div className="text-lg font-medium text-[var(--rojo-vino)]">100% Hecho con Amor · EST. 2025</div>
            <p className="mt-2 max-w-2xl text-[var(--chocolate)]">Postres artesanales que endulzan tus momentos especiales</p>
          </motion.div>

          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="flex gap-4 mt-4">
            <a href="#productos" className="inline-flex items-center gap-2 bg-[var(--rojo-pasion)] hover:bg-[var(--rosa-fresa)] text-white px-6 py-3 rounded-full shadow-lg transform active:scale-95 transition">Ver Catálogo</a>

            <a href={makeWhatsAppUrl('Hola! Me interesa hacer un pedido de Amai Postres')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-[var(--rojo-pasion)] text-[var(--rojo-pasion)] bg-[var(--white-pure)] px-6 py-3 rounded-full shadow-sm hover:shadow-md transition">Ordenar por WhatsApp</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
