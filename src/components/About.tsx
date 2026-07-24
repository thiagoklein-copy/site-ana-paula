import Image from "next/image";
import CheckItem from "./CheckItem";
import FadeIn from "./FadeIn";
import HighlightBox from "./HighlightBox";

const VALUES = [
  "Acolhimento",
  "Escuta",
  "Responsabilidade",
  "Respeito",
  "Cuidado",
  "Resiliência",
  "Empatia",
  "Sensibilidade",
] as const;

export default function About() {
  return (
    <section id="sobre" aria-labelledby="about-heading" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/ana-paula.png"
              alt="Retrato de Ana Paula Sobierai"
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 max-w-[85%] sm:-right-4 sm:max-w-xs">
            <HighlightBox
              rotate={1.5}
              className="block px-4 py-3 font-script text-base italic leading-snug sm:text-lg"
            >
              Minha função é facilitar seu processo de autoconhecimento — sem
              roteiro fixo, no seu ritmo.
            </HighlightBox>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-script text-lg italic text-primary">Quem sou eu</p>
          <h2
            id="about-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Olá, eu sou a{" "}
            <em className="font-script font-normal italic text-primary">Ana</em>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted sm:text-[1.05rem]">
            <p>
              Sou psicóloga formada pela IENH, com ênfase em Clínica Ampliada, e
              atualmente mestranda em Psicologia pela Universidade Feevale.
              Atendo crianças, adolescentes, adultos e idosos, sempre orientada
              pela escuta psicanalítica.
            </p>
            <p>
              Ao longo da minha formação, tive a oportunidade de atuar tanto na
              rede pública quanto na prática clínica, o que me deu uma visão
              sensível sobre as diferentes fases da vida e suas dores. Acredito
              profundamente no poder da escuta — e na possibilidade de, a partir
              dela, ressignificar e reescrever histórias.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
            {VALUES.map((value) => (
              <CheckItem key={value} label={value} />
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
