import Close from "../../assets/close_small.svg";
import { IFriend } from "../../interfaces/IFriend";
import SongCard from "./components/SongCard";
type Props = {
  visible: boolean;
  friend: IFriend | null;
  setVisible: (visible: boolean) => void;
};

const Index = ({ friend, visible, setVisible }: Props) => {
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div
      className={`${visible ? "flex" : "hidden"} flex-col w-full fixed inset-0 z-50`}
    >
      <div className="fixed inset-0 bg-secondary-300 bg-opacity-50 backdrop-blur-xs z-40" />

      <div className="bg-primary z-50 p-4 rounded-lg w-10/12 text-secondary-300 flex flex-col gap-6 m-auto">
        <div className="flex flex-row w-full justify-between">
          <h1 className="font-bold text-xl">{friend?.name}</h1>
          <button
            onClick={handleClose}
            className="bg-secondary-100 rounded-full p-1"
          >
            <img src={Close} className="select-none" />
          </button>
        </div>
        <p className="text-justify indent-5">{friend?.message}</p>
        <div className="h-[1px] w-full bg-secondary-100"></div>
        <SongCard song={friend?.song || null} />
      </div>
    </div>
  );
};

export default Index;
