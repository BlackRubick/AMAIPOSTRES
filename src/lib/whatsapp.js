// Helper utilities to build/sanitize WhatsApp URLs
// Behavior:
// - Reads Vite env `VITE_WHATSAPP_NUMBER` if present (useful for different deployments)
// - Sanitizes phone to digits only
// - By default builds the canonical API URL: https://api.whatsapp.com/send?phone=...

// Attempt to pick the phone number from Vite env if available, otherwise fallback to this default.
const ENV_PHONE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_WHATSAPP_NUMBER)
  ? String(import.meta.env.VITE_WHATSAPP_NUMBER)
  : null

export const DEFAULT_WHATSAPP = ENV_PHONE || '529612749056' // update if needed (only digits, incl. country code)

export function sanitizePhone(raw){
  if(!raw) return ''
  const digits = String(raw).replace(/\D/g, '')
  return digits
}

/**
 * Build a WhatsApp URL. Defaults to the API form (recommended):
 *  https://api.whatsapp.com/send?phone=<digits>&text=...
 *
 * @param {string} text - message text
 * @param {string} phoneRaw - raw phone value (will be sanitized). If omitted uses DEFAULT_WHATSAPP
 * @param {boolean} useWaMe - if true, build the short wa.me URL instead
 */
export function makeWhatsAppUrl(text = '', phoneRaw = DEFAULT_WHATSAPP, useWaMe = false){
  const phone = sanitizePhone(phoneRaw)
  if(!phone) throw new Error('Invalid phone number for WhatsApp')
  const encoded = encodeURIComponent(text || '')
  if(useWaMe){
    return `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ''}`
  }
  // canonical API URL (no extra slash)
  return `https://api.whatsapp.com/send?phone=${phone}${encoded ? `&text=${encoded}` : ''}`
}

export function openWhatsApp(text = '', phoneRaw = DEFAULT_WHATSAPP, target = '_blank'){
  const url = makeWhatsAppUrl(text, phoneRaw)
  if(typeof window !== 'undefined') window.open(url, target)
  return url
}
