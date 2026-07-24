import CheckItem from "./CheckItem";
import FadeIn from "./FadeIn";

const STEPS = [
  {
    number: "01",
    title: "Primeiro contato",
    description:
      "Me chama no WhatsApp e me conta um pouco do que te trouxe até aqui. Alinhamos horário, formato (presencial ou online) e tiro suas dúvidas com calma.",
    checklist: [
      "Conversa inicial sem compromisso",
      "Alinhamento de horário e formato",
      "Dúvidas respondidas com calma",
    ],
  },
  {
    number: "02",
    title: "Primeira sessão",
    description:
      "A primeira sessão é um encontro. Quero te conhecer, entender o que te trouxe até aqui e como posso te ajudar. Você terá espaço para falar livremente o que desejar.",
    checklist: [
      "Um encontro, não um interrogatório",
      "Espaço para falar livremente",
      "Construção de confiança",
    ],
  },
  {
    number: "03",
    title: "O processo",
    description:
      "A terapia não tem um roteiro fixo. Você compartilha o que desejar, no seu ritmo — pode chorar, rir e falar livremente. Minha função é facilitar seu processo de autoconhecimento.",
    checklist: [
      "Sem roteiro fixo",
      "Seu ritmo, suas pautas",
      "Facilitação do autoconhecimento",
    ],
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-heading"
      className="bg-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-script text-lg italic text-primary">Como funciona</p>
          <h2
            id="how-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Nossos primeiros{" "}
            <em className="font-script font-normal italic text-primary">
              passos juntos
            </em>
          </h2>
        </FadeIn>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1} as="li">
              <article>
                <p className="font-display text-4xl font-bold text-primary/25 sm:text-5xl">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                  {step.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {step.checklist.map((item) => (
                    <CheckItem key={item} label={item} />
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
