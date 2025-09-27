import { cn } from "@/lib/utils"

function Avatars() {
  const items = ["/member-1.png", "/member-2.png", "/member-3.png"]
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {items.map((src, i) => (
          <img
            key={i}
            src={src || "/placeholder.svg"}
            alt="Member avatar"
            className="h-7 w-7 rounded-full ring-2 ring-black/60"
          />
        ))}
      </div>
      <p className="ml-3 text-sm text-white/80">Join a growing community of ambitious builders</p>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative isolate">
      {/* Background vignette and subtle red glow */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(255,255,255,0.08),transparent_60%)]",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1/2 top-[42%] h-64 w-64 -translate-x-1/2 rounded-full blur-3xl",
          "bg-red-500/20",
        )}
      />

      <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/10",
            "bg-white/[0.04] px-4 py-1 text-sm text-white/80",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
          )}
        >
          Tomatrix Internship 2025
        </span>

        <h1 className={cn("mt-6 text-balance font-semibold tracking-tight", "text-5xl sm:text-6xl md:text-7xl")}>
          <span className="text-white">AI‑First Careers in </span>
          <span className="text-white">7 Days</span>
        </h1>

        <p className={cn("mt-3 text-balance text-4xl sm:text-5xl md:text-6xl")}>
          <span className="text-white">Change your </span>
          <span className="font-serif italic text-white/90">career</span>
          <span className="text-white/80"> trajectory</span>
        </p>

        <p className="mt-4 text-lg text-white/60">Seats are limited — we don’t accept passengers</p>
        <p className="mt-2 text-base text-white/70">
          Limited‑Time Offer Fee: <span className="text-white font-semibold">₹2,000</span>{" "}
          <span className="text-white/50 line-through">(₹3,500)</span>
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className={cn(
              "inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium",
              "bg-red-600 text-white",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_20px_40px_-10px_rgba(239,68,68,0.65)]",
              "ring-1 ring-inset ring-white/10 hover:bg-red-500 transition-colors",
            )}
          >
            Apply now
          </a>

          <a
            href="#tracks"
            className={cn(
              "inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium",
              "bg-white/[0.06] text-white/90",
              "ring-1 ring-inset ring-white/10 hover:bg-white/[0.08] transition-colors",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
            )}
          >
            Explore Tracks
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <Avatars />
        </div>
      </div>
    </section>
  )
}
