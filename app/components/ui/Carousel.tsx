'use client'

import React from 'react'

export type CarouselItem = {
  src: string
  label?: string
}

type CarouselProps = {
  title?: string
  items: CarouselItem[]
  initialIndex?: number
  className?: string
}

export default function Carousel({
  title = 'Photos',
  items,
  initialIndex = 0,
  className = '',
}: CarouselProps) {
  const safeInitial = Math.min(
    Math.max(initialIndex, 0),
    Math.max(items.length - 1, 0)
  )

  const [i, setI] = React.useState(safeInitial)

  // Clamp index when items change
  React.useEffect(() => {
    if (i >= items.length) setI(0)
  }, [items.length, i])

  // 🔒 SAFE index for render (prevents runtime crash)
  const safeIndex = items.length
    ? ((i % items.length) + items.length) % items.length
    : 0

  const prev = React.useCallback(() => {
    if (!items.length) return
    setI((v) => (v - 1 + items.length) % items.length)
  }, [items.length])

  const next = React.useCallback(() => {
    if (!items.length) return
    setI((v) => (v + 1) % items.length)
  }, [items.length])

  if (!items.length) {
    return (
      <div className={`mt-4 ${className}`}>
        <div className="text-xs text-muted">
          <span className="mr-1 text-[10px] opacity-60">✦</span>
          {title}
        </div>
        <div className="mt-2 text-sm text-muted">No photos yet ✦</div>
      </div>
    )
  }

  return (
    <div className={`mt-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs text-muted">
          <span className="mr-1 text-[10px] opacity-60">✦</span>
          {title}
          <span className="ml-2 text-[11px] opacity-70">
            {safeIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="rounded-full border border-white/50 bg-white/60 px-2 py-1 text-xs hover:bg-white/80 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="rounded-full border border-white/50 bg-white/60 px-2 py-1 text-xs hover:bg-white/80 transition"
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="bg-white/70 border border-lavender/20 rounded-xl overflow-hidden cursor-pointer select-none"
        onClick={next}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prev()
          if (e.key === 'ArrowRight') next()
          if (e.key === 'Enter' || e.key === ' ') next()
        }}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={items[safeIndex].src}
            alt={items[safeIndex].label ?? ''}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div className="px-3 py-2 text-xs text-muted">
          <span className="mr-1 text-[10px] opacity-60">✦</span>
          {items[safeIndex].label ?? 'Photo'}
          <span className="ml-2 opacity-60">click to advance</span>
        </div>
      </div>

      <div className="mt-2 flex gap-1.5">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={
              'h-1.5 w-1.5 rounded-full border border-lavender/30 ' +
              (idx === safeIndex ? 'bg-lavender/40' : 'bg-white/50')
            }
          />
        ))}
      </div>
    </div>
  )
}
