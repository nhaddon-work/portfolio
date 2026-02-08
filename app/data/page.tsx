'use client'

import React from 'react'
import Hearts from '../components/Hearts'
import MiniPlayer from '../components/MiniPlayer'
import Link from 'next/link'

type SkillItem = { skill: string; pill: string; dot: string }

const dataSkills: SkillItem[] = [
  { skill: 'Python', pill: 'bg-mint/35', dot: 'bg-mint' },
  { skill: 'SQL', pill: 'bg-sky/30', dot: 'bg-sky' },
  { skill: 'Snowflake', pill: 'bg-lavender/30', dot: 'bg-lavender' },
  { skill: 'dbt Core', pill: 'bg-peach/35', dot: 'bg-peach' },
  { skill: 'Airflow', pill: 'bg-butter/45', dot: 'bg-butter' },
  { skill: 'AWS', pill: 'bg-sky/30', dot: 'bg-sky' },
  { skill: 'Data Modeling', pill: 'bg-mint/35', dot: 'bg-mint' },
  { skill: 'CI/CD', pill: 'bg-butter/45', dot: 'bg-butter' },
  { skill: 'Docker', pill: 'bg-peach/35', dot: 'bg-peach' },
  { skill: 'Tableau', pill: 'bg-mint/35', dot: 'bg-mint' },
  { skill: 'Git', pill: 'bg-sky/30', dot: 'bg-sky' },
  { skill: 'dltHub', pill: 'bg-lavender/30', dot: 'bg-lavender' },
  { skill: 'Terraform', pill: 'bg-butter/45', dot: 'bg-butter' },
] as const

function InfoCard({
  title,
  dot,
  children,
}: {
  title: string
  dot: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-2">
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="text-sm text-muted leading-relaxed">{children}</div>
    </div>
  )
}

export default function DataPage() {
  return (
    <>
      {/* FORCE hearts to sit above everything on this page */}
      <div className="pointer-events-none fixed inset-0 z-[9999]">
        <Hearts src="/heart.png" count={26} />
      </div>

      <main className="relative min-h-screen bg-base text-text px-6 py-16 space-y-12">
        <header className="max-w-6xl mx-auto space-y-4">
          <Link href="/" className="text-sm text-muted hover:underline">
            ← Back home
          </Link>

          <h1 className="text-4xl font-serif tracking-tight">Data Engineering</h1>

          <p className="text-muted max-w-3xl">
            I design and build calm, reliable data systems with a focus on clarity, durability, and long-term usefulness. I
            care about reducing operational noise, aligning systems to real questions, and creating foundations teams can
            trust without constant intervention.
          </p>

          <MiniPlayer />
        </header>

        <section className="max-w-6xl mx-auto space-y-10">

          {/* Skills */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Skills</h2>
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

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">GitHub Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Modern Analytics Stack',
                  desc: 'dbt snapshots and complex business logic models tracking dimensions and slowly changing data across Snowflake.',
                  tags: ['dbt', 'SQL', 'Snowflake'],
                  link: 'https://github.com/nhaddon-work/pipelines/tree/main/schema-sidetrade/core/dbt_project',
                },
                {
                  title: 'Reliable Pipelines',
                  desc: 'ELT orchestration handling diverse data sources with complex custom scripting and robust error handling.',
                  tags: ['Airflow', 'Python', 'AWS'],
                  link: 'https://github.com/nhaddon-work/pipelines',
                },
              ].map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-3 hover:shadow-md hover:border-lavender/40 transition block"
                >
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-full bg-lavender/25">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-muted pt-6">
          <p>© Naomi Haddon ✦ Built with care</p>
        </footer>
      </main>
    </>
  )
}
