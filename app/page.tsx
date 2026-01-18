'use client'

import React from 'react'

type SkillItem = { skill: string; pill: string; dot: string }
type TabKey = 'data' | 'adora' | 'hobbies'

const dataSkills: SkillItem[] = [
  { skill: 'Python', pill: 'bg-mint/35', dot: 'bg-mint' },
  { skill: 'SQL', pill: 'bg-sky/30', dot: 'bg-sky' },
  { skill: 'Snowflake', pill: 'bg-lavender/30', dot: 'bg-lavender' },
  { skill: 'dbt', pill: 'bg-peach/35', dot: 'bg-peach' },
  { skill: 'Airflow', pill: 'bg-butter/45', dot: 'bg-butter' },
  { skill: 'AWS (S3, Glue, Lambda)', pill: 'bg-sky/30', dot: 'bg-sky' },
  { skill: 'Data Modeling', pill: 'bg-mint/35', dot: 'bg-mint' },
  { skill: 'CI/CD', pill: 'bg-butter/45', dot: 'bg-butter' },
  { skill: 'Docker', pill: 'bg-peach/35', dot: 'bg-peach' },
  { skill: 'Tableau', pill: 'bg-mint/35', dot: 'bg-mint' },
  { skill: 'Git', pill: 'bg-sky/30', dot: 'bg-sky' },
  { skill: 'dltHub', pill: 'bg-lavender/30', dot: 'bg-lavender' },
] as const

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function Hearts({ src = '/heart.png', count = 22 }: { src?: string; count?: number }) {
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
          ['--delay' as any]: `${rand(0, 10).toFixed(2)}s`,
          ['--opacity' as any]: rand(0.22, 0.5).toFixed(2),
          ['--rot' as any]: `${rand(-220, 220).toFixed(0)}deg`,
          top: `${rand(-100, 0).toFixed(0)}vh`,
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

function TabButton({
  active,
  onClick,
  label,
  subtitle,
  accentDot,
}: {
  active: boolean
  onClick: () => void
  label: string
  subtitle: string
  accentDot: string
}) {
  return (
    <button
      onClick={onClick}
      className={`
        group w-full text-left rounded-2xl px-4 py-3 border transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender/60
        ${active ? 'bg-white/75 border-lavender/30 shadow-sm' : 'bg-white/55 border-white/40 hover:bg-white/70'}
      `}
    >
      <div className="flex items-start gap-3">
        <span className={`mt-1.5 w-3 h-3 rounded-full ${accentDot}`} />
        <div className="space-y-0.5">
          <div className="font-medium">{label}</div>
          <div className="text-xs text-muted">{subtitle}</div>
        </div>
      </div>
    </button>
  )
}

function DataEngineeringSection() {
  return (
    <section className="space-y-10">

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {dataSkills.map(({ skill, pill, dot }) => (
            <span
              key={skill}
              className={`
                inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm
                ${pill} border border-white/40 hover:shadow-sm hover:scale-[1.02] transition
              `}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">GitHub Projects</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Modern Analytics Stack', desc: 'dbt + Snowflake models with quality checks and clean semantic layers.' },
            { title: 'Reliable Pipelines', desc: 'Orchestrated ELT with retries, observability, and stakeholder-friendly docs.' },
          ].map((p) => (
            <div
              key={p.title}
              className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-3 hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold">{p.title}</h4>
              <p className="text-sm text-muted">{p.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-lavender/35">dbt</span>
                <span className="px-2 py-1 rounded-full bg-sky/30">SQL</span>
                <span className="px-2 py-1 rounded-full bg-mint/35">Snowflake</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdoraboardSection() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-serif flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-peach" />
          Adoraboard
        </h2>
        <p className="text-muted max-w-2xl">
          My keyboard company—design, manufacturing, community, and all the tiny details that make a board feel special.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: 'Product Design', desc: 'Layouts, aesthetics, sound profile goals, iterations.' },
          { title: 'Ops & Manufacturing', desc: 'Vendors, timelines, QA, shipping realities (the fun kind of chaos).' },
          { title: 'Brand & Community', desc: 'Storytelling, launches, photos, customer care.' },
          { title: 'What I’m Building Next', desc: 'Tease upcoming releases, prototypes, or a roadmap.' },
        ].map((c) => (
          <div key={c.title} className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-2">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-sm text-muted">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-lavender/20 bg-white/60 p-5 space-y-2">
        <div className="font-medium">Drop links here</div>
        <p className="text-sm text-muted">Website · Instagram · Shop · Notion updates · YouTube build logs</p>
      </div>
    </section>
  )
}

function HobbiesSection() {
  const hobbies = [
    { title: 'Singing', desc: 'Warm-ups, harmonies, open mics, or covers you love.' },
    { title: 'Guitar', desc: 'Favorite styles, practice routines, current songs.' },
    { title: 'Hiking', desc: 'Trail photos, peak lists, and the “why” behind it.' },
    { title: 'Other', desc: 'Anything else you want people to know—cute + human.' },
  ]

  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-serif flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-butter" />
          Life & Hobbies
        </h2>
        <p className="text-muted max-w-2xl">
          The non-data parts of me—creative energy, outdoors time, and the stuff I’m always tinkering with.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {hobbies.map((h) => (
          <div
            key={h.title}
            className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-2 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{h.title}</h3>
            <p className="text-sm text-muted">{h.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-lavender/20 bg-white/60 p-5 space-y-2">
        <div className="font-medium">Optional: a tiny gallery</div>
        <p className="text-sm text-muted">Add 3–6 photos (hikes, performances, guitars, keyboards) for instant personality.</p>
      </div>
    </section>
  )
}

export default function Home() {
  const [tab, setTab] = React.useState<TabKey>('data')

  return (
    <>
      <Hearts src="/heart.png" count={30} />

      <main className="min-h-screen bg-base text-text px-6 py-16 space-y-12">
        {/* HERO */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-serif tracking-tight">Naomi Haddon</h1>
          <p className="text-lg text-muted">Data Engineer · Analytics Engineer</p>
          <p className="max-w-2xl mx-auto">
            I build thoughtful data systems — and I also make keyboards, sing, hike, and collect little joys.
          </p>

          {/* TABS */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-3 pt-4">
            <TabButton
              active={tab === 'data'}
              onClick={() => setTab('data')}
              label="Data Engineering"
              subtitle="Work, projects, skills"
              accentDot="bg-mint"
            />
            <TabButton
              active={tab === 'adora'}
              onClick={() => setTab('adora')}
              label="Adoraboard"
              subtitle="My keyboard company"
              accentDot="bg-peach"
            />
            <TabButton
              active={tab === 'hobbies'}
              onClick={() => setTab('hobbies')}
              label="Life & Hobbies"
              subtitle="Singing, guitar, hiking"
              accentDot="bg-butter"
            />
          </div>
        </section>

        {/* ACTIVE SECTION */}
        <section className="max-w-5xl mx-auto">
          {tab === 'data' && <DataEngineeringSection />}
          {tab === 'adora' && <AdoraboardSection />}
          {tab === 'hobbies' && <HobbiesSection />}
        </section>

        {/* FOOTER */}
        <footer className="text-center text-sm text-muted pt-10">
          <p>© Naomi Haddon ✦ Built with care</p>
        </footer>
      </main>
    </>
  )
}
