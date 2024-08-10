import { IFriend } from "../interfaces/IFriend";

export const friends: IFriend[] = [
  {
    name: "Alice",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    song: {
      title: "Hello",
      artist: "Adele",
      link: "https://www.youtube.com/watch?v=YQHsXMglC9A",
    },
  },
  {
    name: "Bob",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    song: {
      title: "Good Vibrations",
      artist: "The Beach",
      link: "https://www.youtube.com/watch?v=8bHJ7zr9EoA",
    },
  },
  {
    name: "Charlie",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    song: {
      title: "Happy",
      artist: "Pharrell Williams",
      link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
    },
  },
];
