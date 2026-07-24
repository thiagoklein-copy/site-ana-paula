export const BUSINESS = {
  name: "Ana Paula Sobierai da Cruz",
  shortName: "Ana Paula Sobierai",
  title: "Psicóloga Clínica · CRP 07/44922 · Mestranda em Psicologia (Feevale)",
  tag: "Psicóloga Clínica · CRP 07/44922",
  crp: "CRP 07/44922",
  phoneDisplay: "(51) 99738-9430",
  phoneE164: "5551997389430",
  email: "psicologaanapaulasobierai@gmail.com",
  instagramHandle: "@psi.anapaulasobierai",
  instagramUrl: "https://www.instagram.com/psi.anapaulasobierai",
  address: {
    street: "Av. Cel. Frederico Linck, 1170",
    neighborhood: "Ideal",
    city: "Novo Hamburgo",
    state: "RS",
    postalCode: "93336-002",
    full: "Av. Cel. Frederico Linck, 1170 - Ideal, Novo Hamburgo - RS, 93336-002",
    short: "Av. Cel. Frederico Linck, 1170 - Ideal, Novo Hamburgo - RS",
  },
} as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Ana! Vi seu site e gostaria de agendar uma conversa.";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${BUSINESS.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;
