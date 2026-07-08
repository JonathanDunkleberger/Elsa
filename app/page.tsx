import { LockIcon } from "./components/icons";

export default function Home() {
  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden animate-page-in">
      {/* ─── Architectural photo strip ─── */}
      <div className="absolute top-0 left-0 right-0 h-[clamp(160px,28vh,340px)] overflow-hidden">
        <img
          src="/strip.jpg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient fade: strip → cream */}
        <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-cream via-cream/85 to-transparent pointer-events-none" />
      </div>

      {/* Center content */}
      <main className="text-center px-6 sm:px-8 max-w-2xl mt-[clamp(24px,5vh,70px)] pb-20 relative z-10">
        {/* The Name */}
        <h1 className="font-serif font-normal text-plum tracking-display leading-none mb-8 text-4xl sm:text-5xl md:text-6xl">
          Elsa Research
        </h1>

        {/* Separator */}
        <div className="w-12 h-px bg-plum/25 mx-auto mb-8" />

        {/* Tagline */}
        <p className="font-serif italic font-light text-plum-light leading-relaxed tracking-subtle mb-7 text-base sm:text-lg">
          Independent counsel. Private undertakings.
        </p>

        {/* Mandate */}
        <p className="font-serif font-normal text-plum-muted leading-loose tracking-subtle mb-12 mx-auto max-w-md text-sm sm:text-[0.9375rem]">
          Elsa Research advises on complex matters across jurisdictions and
          develops certain interests for its own account. The firm does not
          publish its clients, its mandates, or its results.
        </p>

        {/* Client Portal — the single interactive element */}
        <a
          href="/portal"
          className="group inline-flex items-center gap-1.5 text-xs font-sans font-normal text-plum-muted tracking-label uppercase transition-all duration-400 hover:text-plum border-b border-transparent hover:border-plum pb-0.5"
        >
          <LockIcon />
          Client Portal
        </a>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 py-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
        <span className="text-[0.65rem] font-sans font-light text-plum-faint tracking-fine uppercase whitespace-nowrap">
          © {new Date().getFullYear()} Elsa Research. Privately Held.
        </span>
        <span className="text-[0.65rem] font-sans font-light text-plum-faint tracking-fine uppercase text-center leading-relaxed">
          London&ensp;·&ensp;Phoenix&ensp;·&ensp;Amsterdam&ensp;·&ensp;Paris&ensp;·&ensp;Zurich&ensp;·&ensp;Frankfurt&ensp;·&ensp;Hong&nbsp;Kong
        </span>
      </footer>
    </div>
  );
}
