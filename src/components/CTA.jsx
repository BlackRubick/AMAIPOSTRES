import React from 'react'
import { motion } from 'framer-motion'
import { makeWhatsAppUrl } from '../lib/whatsapp'

export default function CTA(){
  const wa = makeWhatsAppUrl('Hola! Quiero ordenar un postre personalizado')
  return (
    <section id="cta" className="px-6 py-12" style={{background: 'linear-gradient(90deg, var(--rojo-pasion) 0%, var(--rojo-vino) 100%)'}}>
      <div className="max-w-5xl mx-auto text-center text-white">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} className="title-brand text-3xl md:text-4xl font-bold">¿Listo para ordenar?</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1}} className="mt-3">Contáctanos y crea tu postre personalizado</motion.p>

        <motion.div initial={{scale:0.98}} animate={{scale:[1,1.02,1]}} transition={{duration:1.8, repeat: Infinity}} className="mt-6 inline-block">
          <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-[var(--rojo-pasion)] px-6 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">Ordenar por WhatsApp</a>
        </motion.div>

        <div className="mt-4 text-sm font-medium">Tel: <span className="font-semibold">961 303 7073</span></div>
      </div>
    </section>
  )
}
