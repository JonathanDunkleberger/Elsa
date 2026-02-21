import { UserButton } from "@clerk/nextjs";

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-plum/10">
        <a href="/" className="font-serif text-plum text-xl tracking-display hover:opacity-70 transition-opacity">
          Elsa Research
        </a>
        <UserButton
          appearance={{
            variables: { colorPrimary: "#3B2A4A" },
          }}
        />
      </header>

      {/* Content */}
      <main className="flex flex-col items-center justify-center px-8 py-24">
        <h1 className="font-serif text-plum text-3xl tracking-display mb-6">
          Client Portal
        </h1>
        <div className="w-12 h-px bg-plum/25 mb-6" />
        <p className="font-serif italic text-plum-light text-center max-w-md leading-relaxed">
          Secure workspace under development. Additional capabilities
          will be made available to authorized clients on a rolling basis.
        </p>
      </main>
    </div>
  );
}
