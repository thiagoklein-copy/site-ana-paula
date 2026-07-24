import FadeIn from "./FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "Cheguei sem saber nem por onde começar a falar. A Ana criou um espaço tão seguro que hoje consigo entender coisas sobre mim que antes eu nem enxergava.",
    name: "Camila R.",
    role: "Terapia individual",
    initials: "CR",
  },
  {
    quote:
      "Levei minha filha adolescente para os atendimentos e a diferença foi enorme. Ela se sente ouvida de verdade, sem julgamento.",
    name: "Rodrigo M.",
    role: "Pai de paciente adolescente",
    initials: "RM",
  },
  {
    quote:
      "Depois que me aposentei, sentia um vazio difícil de explicar. A terapia com a Ana me ajudou a dar sentido para essa nova fase.",
    name: "Terezinha A.",
    role: "Terapia individual",
    initials: "TA",
  },
] as const;

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.4l1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="bg-beige/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-script text-lg italic text-primary">Depoimentos</p>
          <h2
            id="testimonials-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            O que dizem as pessoas que já{" "}
            <em className="font-script font-normal italic text-primary">
              passaram por aqui
            </em>
          </h2>
        </FadeIn>

        <ul className="mt-14 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {TESTIMONIALS.map((item, i) => (
            <FadeIn
              key={item.name}
              delay={i * 0.08}
              as="li"
              className="min-w-[85%] snap-center sm:min-w-[70%] md:min-w-0"
            >
              <article className="flex h-full flex-col border border-primary/10 bg-cream p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-7">
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary-dark"
                    aria-hidden="true"
                  >
                    {item.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="text-xs text-ink-muted">{item.role}</p>
                  </div>
                </footer>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
