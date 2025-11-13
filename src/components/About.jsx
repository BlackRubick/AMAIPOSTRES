import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="px-6 py-12 bg-[var(--rosa-palido)]">
      <div className="max-w-6xl mx-auto p-6 md:p-10 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.img initial={{ x: -40, opacity: 0 }} whileInView={{ x:0, opacity:1 }} transition={{duration:0.6}} src="/AMAI.jpeg" alt="Nuestro taller" loading="lazy" className="w-full h-80 object-contain rounded-2xl overflow-hidden" />

          <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x:0, opacity:1 }} transition={{duration:0.6}}>
            <h3 className="title-brand text-3xl text-[var(--rojo-pasion)]">Nuestra Historia</h3>
            <p className="mt-3 text-[var(--chocolate)]">Desde 2025, endulzando Tuxtla Gutiérrez y la región con recetas originales y un compromiso absoluto con la calidad. Cada postre es 100% hecho a mano, con ingredientes premium y mucho cariño.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div whileHover={{ rotate: 6, y: -4 }} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--rosa-fresa)] flex items-center justify-center text-white">🎂</div>
                <div>
                  <div className="font-semibold">Recetas originales</div>
                  <div className="text-sm text-gray-600">Nuestro toque único</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ rotate: 6, y: -4 }} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--rosa-fresa)] flex items-center justify-center text-white">💝</div>
                <div>
                  <div className="font-semibold">Hecho con amor</div>
                  <div className="text-sm text-gray-600">Cuidado artesanal</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ rotate: 6, y: -4 }} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--rosa-fresa)] flex items-center justify-center text-white">⭐</div>
                <div>
                  <div className="font-semibold">Ingredientes premium</div>
                  <div className="text-sm text-gray-600">Sabor y calidad</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ rotate: 6, y: -4 }} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[var(--rosa-fresa)] flex items-center justify-center text-white">🚚</div>
                <div>
                  <div className="font-semibold">Entregas puntuales</div>
                  <div className="text-sm text-gray-600">A tu puerta</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
