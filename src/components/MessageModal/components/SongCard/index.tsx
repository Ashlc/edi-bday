import SongIcon from "../../../../assets/icons/music_note.svg";
import { ISong } from "../../../../interfaces/ISong";

type Props = {
  song: ISong | null;
};

const Index = ({ song }: Props) => {
  return (
    <a
      href={song?.link}
      target="_blank"
      tabIndex={1000}
      className="bg-secondary-300 text-white h-20 flex flex-row items-center rounded-md hover:bg-secondary-200"
    >
      <img src={SongIcon} alt="" className="p-4 mx-2" />
      <div className="text-start">
        <p className="text-lg">{song?.title}</p>
        <p className="text-sm">{song?.artist}</p>
      </div>
    </a>
  );
};

export default Index;
