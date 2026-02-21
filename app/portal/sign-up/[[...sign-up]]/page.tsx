import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6">
      <a href="/" className="font-serif text-plum text-2xl tracking-display mb-10 hover:opacity-70 transition-opacity">
        Elsa Research
      </a>
      <SignUp
        routing="path"
        path="/portal/sign-up"
        signInUrl="/portal/sign-in"
        fallbackRedirectUrl="/portal"
        appearance={{
          variables: {
            colorPrimary: "#3B2A4A",
            colorBackground: "#FAF7F3",
            colorText: "#3B2A4A",
            colorTextSecondary: "#5A4A6A",
            colorInputBackground: "#F4EDE4",
            colorInputText: "#3B2A4A",
            borderRadius: "0.25rem",
            fontFamily: "'EB Garamond', Georgia, serif",
          },
          elements: {
            card: "shadow-none border border-plum/10",
            headerTitle: "font-serif tracking-wide",
            headerSubtitle: "font-sans text-sm",
            formButtonPrimary: "bg-plum hover:bg-plum-light text-cream font-sans text-xs uppercase tracking-label",
            footerActionLink: "text-plum-muted hover:text-plum",
          },
        }}
      />
    </div>
  );
}
