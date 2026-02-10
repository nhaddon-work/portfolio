'use client'

import React from 'react'

type FollowRequestProps = {
  verifiedCount?: number
  formAction?: string
  defaultOpen?: boolean
}

export default function FollowRequest({
  verifiedCount = 0,
  formAction = 'https://formspree.io/f/xgolvqzz', // ← replace
  defaultOpen = false,
}: FollowRequestProps) {
  const [open, setOpen] = React.useState(defaultOpen)
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <div className="bg-white/70 border border-lavender/20 rounded-2xl p-3 hover:shadow-md transition">
      {/* Header row */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 text-left"
        aria-expanded={open}
      >
        <div className="space-y-0.5">
          <div className="text-sm font-medium flex items-center gap-2">
            <span className="select-none">✦</span>
            <span>Follow Me!</span>
          </div>
          <div className="text-xs text-muted">
            I’ll review it manually and email you when you’re approved ✉️
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Heart verified counter */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-white/40 bg-white/60"
            title="Count of verified followers"
            aria-label={`Count of verified followers: ${verifiedCount}`}
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
              <span className="text-red-500 text-sm leading-none">♥</span>
            </span>
            <div className="leading-tight">
              <div className="text-[10px] text-muted -mb-0.5">verified followers</div>
              <div className="text-xs font-semibold">{verifiedCount}</div>
            </div>
          </div>

          <span className="text-xs text-muted select-none">{open ? '⌃' : '⌄'}</span>
        </div>
      </button>

      {/* Collapsible body */}
      <div
        className={[
          'transition-[max-height,opacity,margin-top] duration-300 ease-out overflow-hidden',
          open ? 'max-h-[650px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0',
        ].join(' ')}
      >
        <div className="px-3 pb-3 space-y-4">
          <p className="text-sm text-muted">
            Share your name + work email, and answer a small “only us” prompt so I can
            recognize you. Once verified, I’ll add you to my subscriber list and notify you.
          </p>

          <form
            action={formAction}
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="grid gap-3"
          >
            <div className="grid md:grid-cols-2 gap-3">
              <input
                name="name"
                required
                placeholder="Name"
                className="w-full rounded-xl border border-lavender/20 bg-white/80 px-4 py-2 text-sm outline-none focus:ring-2"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-xl border border-lavender/20 bg-white/80 px-4 py-2 text-sm outline-none focus:ring-2"
              />
            </div>

            <textarea
              name="recognition_detail"
              required
              rows={4}
              placeholder="What’s something only you and I would know? (Keep it non-sensitive.)"
              className="w-full rounded-xl border border-lavender/20 bg-white/80 px-4 py-2 text-sm outline-none focus:ring-2"
            />

            <p className="text-xs text-muted">
              Please don’t share passwords, financial info, or anything sensitive.
              This is just a human-verification prompt.
            </p>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-lavender/40 hover:bg-lavender/50 transition"
            >
              Submit request
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
