export default function Home() {
  return (
    <div className="relative flex min-h-[100svh] w-full flex-col items-center overflow-hidden bg-cream animate-page-in">
      {/* Versailles header — fades into parchment */}
      <header className="relative w-full shrink-0 h-[clamp(180px,32vh,380px)] overflow-hidden">
        <img
          src="/versailles.jpg"
          alt=""
          role="presentation"
          className="h-full w-full object-cover object-[center_35%]"
          loading="eager"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-cream via-cream/80 to-transparent"
          aria-hidden="true"
        />
      </header>

      {/* Centered lockup */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-4 text-center sm:px-8">
        <h1 className="font-serif font-normal text-plum text-[1.65rem] tracking-[0.25em] sm:text-[2rem] pl-[0.25em]">
          Elsa Research
        </h1>

        <div className="mt-6 mb-7 h-px w-10 bg-plum/35" aria-hidden="true" />

        <p className="max-w-md font-serif italic font-normal text-plum/80 text-[0.95rem] leading-relaxed tracking-wide sm:text-base">
          Bespoke advisory and technological incubation for complex corporate
          actions.
        </p>
      </main>

      {/* Footer links — small, uppercase, spaced */}
      <nav
        aria-label="Primary"
        className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-6 px-6 py-8 sm:gap-10"
      >
        <a
          href="mailto:inquiries@elsaresearch.co"
          className="font-serif text-[0.65rem] uppercase tracking-[0.22em] text-plum/70 transition-opacity duration-300 hover:opacity-100 hover:text-plum"
        >
          Inquiries
        </a>
        <span className="text-plum/25 text-[0.5rem]" aria-hidden="true">
          ·
        </span>
        <a
          href="/portal"
          className="font-serif text-[0.65rem] uppercase tracking-[0.22em] text-plum/70 transition-opacity duration-300 hover:opacity-100 hover:text-plum"
        >
          Client Portal
        </a>
      </nav>
    </div>
  );
}
