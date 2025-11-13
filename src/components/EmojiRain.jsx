import React, { useMemo } from 'react'

export default function EmojiRain({ count = 24, full = true }){
  const emojis = ['🧁','🍰','🎂','']

  const items = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100
      const delay = -(Math.random() * 8)
      const dur = 6 + Math.random() * 8
      const size = 16 + Math.random() * 30
      const opacity = 0.7 + Math.random() * 0.3
      const emoji = emojis[Math.floor(Math.random() * emojis.length)]
      return (
        <div
          key={i}
          className="falling-emoji"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${dur}s`,
            fontSize: `${size}px`,
            opacity,
          }}
          aria-hidden="true"
        >
          {emoji}
        </div>
      )
    })
  }, [count])
  const cls = full ? 'emoji-rain-full' : 'emoji-rain'

  return (
    <div className={cls} aria-hidden="true">
      {items}
    </div>
  )
}
