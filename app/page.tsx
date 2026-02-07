'use client'

import React, { useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Hearts from './components/Hearts'
import TabButton from './components/TabButton'
import MiniPlayer from './components/MiniPlayer'
import Carousel, { CarouselItem } from './components/ui/Carousel'

const TravelGlobe = dynamic(() => import('./components/TravelGlobe'), { ssr: false })

// ---------------------------
// PHOTO CAROUSEL CARD
// ---------------------------
function PhotoCarouselCard({
  title,
  subtitle,
  photos,
  onClose,
}: {
  title: string
  subtitle?: string
  photos: CarouselItem[]
  onClose?: () => void
}) {
  return (
    <div className="w-[340px] bg-white/75 border border-lavender/25 rounded-2xl shadow-sm backdrop-blur">
      <div className="px-4 pt-4 flex items-start justify-between gap-3">
        <div>
          <div className="font-medium">{title}</div>
          {subtitle && <div className="text-xs text-muted mt-0.5">{subtitle}</div>}
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-white/50 bg-white/60 px-2 py-1 text-xs text-muted hover:bg-white/80 transition"
            aria-label="Close"
          >
            ✦
          </button>
        )}
      </div>

      <div
        className="mt-3 px-4 pb-4 flex gap-3 overflow-x-auto snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: 'touch' }}
        aria-label="Photo carousel"
      >
        {photos.map((p) => (
          <article
            key={p.src}
            className="min-w-[220px] snap-start bg-white/70 border border-lavender/20 rounded-xl overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.src} alt={p.label ?? ''} className="h-full w-full object-cover" draggable={false} />
            </div>
            {p.label && <div className="px-3 py-2 text-xs text-muted">{p.label}</div>}
          </article>
        ))}
      </div>
    </div>
  )
}

// ---------------------------
// MAIN PAGE
// ---------------------------
export default function Home() {
  const [showChinaCard, setShowChinaCard] = useState(false)
  const closeChinaCard = useCallback(() => setShowChinaCard(false), [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowChinaCard(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const handleCountryClick = useCallback((code: string) => {
    setShowChinaCard(code === 'CN')
  }, [])

  return (
    <>
      {/* Floating hearts */}
      <div className="pointer-events-none fixed inset-0 z-20">
        <Hearts src="/heart.png" count={30} />
      </div>

      <main className="relative min-h-screen bg-base text-text px-6 py-16">
        {/* Background stars */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Crect width='140' height='140' fill='none'/%3E%3Ctext x='24' y='40' font-family='IBM%20Plex%20Mono,monospace' font-size='16' fill='black'%3E%E2%9C%A6%3C/text%3E%3Ctext x='88' y='92' font-family='IBM%20Plex%20Mono,monospace' font-size='16' fill='black'%3E%E2%9C%A6%3C/text%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '160px 160px',
            opacity: 0.2,
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl space-y-8 text-left">
          {/* HERO */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="space-y-1">
                <h1 className="text-5xl font-serif tracking-tight">𝐍𝐚𝐨𝐦𝐢 (𝐘𝐮) 𝐇𝐚𝐝𝐝𝐨𝐧 (𝐃𝐮)</h1>
                <p className="max-w-3xl text-sm text-muted">
                  𝐈𝐍𝐓𝐉 ｜ ≈ 𝐚𝐪𝐮𝐚𝐫𝐢𝐮𝐬 · ☽ 𝐥𝐢𝐛𝐫𝐚 · ⌒ 𝐥𝐢𝐛𝐫𝐚 ｜ 🇨🇳🇺🇸 ｜ 𝐈𝐧𝐬𝐭𝐚 ✦ 𝐍𝐚𝐨𝐦𝐢𝐰𝐡𝐨𝐦𝐞
                </p>
              </div>

              <img
                src="/avatar.png"
                alt="Naomi"
                className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover border border-white/60 shadow-sm -mt-1"
                draggable={false}
              />
            </div>

            {/* Tabs */}
            <div className="grid md:grid-cols-3 gap-5 pt-3">
              <TabButton href="/data" label="Data Engineering & Web Dev" subtitle="Work, skills, projects" accentDot="bg-mint" />
              <TabButton href="/adoraboard" label="Adoraboard" subtitle="My keyboard brand" accentDot="bg-peach" />
              <TabButton href="/hobbies" label="Life & Hobbies" subtitle="Singing, guitar, hiking" accentDot="bg-butter" />
            </div>

            <MiniPlayer />

            {/* Globe */}
            <div className="relative">
              {showChinaCard && (
                <button
                  type="button"
                  className="hidden md:block absolute inset-0 z-[5] cursor-default"
                  onClick={closeChinaCard}
                  aria-label="Close China card"
                />
              )}

              <div className="relative z-[1]">
                <TravelGlobe onCountryClick={handleCountryClick} />
              </div>

              {showChinaCard && (
                <>
                  <div className="hidden md:block absolute right-6 top-10 z-10">
                    <PhotoCarouselCard
                      title="China ✦ Moments"
                      subtitle="Scroll horizontally to browse"
                      photos={CHINA_PHOTOS}
                      onClose={closeChinaCard}
                    />
                  </div>
                  <div className="md:hidden mt-4">
                    <PhotoCarouselCard
                      title="China ✦ Moments"
                      subtitle="Scroll horizontally to browse"
                      photos={CHINA_PHOTOS}
                      onClose={closeChinaCard}
                    />
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Things I love */}
          <section className="space-y-6">
            <h2 className="text-xl font-serif tracking-tight">Things I love ♥︎</h2>
            <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6">
              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Music</span>
                    <span className="text-muted"> — The Weeknd, Avril Lavigne, pop & K-pop, indie, lo-fi — music that sets the mood.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Fashion</span>
                    <span className="text-muted"> — Always cared about it; once dreamed of becoming a jewelry designer.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Movies & TV</span>
                    <span className="text-muted"> — Silicon Valley, Two Broke Girls, The Big Bang Theory, Friends.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Food & drinks</span>
                    <span className="text-muted"> — matcha lattes, hot pot, rice noodles, BBQ, spicy street food everywhere.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[3px] text-xs">✦</span>
                  <div>
                    <span className="font-medium">Outdoors</span>
                    <span className="text-muted"> — quiet hikes, trees, waterfalls, beaches, lakes, slow walks.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Little truths (Likes & Dislikes) */}
          <section className="space-y-6">
            <h2 className="text-xl font-serif tracking-tight">Little truths ✦</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Likes */}
              <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6">
                <h3 className="font-medium mb-4">Likes ★</h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    'Non-fiction reading',
                    'Learning new skills (e.g., soldering)',
                    'Web development',
                    'Musical instruments',
                    'Journaling',
                    'Pastel palettes',
                    'Cute designs',
                    'Adventuring',
                    'Hiking',
                    'Snorkeling',
                    'Beach activities',
                    'Plants',
                    'Stand-up comedy',
                    'Women’s empowerment',
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-mint/20 border border-mint/30 text-text"
                    >
                      <span className="text-[10px] opacity-70">✧</span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Dislikes */}
              <div className="bg-white/50 border border-lavender/20 rounded-2xl p-6">
                <h3 className="font-medium mb-4">Dislikes ☾</h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    'Politics',
                    'Highly competitive environments',
                    'Watching or discussing sports',
                    'Chores',
                    'Repetitive or tedious tasks',
                    'Gym culture',
                    'Unnecessary meetings',
                    'Rigid routines',
                    'Noisy or overcrowded spaces',
                    'Short-term solutions',
                    'Micromanagement',
                    'Performative productivity',
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-lavender/10 border border-lavender/30 text-muted"
                    >
                      <span className="text-[10px] opacity-60">✦</span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-sm text-muted pt-6">
            <p>© Naomi Haddon ✦ Built with care</p>
          </footer>
        </div>
      </main>
    </>
  )
}
