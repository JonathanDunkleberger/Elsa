import { LockIcon } from "./components/icons";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      {/* ─── Architectural photo strip ─── */}
      <div className="absolute top-0 left-0 right-0 h-[clamp(140px,25vh,300px)] overflow-hidden animate-fade-in">
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
      <main className="text-center px-8 max-w-2xl mt-[clamp(24px,5vh,70px)] relative z-10">
        {/* The Name */}
        <h1 className="font-serif font-normal text-plum tracking-display leading-none mb-8 animate-fade-up delay-100 text-4xl sm:text-5xl md:text-6xl">
          Elsa Research
        </h1>

        {/* Separator */}
        <div className="w-12 h-px bg-plum/25 mx-auto mb-8 animate-fade-up delay-300" />

        {/* Tagline */}
        <p className="font-serif italic font-light text-plum-light leading-relaxed tracking-subtle mb-12 animate-fade-up delay-500 text-base sm:text-lg">
          Bespoke advisory and technological incubation
          <br className="hidden sm:block" />
          {" "}for complex corporate actions.
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-8 sm:gap-10 flex-wrap animate-fade-up delay-800">
          <a
            href="mailto:info@elsaresearch.co"
            className="group text-xs font-sans font-normal text-plum-muted tracking-label uppercase transition-all duration-400 hover:text-plum border-b border-transparent hover:border-plum pb-0.5"
          >
            Inquiries
          </a>

          <span className="w-[3px] h-[3px] rounded-full bg-plum/20" />

          <a
            href="/portal"
            className="group flex items-center gap-1.5 text-xs font-sans font-normal text-plum-muted tracking-label uppercase transition-all duration-400 hover:text-plum border-b border-transparent hover:border-plum pb-0.5"
          >
            <LockIcon />
            Client Portal
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 py-6 flex justify-between items-center animate-fade-up delay-1000">
        <span className="text-[0.65rem] font-sans font-light text-plum-faint tracking-fine uppercase">
          © {new Date().getFullYear()} Elsa Research. Privately Held.
        </span>
        <span className="text-[0.65rem] font-sans font-light text-plum-faint tracking-fine uppercase">
          Phoenix&ensp;·&ensp;Global
        </span>
      </footer>
    </div>
  );
}
