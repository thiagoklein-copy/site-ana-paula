import Image from "next/image";
import FadeIn from "./FadeIn";
import HighlightBox from "./HighlightBox";

export default function Approach() {
  return (
    <section
      id="visao"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* TODO: Swap with nature/greenery photo matching her carousel aesthetic */}
      <Image
        src="/images/approach-placeholder.jpg"
        alt="Folhagem e natureza — metáfora de processo e crescimento"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-dark/55" />

      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <FadeIn>
          <p className="font-script text-lg italic text-beige/90">Minha visão</p>
          <h2
            id="approach-heading"
            className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl lg:text-5xl"
          >
            Você não precisa ter o{" "}
            <em className="font-script font-normal italic text-beige">
              controle
            </em>{" "}
            sobre tudo
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
            Há um ano atrás, você provavelmente também não imaginava muita coisa
            que vive hoje. Saber tudo antecipadamente parece confortável, mas
            também roubaria a surpresa da vida — as pessoas que você ainda vai
            conhecer, as versões suas que ainda vão nascer, os lugares onde você
            ainda vai se reencontrar.
          </p>
          <div className="mt-10 flex justify-center">
            <HighlightBox
              rotate={-1.2}
              className="max-w-md px-4 py-3 text-sm leading-relaxed sm:text-base"
            >
              Saber tudo antecipadamente parece confortável, mas também roubaria
              a surpresa da vida.
            </HighlightBox>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
