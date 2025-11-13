import React, { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { id: 'inicio', label: 'Inicio', href: '#hero' },
  { id: 'productos', label: 'Productos', href: '#productos' },
  { id: 'nosotros', label: 'Nosotros', href: '#about' },
  { id: 'contacto', label: 'Contacto', href: '#cta' }
]

export default function Header(){
  const [isSticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(()=>{
    const onScroll = ()=>{
      setSticky(window.scrollY > 20)
      for(const l of LINKS){
        const el = document.querySelector(l.href)
        if(!el) continue
        const rect = el.getBoundingClientRect()
        if(rect.top <= 120 && rect.bottom > 120){
          setActive(l.id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  function handleNavClick(e, href, id){
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    const headerOffset = isSticky ? 60 : 70
    if(target){
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
      setActive(id)
    }
  }

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed w-full left-0 z-50 transition-all duration-300 ${isSticky ? 'shadow-xl' : ''}`}
      style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.95)', borderBottom: isSticky ? '1px solid rgba(255,182,193,0.3)' : '1px solid transparent', height: isSticky ? 60 : 70 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <div className="hidden md:flex items-center gap-3" style={{height: '100%'}}>
          <a href="#hero" onClick={(e)=>handleNavClick(e, '#hero','inicio')} className="flex items-center gap-3" aria-label="Amai Postres - Ir al inicio">
            <img src="/AMAI.jpeg" alt="Amai Postres" className="h-12 w-auto object-cover rounded-md transform hover:rotate-[5deg] transition-transform duration-300" />
            <span className="title-brand text-lg font-semibold text-[var(--chocolate)]">Amai Postres</span>
          </a>
        </div>

        <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <a href="#hero" onClick={(e)=>handleNavClick(e, '#hero','inicio')} className="pointer-events-auto title-brand text-lg font-semibold text-[var(--chocolate)]">Amai Postres</a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(link=> (
            <a key={link.id} href={link.href} onClick={(e)=>handleNavClick(e, link.href, link.id)} className={`relative text-[var(--chocolate)] font-medium text-base transition-colors px-1 ${active===link.id ? 'text-[var(--rojo-pasion)] font-bold' : ''}`}>
              <span className="inline-block py-2">{link.label}</span>
              <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 bg-[var(--rosa-fresa)] transition-all duration-300 ${active===link.id ? 'w-full -translate-x-1/2' : 'group-hover:w-full'}`} style={{transform: 'translateX(-50%)'}}></span>
              {active===link.id && <span className="absolute -top-2 left-1/2 w-2 h-2 bg-[var(--rosa-fresa)] rounded-full transform -translate-x-1/2" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:9613037073" className="hidden lg:inline-flex items-center gap-2 text-[var(--chocolate)] font-medium"> <Phone size={16} /> <span>961 303 7073</span></a>
          </div>

          <div className="md:hidden" />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.32 }} className="fixed top-0 right-0 h-full w-full md:hidden z-50">
            <div className="absolute inset-0 bg-black/40" onClick={()=>setMenuOpen(false)}></div>
            <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-[var(--rosa-palido)] to-white backdrop-blur-md p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src="/AMAI.jpeg" alt="logo small" className="h-10 rounded-md" />
                  <span className="title-brand font-semibold">Amai Postres</span>
                </div>
                <button onClick={()=>setMenuOpen(false)} aria-label="Cerrar menu"><X size={18} /></button>
              </div>

              <nav className="flex flex-col gap-4">
                {LINKS.map(link=> (
                  <a key={link.id} href={link.href} onClick={(e)=>handleNavClick(e, link.href, link.id)} className="py-3 px-2 rounded-md text-[var(--chocolate)] hover:text-[var(--rojo-pasion)] transition font-medium">{link.label}</a>
                ))}
              </nav>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
