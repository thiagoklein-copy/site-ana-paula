import CheckItem from "./CheckItem";
import FadeIn from "./FadeIn";
import WhatsAppButton from "./WhatsAppButton";

const SERVICES = [
  {
    title: "Terapia para Crianças e Adolescentes",
    description:
      "Um espaço de escuta e acolhimento para as questões da infância e da adolescência — identidade, família, escola e os primeiros grandes sentimentos.",
    checklist: [
      "Escuta respeitosa e sem julgamento",
      "Linguagem próxima da realidade deles",
      "Apoio à família no processo",
    ],
  },
  {
    title: "Terapia Individual para Adultos",
    description:
      "Para quem busca compreender padrões, ansiedades e repetições — um espaço para se escutar além do que é dito.",
    checklist: [
      "Escuta psicanalítica individualizada",
      "Espaço sem roteiro fixo",
      "Seu ritmo, sua história",
    ],
  },
  {
    title: "Terapia para a Terceira Idade",
    description:
      "Acolhimento sensível para as questões próprias do envelhecer, das perdas e dos recomeços, com respeito ao tempo de cada história.",
    checklist: [
      "Escuta sensível às perdas e recomeços",
      "Respeito ao tempo de cada pessoa",
      "Espaço seguro para elaborar histórias",
    ],
  },
] as const;

export default function Services() {
  return (
    <section
      id="atendimento"
      aria-labelledby="services-heading"
      className="bg-beige/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="font-script text-lg italic text-primary">
            Como posso te ajudar
          </p>
          <h2
            id="services-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Atendimento para cada{" "}
            <em className="font-script font-normal italic text-primary">
              fase da vida
            </em>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Cada processo é único. Trabalho com escuta psicanalítica, respeitando
            o tempo e a história de cada pessoa.
          </p>
        </FadeIn>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08} as="li">
              <article className="flex h-full flex-col border border-primary/10 bg-cream p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.checklist.map((item) => (
                    <CheckItem key={item} label={item} />
                  ))}
                </ul>
                <div className="mt-8">
                  <WhatsAppButton
                    label="Agendar conversa"
                    className="w-full"
                    message="Olá, Ana! Vi seu site e gostaria de agendar uma conversa sobre atendimento."
                  />
                </div>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
