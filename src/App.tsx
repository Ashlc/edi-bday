import { useEffect, useState } from "react";
import CakeIcon from "./assets/birthday-cake-icon.svg";
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
      <div className="flex flex-col items-center px-14 gap-8">
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
          Edi, além do esquema de pirâmide, queríamos deixar mensagens para que
          você saiba por quê seu dia é especial para todos nós.
        </div>
      </div>
      {friends.map((friend, index) => (
        <Card
          key={index}
          friend={friend}
          setSelectedFriend={setSelectedFriend}
          setMessageVisible={setMessageVisible}
        />
      ))}
      <MessageModal
        visible={messageVisible}
        setVisible={setMessageVisible}
        friend={selectedFriend}
      />
    </div>
  );
}

export default App;
