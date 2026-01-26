'use client'

import React from 'react'

export default function MiniPlayer() {
  const [open, setOpen] = React.useState(true) // open by default

  return (
    <div className="bg-white/70 border border-lavender/20 rounded-2xl p-3">
      {/* Header row */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 text-left"
        aria-expanded={open}
      >
        <div>
          <div className="text-sm font-medium">Tap play if you want music ♫</div>
        </div>

        <span className="text-xs text-muted select-none">{open ? '⌃' : '⌄'}</span>
      </button>

      {/* Collapsible body (iframe stays mounted so audio continues) */}
      <div
        className={[
          'transition-[max-height,opacity,margin-top] duration-300 ease-out overflow-hidden',
          open ? 'max-h-[160px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0',
        ].join(' ')}
      >
        <iframe
          width="100%"
          height="110"
          src="https://www.youtube.com/embed/a4O-abCXsfA?modestbranding=1&rel=0&playsinline=1"
          title="Timeless — The Weeknd"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
