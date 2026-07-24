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
    <section id="topo" aria-label="Apresentação" className="relative bg-cream pt-20 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
        {/* Text — left */}
        <FadeIn className="order-2 lg:order-1">
          <p className="mb-4 font-script text-lg italic text-primary sm:text-xl">
            Psicóloga Clínica · Mestranda em Psicologia
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Um espaço para você se{" "}
            <em className="font-script text-[1.08em] font-normal italic text-primary">
              escutar
            </em>{" "}
            com mais verdade
          </h1>

          <div className="mt-6 max-w-md">
            <HighlightBox
              rotate={-1.8}
              className="block border border-primary/10 text-sm leading-relaxed sm:text-[0.95rem]"
            >
              Saber tudo antecipadamente parece confortável, mas roubaria a
              surpresa da vida.
            </HighlightBox>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Psicoterapia psicanalítica para crianças, adolescentes, adultos e
            idosos, em Novo Hamburgo e online. Um lugar para acolher o que dói
            sem nome.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton label="Falar no WhatsApp" />
            <a
              href="#sobre"
              className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
            >
              Conhecer meu trabalho ↓
            </a>
          </div>
        </FadeIn>

        {/* Image — right */}
        <FadeIn delay={0.1} className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src="/images/ana-paula.png"
              alt="Ana Paula Sobierai, psicóloga clínica em Novo Hamburgo"
              fill
              priority
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating glassmorphic credential card */}
          <aside className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-cream/90 p-4 shadow-glass backdrop-blur-md sm:left-auto sm:right-4 sm:max-w-[240px]">
            <p className="font-display text-2xl font-bold text-primary-dark">894+</p>
            <p className="mt-1 text-sm leading-snug text-ink-muted">
              pessoas acompanham no Instagram
            </p>
            <p className="mt-1 text-xs tracking-wide text-ink-muted/80">
              @psi.anapaulasobierai
            </p>
          </aside>
        </FadeIn>
      </div>

      {/* Icon-label trio row (Atvisor pattern) */}
      <div className="mt-8 border-y border-primary/10 bg-beige/40 sm:mt-12">
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
    </section>
  );
}
