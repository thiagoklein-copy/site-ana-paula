import Image from "next/image";
import HighlightBox from "./HighlightBox";
import WhatsAppButton from "./WhatsAppButton";
import FadeIn from "./FadeIn";

const DIFFERENTIATORS = [
  {
    title: "Escuta Psicanalítica",
    description: "Acolhimento sem julgamento",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21c4.5-3.5 7.5-6.8 7.5-10.5A7.5 7.5 0 0012 3a7.5 7.5 0 00-7.5 7.5C4.5 14.2 7.5 17.5 12 21z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Todas as idades",
    description: "Crianças, adolescentes, adultos e idosos",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3.5 19c.5-3 2.8-5 5.5-5s5 2 5.5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13 19c.3-2 1.8-3.5 3.5-3.5 1.4 0 2.6 1 3.2 2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Presencial e Online",
    description: "Novo Hamburgo e todo o Brasil",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 12h17M12 3.5c2.5 2.8 3.8 5.6 3.8 8.5S14.5 17.7 12 20.5C9.5 17.7 8.2 14.9 8.2 12S9.5 6.3 12 3.5z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
] as const;

export default function Hero() {
  return (
    <section id="topo" aria-label="Apresentação" className="relative pt-20 sm:pt-24">
      {/* Full-bleed hero photo plane */}
      <div className="relative min-h-[78vh] overflow-hidden sm:min-h-[85vh]">
        {/* TODO: Swap placeholder with real Instagram photo of Ana Paula */}
        <Image
          src="/images/hero-placeholder.jpg"
          alt="Ana Paula Sobierai, psicóloga clínica em Novo Hamburgo"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/75 via-primary-dark/45 to-primary-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-primary-dark/20" />

        <div className="relative mx-auto flex h-full min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-28 pt-28 sm:min-h-[85vh] sm:pb-32 lg:px-8">
          <FadeIn className="max-w-2xl">
            <p className="mb-4 font-script text-lg italic text-beige/95 sm:text-xl">
              Psicóloga Clínica · Mestranda em Psicologia
            </p>

            <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-cream sm:text-5xl lg:text-[3.4rem]">
              Um espaço para você se{" "}
              <em className="font-script text-[1.08em] font-normal italic text-beige">
                escutar
              </em>{" "}
              com mais verdade
            </h1>

            <div className="mt-6 max-w-md">
              <HighlightBox
                rotate={-1.8}
                className="block text-sm leading-relaxed sm:text-[0.95rem]"
              >
                Saber tudo antecipadamente parece confortável, mas roubaria a
                surpresa da vida.
              </HighlightBox>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
              Psicoterapia psicanalítica para crianças, adolescentes, adultos e
              idosos, em Novo Hamburgo e online. Um lugar para acolher o que dói
              sem nome.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton label="Falar no WhatsApp" />
              <a
                href="#sobre"
                className="text-sm font-medium text-cream/90 underline-offset-4 transition-colors hover:text-cream hover:underline"
              >
                Conhecer meu trabalho ↓
              </a>
            </div>
          </FadeIn>

          {/* Atvisor-style floating glassmorphic credential card */}
          <FadeIn
            delay={0.15}
            className="absolute bottom-8 right-5 hidden max-w-[260px] sm:block lg:right-8"
          >
            <aside className="rounded-2xl border border-white/25 bg-white/15 p-4 shadow-glass backdrop-blur-md">
              <p className="font-display text-2xl font-bold text-cream">894+</p>
              <p className="mt-1 text-sm leading-snug text-cream/90">
                pessoas acompanham no Instagram
              </p>
              <p className="mt-2 text-xs tracking-wide text-beige/80">
                @psi.anapaulasobierai
              </p>
            </aside>
          </FadeIn>
        </div>
      </div>

      {/* Icon-label trio row (Atvisor pattern) */}
      <div className="border-b border-primary/10 bg-cream">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3 lg:px-8 lg:py-12">
          {DIFFERENTIATORS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08} as="li">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-beige text-primary">
                  {item.icon}
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-muted">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>

      {/* Mobile floating card under hero */}
      <div className="bg-cream px-5 pb-2 sm:hidden">
        <aside className="-mt-6 rounded-2xl border border-primary/10 bg-white/70 p-4 shadow-glass backdrop-blur-md">
          <p className="font-display text-xl font-bold text-primary-dark">894+</p>
          <p className="mt-1 text-sm text-ink-muted">
            pessoas acompanham no Instagram
          </p>
          <p className="mt-1 text-xs text-ink-muted/80">@psi.anapaulasobierai</p>
        </aside>
      </div>
    </section>
  );
}
