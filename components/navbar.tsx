"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const SECTIONS = ["tracks", "outcomes", "pricing", "faq"] as const
type SectionId = (typeof SECTIONS)[number]

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<SectionId | null>(null)

  // Observe section visibility to highlight active link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id as SectionId)
      },
      {
        // Trigger when 40% of a section is visible
        threshold: [0.4],
        rootMargin: "-80px 0px -40% 0px",
      },
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Smooth-scroll with offset for fixed navbar
  const onClickAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    const y = el.getBoundingClientRect().top + window.scrollY - 88 // approx navbar height + gap
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  const linkClass = (id: SectionId) =>
    cn("transition-colors", active === id ? "text-white" : "text-white/70 hover:text-white")

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 mx-auto mt-4 max-w-5xl px-4", className)} aria-label="Primary">
      <div
        className={cn(
          "flex items-center justify-between gap-4 rounded-2xl border",
          "border-white/10 bg-white/[0.04] px-6 py-3",
          "backdrop-blur-md supports-[backdrop-filter]:bg-white/[0.04]",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.3)]",
        )}
      >
        <a href="#top" className="flex items-center gap-2" onClick={(e) => onClickAnchor(e, "tracks")}>
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white/90 text-xs font-bold"
          >
            T
          </span>
          <span className="sr-only">Home</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex" role="navigation" aria-label="In-page">
          <a
            href="#tracks"
            onClick={(e) => onClickAnchor(e, "tracks")}
            className={linkClass("tracks")}
            aria-current={active === "tracks" ? "page" : undefined}
          >
            Tracks
          </a>
          <a
            href="#outcomes"
            onClick={(e) => onClickAnchor(e, "outcomes")}
            className={linkClass("outcomes")}
            aria-current={active === "outcomes" ? "page" : undefined}
          >
            Outcomes
          </a>
          <a
            href="#pricing"
            onClick={(e) => onClickAnchor(e, "pricing")}
            className={linkClass("pricing")}
            aria-current={active === "pricing" ? "page" : undefined}
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={(e) => onClickAnchor(e, "faq")}
            className={linkClass("faq")}
            aria-current={active === "faq" ? "page" : undefined}
          >
            FAQ
          </a>
        </nav>

        <a
          href="#pricing"
          onClick={(e) => onClickAnchor(e, "pricing")}
          className={cn(
            "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium",
            "bg-red-600 text-white",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_12px_30px_-6px_rgba(239,68,68,0.60)]",
            "ring-1 ring-inset ring-white/10 hover:bg-red-500 transition-colors",
          )}
        >
          Apply Now
        </a>
      </div>
    </header>
  )
}
