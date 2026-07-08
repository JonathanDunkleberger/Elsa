export default function NotFound() {
  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden animate-page-in">
      <main className="text-center px-6 sm:px-8 max-w-2xl relative z-10">
        <h1 className="font-serif font-normal text-plum tracking-display leading-none mb-8 text-3xl sm:text-4xl">
          Elsa Research
        </h1>
        <div className="w-12 h-px bg-plum/25 mx-auto mb-8" />
        <p className="font-serif italic font-light text-plum-light leading-relaxed tracking-subtle mb-12 text-base">
          This page is not available.
        </p>
        <a
          href="/"
          className="text-xs font-sans font-normal text-plum-muted tracking-label uppercase transition-all duration-400 hover:text-plum border-b border-transparent hover:border-plum pb-0.5"
        >
          Return
        </a>
      </main>
      <footer className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 py-6 flex justify-center">
        <span className="text-[0.65rem] font-sans font-light text-plum-faint tracking-fine uppercase">
          © {new Date().getFullYear()} Elsa Research. Privately Held.
        </span>
      </footer>
    </div>
  );
}
