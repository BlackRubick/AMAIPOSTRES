import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'
import CTA from './components/CTA'
import EmojiRain from './components/EmojiRain'
import { Phone } from 'lucide-react'
import Header from './components/Header'
import { makeWhatsAppUrl } from './lib/whatsapp'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="section-wrap bg-white">
          <EmojiRain full={false} count={18} />
          <div className="section-inner">
            <Hero />
          </div>
        </div>

        <div className="section-wrap section-alt">
          <div className="section-inner">
            <Products />
          </div>
        </div>

        <div className="section-wrap bg-white">
          <div className="section-inner">
            <About />
          </div>
        </div>

        <div className="section-wrap">
          <div className="section-inner">
            <CTA />
          </div>
        </div>
      </main>

      <Footer />

  <a className="whatsapp-fab" href={makeWhatsAppUrl('Hola! Quiero ordenar')} target="_blank" rel="noreferrer" aria-label="Ordena ahora por WhatsApp">
        <button className="bg-[var(--whatsapp-green)] text-white p-4 rounded-full shadow-lg hover:scale-105 transition animate-bounce" title="¡Ordena ahora!">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 2.5L2.5 22l4.5-1.5L22 5.5 21.5 2.5z" fill="white" opacity="0.02"></path><path d="M20.487 3.512A11.933 11.933 0 0012 0C5.373 0 0 5.373 0 12a11.93 11.93 0 001.77 6.12L0 24l6-1.76A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.16-3.513-8.488z" fill="#25D366"></path><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.197.297-.768.966-.94 1.165-.173.197-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.173.199-.297.298-.495.099-.197.05-.371-.025-.52-.074-.149-.672-1.62-.92-2.217-.242-.582-.487-.504-.672-.513l-.573-.01c-.197 0-.52.074-.792.371s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.075c.149.197 2.095 3.2 5.076 4.487 0 .002.001.002.001.003.445.191.792.306 1.064.392.447.144.855.124 1.18.075.36-.057 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.273-.197-.57-.347z" fill="white"/></svg>
        </button>
      </a>
    </div>
  )
}