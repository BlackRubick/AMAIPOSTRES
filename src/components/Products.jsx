import React from 'react'
import products from '../data/products'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Products(){
  const [selectedProduct, setSelectedProduct] = useState(null)
  const sections = [
    { id: 'tartas', title: 'Tartas' },
    { id: 'roles-clasicos', title: 'Roles Clásicos' },
    { id: 'roles-gourmet', title: 'Roles Gourmet' },
    { id: 'brownies-sencillos', title: 'Brownies Sencillos' },
    { id: 'brownies-gourmet', title: 'Brownies Gourmet' },
    { id: 'pays', title: 'Pays de Queso' },
    { id: 'roscas', title: 'Roscas (Bajo pedido)' },
    { id: 'otros', title: 'Otros' }
  ]

  const byCategory = (cat) => products.filter(p => p.category === cat)

  return (
    <section id="productos" className="px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="title-brand text-3xl text-[var(--rojo-pasion)] text-center" initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}}>Nuestros Postres</motion.h2>
        <motion.p className="text-center text-[var(--chocolate)] mt-2 max-w-2xl mx-auto" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1}}>Dulces creaciones: elige una categoría y descubre nuestras mejores opciones.</motion.p>

        {sections.map(section => {
          const list = byCategory(section.id)
          if(!list || list.length === 0) return null
          return (
            <div key={section.id} id={section.id} className="mt-10">
              <h3 className="text-2xl font-semibold text-[var(--rojo-pasion)] mb-4">{section.title}</h3>
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
                {list.map((p, i)=> (
                  <ProductCard product={p} key={p.id} index={i} onView={(prod)=>setSelectedProduct(prod)} />
                ))}
              </motion.div>
            </div>
          )
        })}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} open={Boolean(selectedProduct)} onClose={()=>setSelectedProduct(null)} />
      )}
    </section>
  )
}
