'use client'

import React from 'react'
import Hearts from '../components/Hearts'
import Link from 'next/link'

export default function HobbiesPage() {
  return (
    <>
      <Hearts src="/heart.png" count={26} />

      <main className="min-h-screen bg-base text-text px-6 py-16 space-y-12">
        <header className="max-w-5xl mx-auto space-y-4">
          <Link href="/" className="text-sm text-muted hover:underline">
            ← Back home
          </Link>

          <h1 className="text-4xl font-serif tracking-tight">Hobbies</h1>
          <p className="text-muted max-w-2xl">
            Singing, hiking, and creating cute digital designs are the little things that keep me grounded and sane. From practicing harmonies and exploring new trails to experimenting with playful artwork inspired by characters like Kuromi, these hobbies help me recharge, stay creative, and find joy in everyday life.
          </p>
        </header>

        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { 
              title: 'Singing', 
              desc: 'Warm-ups, harmonies, open mics, or covers you love. Share your favorite song with me or request a cover!' 
            },
            { 
              title: 'Hiking', 
              desc: 'Trail photos, peak lists, and the “why” behind it. Got a favorite trail? Let’s explore it together!' 
            },
            { 
              title: 'Art & Design', 
              desc: 'I loved drawing as a kid and now enjoy digital art — especially cute designs like Kuromi. I create little fun pieces and experiments, and I’d love to hear what ideas you’d like me to try next!' 
            },
          ].map((h) => (
            <div key={h.title} className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-2 hover:scale-[1.02] transition-transform duration-200">
              <h2 className="text-lg font-semibold">{h.title}</h2>
              <p className="text-sm text-muted">{h.desc}</p>
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