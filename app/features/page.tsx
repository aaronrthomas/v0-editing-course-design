import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Navbar />
      <section className="relative mx-auto max-w-5xl px-6 pt-16 pb-24">
        {/* Pill */}
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/10",
            "bg-white/[0.04] px-4 py-1 text-sm text-white/80",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
          )}
        >
          Features
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Is This Course <span className="font-serif italic text-white/90">For You</span>
        </h1>
        <p className="mt-3 text-lg text-white/60">
          See if you can relate to our community. These pillars describe who gets the most value.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Practice",
              body: "This course pushes you to practice daily with actionable prompts and projects that build real skills.",
            },
            {
              title: "Creative",
              body: "Unlock your creativity with structured lessons and community feedback to refine your taste and execution.",
            },
            {
              title: "Tools & Workflow",
              body: "Master the tools, plugins, and efficient workflows I use to deliver fast, quality edits.",
            },
            {
              title: "Community Support",
              body: "Get guidance from members and admins, share progress, and stay accountable.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={cn(
                "rounded-2xl border border-white/10 bg-white/[0.04] p-6",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_50px_-20px_rgba(0,0,0,0.6)]",
                "ring-1 ring-inset ring-white/5",
              )}
            >
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-white/70">{card.body}</p>
              <a href="/price" className="mt-4 inline-flex items-center gap-2 text-white hover:text-white/90">
                <span className="text-sm">Join now</span> <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
