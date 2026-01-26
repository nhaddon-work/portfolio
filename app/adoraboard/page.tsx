'use client'

import React from 'react'
import Hearts from '../components/Hearts'
import Link from 'next/link'

export default function AdoraboardPage() {
  return (
    <>
      <Hearts src="/heart.png" count={26} />

      <main className="min-h-screen bg-base text-text px-6 py-16 space-y-12">
        <header className="max-w-5xl mx-auto space-y-4">
          <Link href="/" className="text-sm text-muted hover:underline">
            ← Back home
          </Link>

          <h1 className="text-4xl font-serif tracking-tight">Adoraboard</h1>
          <p className="text-muted max-w-2xl">
            My keyboard company—design, manufacturing, community, and all the tiny details that make a board feel special.
          </p>
        </header>

        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { title: 'Product Design', desc: 'Layouts, aesthetics, sound profile goals, iterations.' },
            { title: 'Brand & Community', desc: 'Storytelling, launches, photos, customer care.' },
            { title: 'What’s Next', desc: 'Upcoming releases, prototypes, or a roadmap.' },
          ].map((c) => (
            <div key={c.title} className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-2">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="text-sm text-muted">{c.desc}</p>
            </div>
          ))}
        </section>

        <footer className="text-center text-sm text-muted pt-6">
          <p>© Naomi Haddon ✦ Built with care</p>
        </footer>
      </main>
    </>
  )
}
