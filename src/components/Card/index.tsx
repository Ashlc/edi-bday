import { IFriend } from "../../interfaces/IFriend";
import PictureCard from "./components/PictureCard";

type Props = {
  friend: IFriend;
  setSelectedFriend: (friend: IFriend) => void;
  setMessageVisible: (visible: boolean) => void;
  tabIndex?: number;
};

const Index = ({
  friend,
  setSelectedFriend,
  setMessageVisible,
  tabIndex,
}: Props) => {
  const handleClick = () => {
    setSelectedFriend(friend);
    setMessageVisible(true);
  };

  const randomRotation = Math.floor(Math.random() * 3);

  return (
    <button
      onClick={handleClick}
      tabIndex={tabIndex}
      className="cursor-pointer flex flex-col items-center active:scale-95 transition-transform"
    >
      <div className="relative">
        <PictureCard image={friend.image} name={friend.name} />
        <div
          className={`absolute top-4 left-4 -z-10 rounded-lg w-base h-[303px] bg-secondary-100 rotate-${randomRotation}`}
        ></div>
      </div>
    </button>
  );
};

export default Index;
