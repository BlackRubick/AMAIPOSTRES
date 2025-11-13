import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { makeWhatsAppUrl } from '../lib/whatsapp'

export default function ProductModal({ product, open, onClose }){
  const [index, setIndex] = useState(0)
  const images = product?.images && product.images.length ? product.images : [product.image]

  useEffect(()=>{
    if(open) setIndex(0)
  },[open, product])

  useEffect(()=>{
    function onKey(e){ if(e.key === 'Escape') onClose() }
    if(open) window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[open])

  useEffect(()=>{
    if(open){
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return ()=> document.body.classList.remove('modal-open')
  },[open])

  if(!open || !product) return null

  function next(){ setIndex(i => (i+1) % images.length) }
  function prev(){ setIndex(i => (i-1 + images.length) % images.length) }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-60 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" onClick={onClose} />

        <motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }} transition={{duration:0.18}} className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
          <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm flex items-start justify-between p-4 border-b">
            <div>
              <h3 className="title-brand text-xl text-[var(--rojo-pasion)]">{product.name}</h3>
              <div className="text-sm text-[var(--chocolate)]">{product.description}</div>
            </div>
            <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100"><X /></button>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto">
            <div className="relative flex items-center justify-center rounded-lg overflow-hidden h-80 bg-transparent">
              <motion.img key={images[index]} src={images[index]} alt={`${product.name} ${index+1}`} className="max-h-80 w-auto max-w-full object-contain" />

              {images.length > 1 && (
                <>
                  <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"><ChevronLeft /></button>
                  <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"><ChevronRight /></button>
                </>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-2xl font-bold text-[var(--rojo-pasion)]">${(product.basePrice || 0).toFixed(2)}</div>

              {product.flavors && (
                <div>
                  <div className="text-sm font-medium mb-2">Sabores</div>
                  <div className="flex gap-2 flex-wrap">
                    {product.flavors.map((f,i)=> <span key={f} className="px-3 py-1 rounded-full bg-[var(--rosa-chicle)]/30 text-[var(--chocolate)]">{f}</span>)}
                  </div>
                </div>
              )}

              {product.glazeOptions && product.glazeOptions.length > 0 && (
                <div>
                  <div className="text-sm font-medium mt-3 mb-2">Glaseados disponibles <span className="text-xs text-gray-500">(elige hasta 2)</span></div>
                  <div className="flex gap-2 flex-wrap">
                    {product.glazeOptions.map((g, idx) => (
                      <span key={g} className="px-3 py-1 rounded-full bg-[var(--rosa-chicle)]/20 text-[var(--chocolate)] border border-transparent">{g}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto">
                <button onClick={()=>{
                  const text = `Hola! Me interesa el ${product.name}`
                  const url = makeWhatsAppUrl(text)
                  window.open(url, '_blank')
                }} className="w-full bg-[var(--rojo-pasion)] hover:bg-[var(--rosa-fresa)] text-white py-3 rounded-full">Ordenar por WhatsApp</button>
              </div>

              {images.length > 1 && (
                <div className="mt-4">
                  <div className="text-sm mb-2">Ver más imágenes</div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((src, i)=> (
                      <button key={src} onClick={()=>setIndex(i)} className={`shrink-0 w-20 h-14 rounded-md overflow-hidden border flex items-center justify-center ${i===index ? 'ring-2 ring-[var(--rojo-pasion)]' : 'border-transparent'}`}>
                        <img src={src} alt={`${product.name} thumb ${i+1}`} className="w-full h-full object-contain bg-white/5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
