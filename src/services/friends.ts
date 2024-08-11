import { IFriend } from "../interfaces/IFriend";
import { messages } from "./messages";

export const friends: IFriend[] = [
  {
    name: "Nathinha",
    message: messages.nathinha,
    image: "src/assets/images/nathinha.jpeg",
    song: {
      title: "Habits",
      artist: "Tove Lo",
      link: "https://deezer.page.link/5WS4LXXme22s8NaJ7",
    },
  },
  {
    name: "Bob",
    message: messages.placeholder,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    song: {
      title: "Good Vibrations",
      artist: "The Beach",
      link: "https://www.youtube.com/watch?v=8bHJ7zr9EoA",
    },
  },
  {
    name: "Charlie",
    message: messages.placeholder,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    song: {
      title: "Happy",
      artist: "Pharrell Williams",
      link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
    },
  },
];
