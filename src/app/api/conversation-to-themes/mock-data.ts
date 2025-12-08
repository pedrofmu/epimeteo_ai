import { Theme } from "@/types/theme";

export const mockThemes: Theme[] = [
  {
    title: "Infancia en el barrio",
    characters: {
      1: "Marcela",
      2: "Abuelo Carlos",
    },
    time: new Date("1980-01-01"),
    content:
      "Recuerdos de los veranos en el patio y las primeras historias que escuchaba de sus abuelos.",
  },
  {
    title: "Primer trabajo",
    characters: {
      1: "Marcela",
    },
    time: new Date("1999-01-01"),
    content:
      "Como consiguio su primer empleo, lo que aprendio y la influencia que tuvo en sus siguientes pasos.",
  },
  {
    title: "Encuentro decisivo",
    characters: {
      1: "Marcela",
      3: "Lucas",
    },
    content:
      "El momento en el que conocio a Lucas y como esa conversacion cambio su forma de ver el futuro.",
  },
];

