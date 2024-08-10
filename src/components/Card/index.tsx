import { IFriend } from "../../interfaces/IFriend";
import PictureCard from "./components/PictureCard";

type Props = {
  friend: IFriend;
  setSelectedFriend: (friend: IFriend) => void;
  setMessageVisible: (visible: boolean) => void;
};

const Index = ({ friend, setSelectedFriend, setMessageVisible }: Props) => {
  const handleClick = () => {
    setSelectedFriend(friend);
    setMessageVisible(true);
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer w-full flex flex-col items-center"
    >
      <div className="relative">
        <PictureCard image={friend.image} name={friend.name} />
        <div className="absolute top-4 left-4 -z-10 rounded-lg w-[256px] h-[303px] bg-primary"></div>
      </div>
    </button>
  );
};

export default Index;
