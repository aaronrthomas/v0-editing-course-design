import type React from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { cn } from "@/lib/utils"

function SectionWrapper({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  )
}

function TracksSection() {
  const tracks = [
    {
      title: "AI-Powered Content Creation",
      outcome:
        "Master short-form video, image, and copy generation to produce compelling digital stories that perform.",
      tools: "Runway-style video editors, Pika-style generators, HeyGen, Kling AI, Eleven-style voice engines",
      capstone: "Produce and publish a 60-second AI-generated advert across social channels.",
    },
    {
      title: "AI-Driven Software Development",
      outcome: "Build production-ready apps with built-in intelligence.",
      tools: "FlutterFlow-style no-code, Supabase-style databases, Node/Python serverless functions",
      capstone: "Deploy a chat-enabled mobile app that gives AI-powered feedback to users.",
    },
    {
      title: "AI Automation & Agentic Development",
      outcome: "Design autonomous workflows and multi-step AI agents that save hours every day.",
      tools: "n8n-style automation builders, LangChain-style orchestration, Zapier-style interoperability",
      capstone: "Create a sales-funnel WhatsApp bot that qualifies leads end-to-end.",
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
          Tracks
        </span>
        <h2 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl">What You'll Learn</h2>
        <p className="mt-3 text-white/70">
          Choose a track and finish with a capstone you can show employers and clients.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {tracks.map((track, i) => (
          <div
            key={track.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="mb-4">
              <span className="text-sm text-blue-400 font-medium">Track {i + 1}</span>
              <h3 className="text-2xl font-semibold text-white mt-1">{track.title}</h3>
            </div>
            <p className="text-white/80 mb-6">{track.outcome}</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-white font-medium mb-2">Tools We Train On</h4>
                <p className="text-sm text-white/70">{track.tools}</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Capstone</h4>
                <p className="text-sm text-white/70">{track.capstone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function OutcomesSection() {
  const outcomes = [
    "Portfolio-Ready Capstone hosted on GitHub / Play Store TestFlight",
    "Industry-Recognised Certificate from Tomatrix Technologies",
    "Access to a Premium AI Tool Suite during the internship",
    "Mentor Hours and Daily Support via dedicated Discord channels",
    "Lifetime Alumni Community with job leads and tech AMAs",
    "Letters of Recommendation for top performers",
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
          Outcomes
        </span>
        <h2 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl">Outcomes and Portfolio</h2>
        <p className="mt-3 text-white/70">What you'll walk away with after 7 days</p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {outcomes.map((outcome) => (
          <div
            key={outcome}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="mt-1 h-2 w-2 rounded-full bg-blue-400 flex-shrink-0" />
            <p className="text-white/90">{outcome}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "₹2,000",
      originalPrice: "₹3,500",
      popular: false,
      features: [
        "Access to all sessions (live+recorded)",
        "Discord mentor support",
        "Capstone project",
        "Access to Premium AI Tool Suite",
        "Certificate on completion",
      ],
    },
    {
      name: "Pro",
      price: "₹5,000",
      popular: false,
      features: [
        "Everything in Basic",
        "Small-group mentor clinic",
        "Capstone showcase feedback",
        "Client-ready portfolio checklist",
      ],
    },
    {
      name: "Premium",
      price: "₹9,500",
      popular: true,
      features: ["Everything in Pro", "1:1 capstone review", "Referrals and top-performer LOR", "Alumni demo day slot"],
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
          Pricing
        </span>
        <h2 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl">Sign Up</h2>
        <p className="mt-3 text-white/70">Let's see what suits best.</p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-2xl border p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
              plan.popular ? "border-blue-500/50 bg-blue-500/[0.03]" : "border-white/10 bg-white/[0.03]",
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">Most popular</span>
              </div>
            )}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.originalPrice && (
                  <span className="ml-2 text-lg text-white/50 line-through">{plan.originalPrice}</span>
                )}
              </div>
              {plan.name === "Basic" && (
                <p className="mt-2 text-sm text-red-400">Limited-Time Offer (while seats last)</p>
              )}
            </div>
            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-white/80">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-400 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#registration"
              className={cn(
                "mt-8 block w-full rounded-xl py-3 text-center font-medium transition-colors",
                plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "border border-white/20 bg-white/[0.05] text-white hover:bg-white/[0.1]",
              )}
            >
              Choose {plan.name}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <h3 className="text-xl font-semibold text-white mb-4">How to Enroll</h3>
          <div className="space-y-4 text-left text-white/80">
            <p>
              <strong className="text-white">1)</strong> Complete the application form
            </p>
            <p>
              <strong className="text-white">2)</strong> Pay the internship fee
            </p>
            <div className="ml-6 text-sm text-white/70 space-y-1">
              <p>Account Name: Tomatrix Technologies</p>
              <p>Account No: 50200091836977</p>
              <p>IFSC: HDFC0006910</p>
              <p>UPI: giftontombiju-2@okhdfcbank</p>
            </div>
            <p>
              <strong className="text-white">3)</strong> Receive onboarding kit & calendar within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQSection() {
  const faqs = [
    {
      q: "Who is this internship for?",
      a: "Students, early professionals, and career switchers who want a fast, execution-first pathway into applied AI.",
    },
    {
      q: "How long will it take to learn everything?",
      a: "The core internship runs in 7 days, with lifetime alumni access and a capstone you can keep improving after the program.",
    },
    {
      q: "Is it hard to learn AI tools and systems?",
      a: "We teach by building: clear steps, proven workflows, and mentor support to get from 'hello world' to shipped.",
    },
    {
      q: "Can this help me earn?",
      a: "Yes — each track culminates in a portfolio-ready capstone that can be used to pitch clients or employers with tangible proof of skill.",
    },
    {
      q: "Can I get a refund?",
      a: "Cohort seats are limited; fees are generally non-refundable once access and onboarding are provided.",
    },
    {
      q: "Do I get tool access?",
      a: "Yes — you'll receive access to a Premium AI Tool Suite for the internship duration.",
    },
  ]

  return (
    <div className="mx-auto max-w-4xl px-4 py-24">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
          FAQ
        </span>
        <h2 className="mt-6 text-balance text-3xl font-semibold text-white sm:text-4xl">Frequently Asked Questions</h2>
      </div>

      <div className="mt-12 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <h3 className="text-lg font-medium text-white mb-3">{faq.q}</h3>
            <p className="text-white/70">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Navbar />
      <div id="top" />
      <Hero />
      {/* Decorative bottom rounded white panel hint (as seen in screenshot) */}
      <div aria-hidden className="pointer-events-none mx-auto mb-20 mt-6 h-20 w-[92%] rounded-t-3xl bg-white/5" />
      <SectionWrapper id="tracks">
        <TracksSection />
      </SectionWrapper>
      <SectionWrapper id="outcomes">
        <OutcomesSection />
      </SectionWrapper>
      <SectionWrapper id="pricing">
        <PricingSection />
      </SectionWrapper>
      <SectionWrapper id="faq">
        <FAQSection />
      </SectionWrapper>
    </main>
  )
}
