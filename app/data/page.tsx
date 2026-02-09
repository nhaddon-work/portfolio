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

function TestimonialsCarousel({
  testimonials,
  intervalMs = 7000,
}: {
  testimonials: { quote: string; author: string; role?: string }[]
  intervalMs?: number
}) {
  const [index, setIndex] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  // Auto-advance
  React.useEffect(() => {
    if (paused || testimonials.length <= 1) return

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [paused, intervalMs, testimonials.length])

  const t = testimonials[index]

  return (
    <div
      className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-4 hover:shadow-md transition relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Quote */}
      <p
        key={`quote-${index}`}
        className="text-sm text-muted leading-relaxed animate-[fadeIn_400ms_ease-out]"
      >
        “{t.quote}”
      </p>

      {/* Author */}
      <footer className="pt-2 text-sm font-medium">
        — {t.author}
        {t.role && <span className="text-muted font-normal">, {t.role}</span>}
      </footer>

      {/* Dots */}
      {testimonials.length > 1 && (
        <div className="flex items-center gap-2 pt-2">
          {testimonials.map((_, i) => (
            <button
              key={`dot-${i}`}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? 'bg-sky' : 'bg-lavender/40 hover:bg-lavender/70'
              }`}
            />
          ))}
          <span className="ml-2 text-xs text-muted">
            {paused ? 'Paused' : 'Auto'}
          </span>
        </div>
      )}

      {/* Minimal keyframes (Tailwind arbitrary animation expects keyframes exist; so we include fallback) */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

const experience: ExperienceItem[] = [
  {
    company: 'dbt Labs',
    role: 'Data Engineer',
    start: '2025',
    end: 'Present ~ Just Started!',
    location: 'Remote',
    highlights: [
      'Own and drive data observability, building freshness, volume, schema, and quality checks to surface issues early across pipelines.',
      'Partner with senior engineers on a new Iceberg-based data lake, supporting table setup, pipeline integration, and platform operations.',
    ],
    tech: [{ label: 'Terraform', pill: 'bg-butter/45', dot: 'bg-butter' }],
  },
  {
    company: 'PitchBook',
    role: 'Data Engineer',
    start: '2024',
    end: '2025 ~ 2 years',
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
    end: '2023 ~ 2.75 years',
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
    role: 'Data Analyst',
    start: '2020',
    end: '2021 ~ almost 1 year',
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

const summaryOfQualifications = [
  'Data-driven problem solver with 3 years of SQL & Python programming experience and aptitude for data visualization',
  'Analytics professional with aptitude for analytical problem solving and real-word applications of statistical theories',
  'Collaborative team player with 3-year of customer service experience, strong communication and interpersonal skills',
  'Proficient: SQL, Python, Tableau, ETL, R, Client/Server Side Development; Intermediate: Jupyter notebook, Git',
]

const education = {
  school: 'University of Washington',
  location: 'Seattle, WA',
  date: 'June 2020',
  degree: 'Bachelor of Science in Informatics – Data Science',
  gpa: '3.8/4.0',
  coursework:
    'Data Visualization (Dashboards, D3), Web Development (HTML, CSS, JavaScript), Statistics (Hypothesis Testing, Probability), ETL, Machine Learning (Regression, Tree-based models, NLP), Database Management (Relational Database Development)',
}

const testimonials = [
  {
    quote:
      'Naomi has been instrumental in pushing our project Sidetrade data forward, overcoming a series of tough setbacks and helping navigate complex cross-functional and cross-organizational requirements. Her work to secure access to Sidetrade and build out the necessary data tables was no small feat, especially given the intricate logic involved. She consistently sought to clarify requirements and iterated quickly toward the right solution. The quality of her work has been excellent, and collaborating with her has been a true highlight. Huge thanks to Naomi for her persistence, precision, and partnership!',
    author: 'Trent Thomas',
    role: 'Stakeholder / Collaborator',
  },
  {
    quote:
      "Your key strengths lie in your ability toadapt quickly, manage complexity, and deliver results across diverse data domains. You’ve shown great ownership in handling multiple data products simultaneously — from Finance and Content Management to Website and Advertising Performance — while maintaining attention to detail and quality. Your proactive communication and collaboration with cross-functional teams have been instrumental in moving projects forward and resolving dependencies effectively. Additionally, your eagerness to learn and apply AI concepts, such as building the Slack Chatbot on top of Snowflake MCP and a local LLM, demonstrates strong technical curiosity and forward-thinking initiative. Together, these strengths make you a reliable contributor who combines technical execution with business awareness and continuous learning.",
    author: 'Manish Sharma',
    role: 'Manager',
  }
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
    <main className="relative min-h-screen bg-base text-text px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link href="/" className="text-sm text-muted hover:underline">
          ← Back home
        </Link>

        <header className="space-y-2">
          <h1 className="text-4xl font-serif tracking-tight">Data Engineering</h1>
        </header>

        {/* SUMMARY */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Summary of Qualifications</h2>

          <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-4">
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              {summaryOfQualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

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

        {/* EDUCATION */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Education</h2>

          <div className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">
                {education.school}{' '}
                <span className="font-normal text-muted">· {education.location}</span>
              </h3>
              <p className="text-xs text-muted">{education.date}</p>
            </div>

            <p className="text-sm text-muted">
              {education.degree}{' '}
              <span className="text-muted">(Major GPA: {education.gpa})</span>
            </p>

            <p className="text-sm text-muted">
              <span className="font-medium text-text">Coursework:</span> {education.coursework}
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Testimonials</h2>
          <TestimonialsCarousel testimonials={testimonials} intervalMs={7000} />
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
  )
}