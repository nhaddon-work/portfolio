'use client'

import React from 'react'
import Link from 'next/link'

export default function TabButton({
  href,
  label,
  subtitle,
  accentDot,
}: {
  href: string
  label: string
  subtitle: string
  accentDot: string
}) {
  return (
    <Link
      href={href}
      className="
        group block w-full text-left rounded-2xl px-4 py-3 border transition
        bg-white/55 border-white/40 hover:bg-white/70 hover:shadow-sm
        focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60
      "
    >
      <div className="flex items-start gap-3">
        <span className={`mt-1.5 w-3 h-3 rounded-full ${accentDot}`} />
        <div className="space-y-0.5">
          <div className="font-medium">{label}</div>
          <div className="text-xs text-muted">{subtitle}</div>
        </div>
      </div>
    </Link>
  )
}
