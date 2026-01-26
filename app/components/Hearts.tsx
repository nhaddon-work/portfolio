'use client'

import React from 'react'

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function Hearts({ src = '/heart.png', count = 22 }: { src?: string; count?: number }) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const sprites = React.useMemo(() => {
    if (!mounted) return []
    return Array.from({ length: count }).map((_, i) => {
      const x = rand(0, 100)
      const drift = rand(-18, 18)
      return {
        key: `heart-${i}`,
        style: {
          ['--x-start' as any]: `${x.toFixed(2)}vw`,
          ['--x-end' as any]: `${(x + drift).toFixed(2)}vw`,
          ['--size' as any]: `${rand(15, 20).toFixed(0)}px`,
          ['--dur' as any]: `${rand(10, 22).toFixed(2)}s`,
          ['--delay' as any]: `0s`,    
          ['--opacity' as any]: rand(0.22, 0.5).toFixed(2),
          ['--rot' as any]: `${rand(-220, 220).toFixed(0)}deg`,
          top: `${rand(0, 80).toFixed(0)}vh`,    
        } as React.CSSProperties,
      }
    })
  }, [mounted, count])

  if (!mounted) return null

  return (
    <div className="petal-layer" aria-hidden="true">
      {sprites.map((s) => (
        <img key={s.key} src={src} alt="" className="petal" style={s.style} draggable={false} />
      ))}
    </div>
  )
}
