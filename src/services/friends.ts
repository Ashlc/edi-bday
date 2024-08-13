import { IFriend } from "../interfaces/IFriend";
import { messages } from "./messages";

export const friends: IFriend[] = [
  {
    name: "Isa (com S)",
    message: messages.isadora,
    image: "/images/isadora.jpeg",
    song: {
      title: "Paris In The Rain",
      artist: "Lauv",
      link: "https://open.spotify.com/track/41CgzGD7xlgnJe14R4cqkL",
    },
  },
  {
    name: "Iza (com Z)",
    message: messages.placeholder,
    image: "/images/iza.jpeg",
    song: {
      title: "Música",
      artist: "Artista",
      link: ".",
    },
  },
  {
    name: "Milena",
    message: messages.milena,
    image: "/images/milena.jpeg",
    song: {
      title: "Idiota",
      artist: "Jão",
      link: "https://open.spotify.com/track/6EDj1nbl9wo6ivGI1t59G4?si=JdcxCdPDTgauq_jhO-zEEw&context=spotify%3Asearch%3Aidiot",
    },
  },
  {
    name: "Murilo",
    message: messages.murilo,
    image: "/images/murilo.jpeg",
    song: {
      title: "Dentro da Hilux",
      artist: "Luan Pereira",
      link: "https://open.spotify.com/track/3XIXklO3e0uWUAUkOR7NLI",
    },
  },
  {
    name: "Nathinha",
    message: messages.nathinha,
    image: "/images/nathinha.jpeg",
    song: {
      title: "Habits",
      artist: "Tove Lo",
      link: "https://open.spotify.com/track/18AJRdgUoO9EYn11N7xzaT",
    },
  },
];
