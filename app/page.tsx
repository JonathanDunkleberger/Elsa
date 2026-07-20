export default function Home() {
  return (
    <div className="relative flex min-h-[100svh] w-full flex-col items-center overflow-hidden bg-cream animate-page-in">
      {/* Versailles header — absolute so lockup can center on the full page */}
      <header className="pointer-events-none absolute top-0 left-0 right-0 z-0 h-[clamp(180px,32vh,380px)] overflow-hidden">
        <img
          src="/versailles.jpg"
          alt=""
          role="presentation"
          className="h-full w-full object-cover object-[center_35%]"
          loading="eager"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-cream via-cream/80 to-transparent"
          aria-hidden="true"
        />
      </header>

      {/* One composition: wordmark → mandate → portal */}
      <main className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-6 pb-20 pt-8 text-center sm:px-8 -translate-y-[4vh] sm:-translate-y-[5vh]">
        <h1 className="font-serif font-normal text-plum text-[2rem] tracking-[0.25em] sm:text-[2.45rem] pl-[0.25em]">
          Elsa Research
        </h1>

        <p className="mt-5 font-serif text-[0.7rem] uppercase tracking-[0.35em] pl-[0.35em] text-plum/55">
          Privately Held
        </p>

        <div className="mt-8 mb-8 h-px w-12 bg-plum/30" aria-hidden="true" />

        <p className="max-w-lg font-serif italic font-normal text-plum/85 text-[1.05rem] leading-relaxed tracking-wide sm:text-[1.15rem]">
          Bespoke advisory and technological incubation for complex corporate
          actions.
        </p>

        <p className="mt-8 max-w-md font-serif font-normal text-plum/65 text-[0.95rem] leading-loose tracking-wide sm:text-base">
          Elsa Research advises on complex matters across jurisdictions and
          develops certain interests for its own account. The firm does not
          publish its clients, its mandates, or its results.
        </p>

        <a
          href="/portal"
          className="mt-12 font-serif text-[0.7rem] uppercase tracking-[0.28em] text-plum/60 transition-opacity duration-300 hover:text-plum"
        >
          Client Portal
        </a>
      </main>

      {/* Jurisdictions — quiet legitimacy at the foot */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 px-6 py-6 sm:px-8">
        <p className="text-center font-serif text-[0.6rem] uppercase tracking-[0.2em] text-plum/35 leading-relaxed">
          London&ensp;·&ensp;Phoenix&ensp;·&ensp;Amsterdam&ensp;·&ensp;Paris&ensp;·&ensp;Zurich&ensp;·&ensp;Frankfurt&ensp;·&ensp;Hong&nbsp;Kong
        </p>
      </footer>
    </div>
  );
}
