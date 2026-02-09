'use client'

import React from 'react'
import Link from 'next/link'

type TechPill = { label: string; pill: string; dot: string }

type ExperienceItem = {
  company: string
  role: string
  start: string
  end: string
  location?: string
  highlights: string[]
  tech: TechPill[]
}

const experience: ExperienceItem[] = [
  {
    company: 'dbt Labs',
    role: 'Data Engineer',
    start: '',
    end: 'Present',
    location: 'Remote',
    highlights: [
      'Improved data quality through testing, alerts, and pipeline audits, increasing trust in analytics outputs.',
      'Partnered with stakeholders to translate business questions into durable, analytics-ready datasets.',
    ],
    tech: [
      { label: 'Python', pill: 'bg-mint/35', dot: 'bg-mint' },
      { label: 'Terraform', pill: 'bg-butter/45', dot: 'bg-butter' },
      { label: 'Snowflake', pill: 'bg-lavender/30', dot: 'bg-lavender' },
    ],
  },
  {
    company: 'PitchBook',
    role: 'Data Engineer',
    start: '2025',
    end: '2024 ~ 2 years',
    location: 'Seattle, WA',
    highlights: [
      'Built scalable ETL/ELT pipelines with Python, Meltano, and dltHub, eliminating manual workflows.',
      'Designed modular data models with dbt and SQLMesh to improve reuse and consistency.',
      'Managed Snowflake resources and roles via Terraform, standardizing infrastructure-as-code.',
      'Deployed CI/CD pipelines using Docker, GitLab, Airflow, and DataHub for reliable releases.',
      'Redesigned Snowflake database architecture to enable intuitive self-serve analytics.',
    ],
    tech: [
      { label: 'Python', pill: 'bg-mint/35', dot: 'bg-mint' },
      { label: 'dbt', pill: 'bg-peach/35', dot: 'bg-peach' },
      { label: 'Snowflake', pill: 'bg-lavender/30', dot: 'bg-lavender' },
      { label: 'Terraform', pill: 'bg-butter/45', dot: 'bg-butter' },
      { label: 'Airflow', pill: 'bg-butter/45', dot: 'bg-butter' },
      { label: 'Docker', pill: 'bg-peach/35', dot: 'bg-peach' },
    ],
  },
  {
    company: 'Amazon',
    role: 'Business Intelligence Engineer',
    start: '2021',
    end: '2023',
    location: 'Seattle, WA',
    highlights: [
      'Built and maintained 20+ ETL pipelines to transform large datasets for analytics use cases.',
      'Created standardized metric tables in SQL to reduce redundancy and metric churn.',
      'Designed dashboards in QuickSight and Tableau to track KPIs across multiple orgs.',
      'Conducted A/B tests to inform senior leadership decisions and product launches.',
    ],
    tech: [
      { label: 'SQL', pill: 'bg-sky/30', dot: 'bg-sky' },
      { label: 'Python', pill: 'bg-mint/35', dot: 'bg-mint' },
      { label: 'AWS', pill: 'bg-sky/30', dot: 'bg-sky' },
      { label: 'Tableau', pill: 'bg-mint/35', dot: 'bg-mint' },
    ],
  },
  {
    company: 'Recon Dynamics',
    role: 'Data Engineer',
    start: '2020',
    end: '2021',
    location: 'Seattle, WA',
    highlights: [
      'Developed R Shiny applications to visualize real-time vehicle usage for operational insights.',
      'Built ETL pipelines using Python and AWS services to support analytics reporting.',
      'Reduced execution time by 30% through testing and refactoring.',
    ],
    tech: [
      { label: 'R', pill: 'bg-lavender/30', dot: 'bg-lavender' },
      { label: 'Python', pill: 'bg-mint/35', dot: 'bg-mint' },
      { label: 'AWS', pill: 'bg-sky/30', dot: 'bg-sky' },
    ],
  },
]

const testimonials = [
  {
    title: "Focus on Focus",
    quote:
      "Naomi has been instrumental in pushing our project Sidetrade data forward, overcoming a series of tough setbacks and helping navigate complex cross-functional and cross-organizational requirements. Her work to secure access to Sidetrade and build out the necessary data tables was no small feat, especially given the intricate logic involved. She consistently sought to clarify requirements and iterated quickly toward the right solution. The quality of her work has been excellent, and collaborating with her has been a true highlight. Huge thanks to Naomi for her persistence, precision, and partnership!",
    author: "Trent Thomas",
    role: "Stakeholder / Collaborator", // optional
  },
]

const githubProjects = [
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
] as const

export default function DataPage() {
  return (
    <>
      <main className="relative min-h-screen bg-base text-text px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-10">
          <Link href="/" className="text-sm text-muted hover:underline">
            ← Back home
          </Link>
        
          <header className="space-y-2">
            <h1 className="text-4xl font-serif tracking-tight">Data Engineering</h1>
            <p className="text-muted max-w-3xl">
              Data engineer focused on building calm, durable data systems teams can trust.
            </p>
          </header>

          {/* EXPERIENCE */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Experience</h2>

            <div className="space-y-4">
              {experience.map((job) => (
                <div
                  key={`${job.company}-${job.role}`}
                  className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-4"
                >
                  <div>
                    <h3 className="text-lg font-semibold">
                      {job.role}{' '}
                      <span className="font-normal text-muted">· {job.company}</span>
                    </h3>
                    <p className="text-xs text-muted">
                      {job.start} — {job.end}
                      {job.location ? ` · ${job.location}` : ''}
                    </p>
                  </div>

                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t.label}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${t.pill} border border-white/40`}
                      >
                        <span className={`w-2 h-2 rounded-full ${t.dot}`} />
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* TESTIMONIALS */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">What People Say</h2>
          
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <blockquote
                  key={i}
                  className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-4 hover:shadow-md transition"
                >
                  {/* Quote title */}
                  <h3 className="text-lg font-semibold text-sky">
                    {t.title}
                  </h3>
          
                  {/* Quote text */}
                  <p className="text-sm text-muted leading-relaxed">
                    “{t.quote}”
                  </p>
          
                  {/* Author */}
                  <footer className="pt-2 text-sm font-medium">
                    — {t.author}
                    {t.role && (
                      <span className="text-muted font-normal">
                        , {t.role}
                      </span>
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* GITHUB PROJECTS */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">GitHub Projects</h2>
          
            <div className="grid md:grid-cols-2 gap-6">
              {githubProjects.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-3 hover:shadow-md hover:border-lavender/40 transition block"
                >
                  {/* Title acts as the visible link */}
                  <h3 className="text-lg font-semibold underline underline-offset-4 decoration-transparent group-hover:decoration-sky transition">
                    {p.title}
                  </h3>
          
                  <p className="text-sm text-muted">{p.desc}</p>
          
                  <div className="flex flex-wrap gap-2 text-xs">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-full bg-lavender/25 border border-white/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          <footer className="text-center text-sm text-muted pt-6">
            © Naomi Haddon ✦ Built with care
          </footer>
        </div>
      </main>
    </>
  )
}