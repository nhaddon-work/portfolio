'use client'

import React from 'react'
import Hearts from '../components/Hearts'
import Link from 'next/link'

type SkillItem = { skill: string; pill: string; dot: string }

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

          <p className="text-[11px] text-muted/60 pt-1">
            For HR/legal paperwork only: legal name <span className="text-muted/80">Yu Du</span> (I go by Naomi Haddon).
          </p>
        </header>

        <section className="max-w-6xl mx-auto space-y-10">
          {/* How I work */}
          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard title="Clarity first" dot="bg-mint">
              I’m most effective when goals are well-defined and constraints are explicit. I tend to spend time upfront
              structuring ambiguous problems so the resulting systems are easier to reason about and maintain.
            </InfoCard>

            <InfoCard title="Durability over novelty" dot="bg-sky">
              I bias toward solutions that are boring in the best way: stable, understandable, and low-maintenance. I value
              observability, ownership, and documentation as much as initial delivery.
            </InfoCard>

            <InfoCard title="Autonomy with accountability" dot="bg-peach">
              Once direction is aligned, I prefer the space to design and execute thoughtfully. I communicate progress clearly
              and surface issues early rather than relying on reactive fixes.
            </InfoCard>
          </div>

          {/* Strengths + growth edges */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-lavender" />
                <h2 className="text-lg font-semibold">What I bring</h2>
              </div>
              <ul className="text-sm text-muted leading-relaxed list-disc pl-5 space-y-2">
                <li>Strong systems thinking across the data stack, from ingestion to analytics consumption.</li>
                <li>Ability to synthesize vague or unspoken stakeholder needs into concrete, usable models.</li>
                <li>A calm, steady working style that prioritizes quality and sustainability over speed theatrics.</li>
                <li>Clear, structured communication and a bias toward shared understanding.</li>
              </ul>
            </div>

            <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-butter" />
                <h2 className="text-lg font-semibold">Areas I’m continuing to develop</h2>
              </div>
              <ul className="text-sm text-muted leading-relaxed list-disc pl-5 space-y-2">
                <li>Navigating highly performative or politically complex environments with greater efficiency.</li>
                <li>Managing upward while preserving focus and boundaries.</li>
                <li>Maintaining strategic distance from short-term noise and constant firefighting.</li>
              </ul>
              <p className="text-xs text-muted/80">
                I approach these as skills to refine rather than traits to suppress — long-term effectiveness matters more than
                short-term optics.
              </p>
            </div>
          </div>

          {/* When I’m at my best */}
          <div className="bg-white/60 border border-lavender/20 rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-butter" />
              <h2 className="text-lg font-semibold">When I’m at my best</h2>
            </div>
            <p className="text-sm text-muted leading-relaxed mt-2 max-w-4xl">
              I’m at my best when I’m trusted to manage my own time and approach, aligned to meaningful outcomes rather than
              rigid processes. In those conditions, I consistently build systems that are intuitive to use, quietly reliable,
              and valuable over the long term.
            </p>
          </div>

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
                  desc: 'dbt + Snowflake models with quality checks and clean semantic layers.',
                  tags: ['dbt', 'SQL', 'Snowflake'],
                },
                {
                  title: 'Reliable Pipelines',
                  desc: 'Orchestrated ELT with retries, observability, and stakeholder-friendly docs.',
                  tags: ['Airflow', 'Python', 'AWS'],
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-3 hover:shadow-md transition"
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
                </div>
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
