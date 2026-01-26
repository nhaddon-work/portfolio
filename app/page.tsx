'use client'

import React from 'react'
import Hearts from './components/Hearts'
import TabButton from './components/TabButton'
import MiniPlayer from './components/MiniPlayer'
import dynamic from 'next/dynamic'

const TravelGlobe = dynamic(() => import('./components/TravelGlobe'), { ssr: false })

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/60 border border-white/40 px-3 py-1 text-xs text-muted">
      {children}
    </span>
  )
}

function PhotoTile({
  src,
  label,
  pill,
}: {
  src: string
  label: string
  pill: string
}) {
  return (
    <div className="group bg-white/70 border border-lavender/20 rounded-2xl overflow-hidden hover:shadow-md transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={label}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition"
          draggable={false}
        />
      </div>
      <div className="p-4 flex items-center justify-between gap-3">
        <div className="font-medium">{label}</div>
        <span className={'text-xs px-2 py-1 rounded-full border border-white/40 ' + pill}>
          fav
        </span>
      </div>
    </div>
  )
}

const STAR_TILE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Crect width='140' height='140' fill='none'/%3E%3Ctext x='24' y='40' font-family='IBM%20Plex%20Mono,monospace' font-size='16' fill='black'%3E%E2%9C%A6%3C/text%3E%3Ctext x='88' y='92' font-family='IBM%20Plex%20Mono,monospace' font-size='16' fill='black'%3E%E2%9C%A6%3C/text%3E%3C/svg%3E"

export default function Home() {
  return (
    <>
      {/* floating hearts */}
      <div className="pointer-events-none fixed inset-0 z-[9999]">
        <Hearts src="/heart.png" count={30} />
      </div>

      <main className="relative min-h-screen bg-base text-text px-6 py-16">
        {/* ✦ background stars */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `url("${STAR_TILE}")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '160px 160px',
            opacity: 0.2,
          }}
        />

        {/* CONTENT COLUMN */}
        <div className="relative z-10 mx-auto w-[70%] max-w-6xl space-y-8 text-left">
          {/* HERO */}
          <section className="space-y-6">
            {/* name + image (image on RIGHT) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="space-y-1">
                <h1 className="text-5xl font-serif tracking-tight">
                  𝐍𝐚𝐨𝐦𝐢 (𝐘𝐮) 𝐇𝐚𝐝𝐝𝐨𝐧 (𝐃𝐮)
                </h1>

                <p className="max-w-3xl text-sm text-muted">
                  {'𝐈𝐍𝐓𝐉 ｜ ≈ 𝐚𝐪𝐮𝐚𝐫𝐢𝐮𝐬 · ☽ 𝐥𝐢𝐛𝐫𝐚 · ⌒ 𝐥𝐢𝐛𝐫𝐚 ｜ 🇨🇳🇺🇸 ｜ 𝐈𝐧𝐬𝐭𝐚 ✦ 𝐍𝐚𝐨𝐦𝐢𝐰𝐡𝐨𝐦𝐞'}
                </p>
              </div>

              <img
                src="/avatar.png"
                alt="Naomi"
                className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover border border-white/60 shadow-sm -mt-1"
                draggable={false}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5 pt-3">
              <TabButton
                href="/data"
                label="Data Engineering & Web Dev"
                subtitle="Work, skills, projects"
                accentDot="bg-mint"
              />
              <TabButton
                href="/adoraboard"
                label="Adoraboard"
                subtitle="My keyboard brand"
                accentDot="bg-peach"
              />
              <TabButton
                href="/hobbies"
                label="Life & Hobbies"
                subtitle="Singing, guitar, hiking"
                accentDot="bg-butter"
              />
            </div>

            <MiniPlayer />
            <TravelGlobe />
          </section>

          {/* THINGS I LOVE */}
          <section className="space-y-6">
            <h2 className="text-xl font-serif tracking-tight">Things I love ✦</h2>

            <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6">
              <ul className="space-y-4 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Music</span>
                    <span className="text-muted">
                      {' — The Weeknd, Avril Lavigne, pop & K-pop, indie, lo-fi — music that sets the mood.'}
                    </span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Fashion</span>
                    <span className="text-muted">
                      {' — Always cared about it; once dreamed of becoming a jewelry designer.'}
                    </span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Movies & TV</span>
                    <span className="text-muted">
                      {' — Silicon Valley, Two Broke Girls, The Big Bang Theory, Friends.'}
                    </span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Food & drinks</span>
                    <span className="text-muted">
                      {' — matcha lattes, hot pot, rice noodles, BBQ, spicy street food everywhere.'}
                    </span>
                  </div>
                </li>

                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Outdoors</span>
                    <span className="text-muted">
                      {' — quiet hikes, trees, waterfalls, beaches, lakes, slow walks.'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <footer className="text-sm text-muted pt-6">
            <p>© Naomi Haddon ✦ Built with care</p>
          </footer>
        </div>
      </main>
    </>
  )
}
