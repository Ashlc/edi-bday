import { ReactNode } from "react";
import { ISong } from "./ISong";

export interface IFriend {
  name: string;
  message: ReactNode;
  image: string;
  song: ISong;
}
