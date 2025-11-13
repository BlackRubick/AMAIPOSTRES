// Helper utilities to build/sanitize WhatsApp URLs
export const DEFAULT_WHATSAPP = '529613037073' // default: Mexico +52 + number (update if needed)

export function sanitizePhone(raw){
  if(!raw) return ''
  const digits = String(raw).replace(/\D/g, '')
  return digits
}

export function makeWhatsAppUrl(text = '', phoneRaw = DEFAULT_WHATSAPP, useApiFallback = false){
  const phone = sanitizePhone(phoneRaw)
  if(!phone) throw new Error('Invalid phone number for WhatsApp')
  const encoded = encodeURIComponent(text || '')
  if(useApiFallback){
    return `https://api.whatsapp.com/send?phone=${phone}${encoded ? `&text=${encoded}` : ''}`
  }
  return `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ''}`
}

export function openWhatsApp(text = '', phoneRaw = DEFAULT_WHATSAPP, target = '_blank'){
  const url = makeWhatsAppUrl(text, phoneRaw)
  if(typeof window !== 'undefined') window.open(url, target)
  return url
}
