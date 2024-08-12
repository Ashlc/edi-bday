import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import Close from "../../assets/icons/close_small.svg";
import { IFriend } from "../../interfaces/IFriend";
import SongCard from "./components/SongCard";
type Props = {
  visible: boolean;
  friend: IFriend | null;
  setVisible: (visible: boolean) => void;
};

const Index = ({ friend, visible, setVisible }: Props) => {
  const [scope, animate] = useAnimate();
  const handleClose = () => {
    animate(scope.current, {
      scale: 0.8,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    });
    setTimeout(() => setVisible(false), 100);
  };
  useEffect(() => {
    if (visible) {
      animate(scope.current, {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      });
    }
  }, [visible]);
  
  return (
    <div
      className={`${visible ? "flex" : "hidden"} flex-col w-full h-screen py-14 shadow-md custom-scroll overflow-scroll fixed inset-0 z-50`}
    >
        <div className="fixed -inset-0 bg-secondary-300 backdrop-blur-xs bg-opacity-50 z-40" />

      <div ref={scope} className="bg-white z-50 p-6 lg:p-8 rounded-lg w-11/12 lg:w-1/2 text-secondary-300 flex flex-col gap-6 m-auto">
        <div className="flex flex-row w-full justify-between">
          <h1 className="font-bold text-xl">{friend?.name}</h1>
          <button
            onClick={handleClose}
            className="bg-secondary-100 rounded-full p-1"
            tabIndex={999}
          >
            <img src={Close} className="select-none" />
          </button>
        </div>
        {friend?.message}
        <div className="h-[1px] w-full bg-secondary-100"></div>
        <SongCard song={friend?.song || null} />
      </div>
    </div>
  );
};

export default Index;
