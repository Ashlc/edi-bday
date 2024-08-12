import { IFriend } from "../interfaces/IFriend";
import { messages } from "./messages";

export const friends: IFriend[] = [
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
    name: "Nathinha",
    message: messages.nathinha,
    image: "/images/nathinha.jpeg",
    song: {
      title: "Habits",
      artist: "Tove Lo",
      link: "https://open.spotify.com/track/18AJRdgUoO9EYn11N7xzaT?si=ekmmc0laS9Cu0Ozflm0_4A",
    },
  },
];
