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

          <h1 className="text-4xl font-serif tracking-tight">
            Naomi Haddon — Builder, Innovator, Visionary
          </h1>

          <p className="text-muted max-w-6xl leading-relaxed mx-auto mb-4">
            I landed my first 'real' tech role at Amazon after my bachelor’s, navigating visa constraints and gender bias during COVID — with no network, no mentor, and no roadmap. Every step was uncharted, and I had to figure things out all on my own. From there, I’ve built a career by learning everything from scratch, over and over.
          </p>
          <p className="text-muted max-w-6xl leading-relaxed mx-auto mb-4">
            My husband’s chronic illness constantly reminds me how short and precious life is, and that I refuse to spend all my life building someone else’s dream. I spot market trends before they happen, turn side projects into profitable ventures, and consistently create systems that work even with minimal resources. I’ve bootstrapped ideas with almost zero investment, launched products that gain traction faster than expected, and built loyal followings without heavy marketing — all while navigating health challenges, personal obligations, and starting over as an immigrant with nothing but grit and curiosity.
          </p>
          <p className="text-muted max-w-6xl leading-relaxed mx-auto mb-4">
            My strength isn’t just in executing — it’s in seeing what’s next, acting fast, and turning vision into reality. Every project I touch is designed to scale, generate income, and expand influence. I experiment boldly, iterate quickly, and never waste time.
          </p>
    
        </header>

        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Adoraboard',
              desc: `Adoraboard is my first successful product brand — a line of keyboards that combines functionality, aesthetics, and personality.  

              What started as a simple solution for myself as a data engineer (everyone had their own setups, I didn’t) quickly turned into a brand with huge traction and loyal fans.  

              The best part? Minimal investment, massive payoff. Each set is a unique design from talented artists, sourced from China and assembled in the US. A small idea that scaled, a brand that sells itself through quality and cute vibe.`
            },
            {
              title: 'Tech Insights & Journals',
              desc: `I turn my experiences in data engineering, Amazon, and tech into actionable insights you can use.  

              These digital journals capture lessons, frameworks, and practical systems I’ve developed — from building data pipelines and automating workflows to structuring experiments and decision-making processes.  

              Each PDF is just $1, and this collection is still under development. You can also let me know what products or topics you’d like to see next, and I’ll create them based on your feedback.`
            },
            {
              title: 'Vision & Ambition',
              desc: `Since high school, I’ve carried a bold dream: helping humanity achieve immortality in some form.  
              
              Call it audacious or a guiding north star — it fuels everything I do.  
              
              Every project, product, and skill I build feeds into this vision. Whether I’m experimenting with small businesses, building brands, or exploring tech, my goal is not just financial success, but leaving a legacy and creating impact that lasts beyond a lifetime.`
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-white/70 border border-lavender/20 rounded-2xl p-6 space-y-2"
            >
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="text-sm text-muted whitespace-pre-line">{c.desc}</p>
            </div>
          ))}
        </section>

        <footer className="text-center text-sm text-muted pt-6">
          <p>© Naomi Haddon ✦ Built with strategy, impact, and audacity</p>
        </footer>
      </main>
    </>
  )
}