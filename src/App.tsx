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
    <div className="flex flex-col items-center gap-16 py-16">
      <div className="flex flex-col items-center w-base gap-8">
        <div className="flex flex-col items-center gap-4 text-white p-6 bg-secondary-300 bg-opacity-60 backdrop-blur-xs rounded-lg">
          <img src={CakeIcon} alt="Bolo de aniversário" className="w-12" />
          <div className="text-center">
            <p>15/08</p>
            <p className="text-2xl">
              Feliz Aniversário, <strong>Edi</strong>!
            </p>
          </div>
        </div>
        <div className="text-justify text-white p-6 bg-secondary-300 bg-opacity-60 backdrop-blur-xs rounded-lg">
          <p className="indente-10">
            Edi, além do esquema de pirâmide, queríamos deixar mensagens para
            que você saiba por quê seu dia é especial para todos nós.
          </p>
        </div>
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
      <div className="flex flex-col w-base items-center gap-4 text-white p-6 bg-secondary-300 bg-opacity-60 backdrop-blur-xs rounded-lg">
        <p>Playlist</p>
      </div>
    </div>
  );
}

export default App;
