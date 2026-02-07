import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { makeWhatsAppUrl } from '../lib/whatsapp'

export default function ProductCard({ product, index, onView }){
  const [selected, setSelected] = useState(0)
  const price = (product.basePrice || 0).toFixed(2)
  const isRosca = product?.category === 'roscas'

  function orderByWhatsApp(){
    if(isRosca) return
    const text = `Hola! Me interesa el ${product.name} - Precio: $${price}`
    const url = makeWhatsAppUrl(text)
    window.open(url, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-[1.03] transition relative border border-transparent hover:border-[var(--rosa-chicle)] cursor-pointer"
      onClick={() => onView && onView(product)}
    >
      {product.badge && (
        <div className="product-badge absolute top-3 left-3 bg-[var(--rojo-pasion)] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">{product.badge}</div>
      )}

      <div className="h-44 md:h-56 bg-gray-100 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-[var(--chocolate)] mt-1">{product.description}</p>

        <div className="mt-3">
          {product.flavors && product.flavors.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {product.flavors.map((f, idx)=> (
                <button key={f} onClick={()=>setSelected(idx)} className={`text-xs px-3 py-1 rounded-full transition border ${selected===idx ? 'bg-[var(--rojo-pasion)] text-white border-[var(--rojo-pasion)]' : 'bg-[var(--rosa-chicle)]/30 text-[var(--chocolate)] border-transparent hover:bg-[var(--rosa-chicle)]/60'}`}>
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

          <div className="mt-4 flex items-center justify-between gap-4">
          <div>
            <span className="text-sm text-gray-500">Precio</span>
            <div className="text-2xl font-bold text-[var(--rojo-pasion)] bg-[var(--rosa-palido)] inline-block px-3 py-1 rounded-md">${price}</div>
          </div>

          <div className="w-40 flex flex-col gap-2">
            <button
              onClick={(e)=>{ e.stopPropagation(); orderByWhatsApp() }}
              disabled={isRosca}
              className={`w-full py-3 rounded-lg shadow transition ${isRosca ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-[var(--rojo-pasion)] hover:bg-[var(--rosa-fresa)] text-white transform hover:scale-105'}`}
            >
              {isRosca ? 'No disponible' : 'Ordenar por WhatsApp'}
            </button>
            <button onClick={(e)=>{ e.stopPropagation(); onView && onView(product) }} className="w-full border border-[var(--rojo-pasion)] text-[var(--rojo-pasion)] py-2 rounded-lg">Ver más</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
