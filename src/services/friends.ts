import { IFriend } from "../interfaces/IFriend";
import { messages } from "./messages";

export const friends: IFriend[] = [
  {
    name: "Milena",
    message: messages.milena,
    image: "/images/milena.jpeg",
    song: {
      title: "Good Vibrations",
      artist: "The Beach",
      link: "https://www.youtube.com/watch?v=8bHJ7zr9EoA",
    },
  },
  {
    name: "Nathinha",
    message: messages.nathinha,
    image: "/images/nathinha.jpeg",
    song: {
      title: "Habits",
      artist: "Tove Lo",
      link: "https://deezer.page.link/5WS4LXXme22s8NaJ7",
    },
  },
];
