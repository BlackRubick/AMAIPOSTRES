import React from 'react'
import { Phone, Instagram, Facebook } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="mt-12 text-white" style={{background: 'var(--rojo-vino)'}}>
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="title-brand text-2xl">Amai Postres</h4>
          <p className="mt-2">100% Hecho con Amor</p>
        </div>

        <div>
          <h5 className="font-semibold">Contacto</h5>
          <p className="mt-2">📞 961 303 7073</p>
          <p>📍 Tuxtla Gutiérrez, Chiapas</p>
        </div>

        <div>
          <h5 className="font-semibold">Horarios</h5>
          <p className="mt-2">Lun - Vie: 9am - 7pm</p>
          <p>Sábados: 10am - 6pm</p>
          <p>Domingos: Cerrado</p>
        </div>

        <div>
          <h5 className="font-semibold">Síguenos</h5>
          <div className="flex gap-3 mt-3">
            <a href="#" className="p-2 rounded bg-white/10 hover:bg-[var(--rosa-chicle)] transition"><Instagram size={18} color="white"/></a>
            <a href="#" className="p-2 rounded bg-white/10 hover:bg-[var(--rosa-chicle)] transition"><Facebook size={18} color="white"/></a>
            <a href={`https://wa.me/529613037073`} className="p-2 rounded bg-white/10 hover:bg-[var(--rosa-chicle)] transition">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-sm">© {new Date().getFullYear()} Amai Postres. Todos los derechos reservados. · Hecho con ❤️ en Chiapas</div>
    </footer>
  )
}
