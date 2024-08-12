import { useEffect, useState } from "react";
import CakeIcon from "./assets/icons/birthday-cake-icon.svg";
import Card from "./components/Card";
import MessageModal from "./components/MessageModal";
import { IFriend } from "./interfaces/IFriend";
import { friends } from "./services/friends";

function App() {
  const [messageVisible, setMessageVisible] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<IFriend | null>(null);

  useEffect(() => {
    if (messageVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [messageVisible]);

  return (
    <div className="flex flex-col items-center gap-16 pb-16">
      <div className="flex flex-col w-full md:w-1/2 gap-6 text-secondary-300 p-10 bg-white rounded-b-[2rem] shadow-md">
        <div className="text-center flex flex-row items-center gap-6">
          <div>
            <img src={CakeIcon} alt="Bolo de aniversário" className="w-12" />
          </div>
          <p className="text-2xl text-left">
            Feliz Aniversário, <strong>Edi</strong>!
          </p>
        </div>
        <div className="h-[1px] w-full bg-primary rounded-sm"></div>
        <p className="text-justify">
          Além do esquema de pirâmide, queríamos deixar mensagens para que você
          saiba por quê seu dia é especial para todos nós.
        </p>
        <p className="text-primary italic">Clique em uma polaroid!</p>
      </div>
      <div className="flex flex-col gap-16">
        {friends.map((friend, index) => (
          <Card
            key={index}
            tabIndex={messageVisible ? -1 : index + 1}
            friend={friend}
            setSelectedFriend={setSelectedFriend}
            setMessageVisible={setMessageVisible}
          />
        ))}
      </div>
      <MessageModal
        visible={messageVisible}
        setVisible={setMessageVisible}
        friend={selectedFriend}
      />
    </div>
  );
}

export default App;
