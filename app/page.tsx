import { LockIcon } from "./components/icons";

function Spread({ text, className }: { text: string; className: string }) {
  return (
    <span className={`flex justify-between leading-none ${className}`}>
      {text.split("").map((c, i) => (
        <span key={i}>{c}</span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden animate-page-in">
      {/* ─── Architectural photo strip — muted archival duotone ─── */}
      <div className="absolute top-0 left-0 right-0 h-[clamp(160px,28vh,340px)] overflow-hidden">
        <img
          src="/strip.jpg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center grayscale contrast-[0.85] brightness-110"
          loading="eager"
        />
        {/* Duotone: colorize the grayscale image with plum, deepen, veil */}
        <div className="absolute inset-0 bg-plum mix-blend-color pointer-events-none" />
        <div className="absolute inset-0 bg-plum/15 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-cream/25 pointer-events-none" />
        {/* Gradient fade: strip → cream */}
        <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-cream via-cream/85 to-transparent pointer-events-none" />
      </div>

      {/* Center content */}
      <main className="text-center px-6 sm:px-8 max-w-2xl mt-[clamp(24px,5vh,70px)] pb-20 relative z-10">
        {/* The wordmark lockup */}
        <h1
          aria-label="Elsa Research"
          className="mx-auto w-[min(272px,76vw)] sm:w-[312px] text-plum font-serif font-normal"
        >
          <span aria-hidden="true" className="block">
            <span className="block border-t border-plum/40" />
            <Spread
              text="ELSA"
              className="pt-[0.32em] text-[5.4rem] sm:text-[6.2rem]"
            />
            <Spread
              text="RESEARCH"
              className="pt-[0.72em] pb-[0.9em] text-[1.35rem] sm:text-[1.55rem]"
            />
            <span className="block border-t border-plum/40" />
          </span>
        </h1>
        <p className="pt-4 text-center font-sans text-[0.62rem] tracking-[0.35em] pl-[0.35em] text-plum-muted">
          PRIVATELY HELD
        </p>

        {/* Tagline */}
        <p className="font-serif italic font-light text-plum-light leading-relaxed tracking-subtle mt-12 mb-7 text-base sm:text-lg">
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
