import React, { useState, useEffect,useContext } from "react";
import LeftMenu from "../components/LeftMenu";
import ChatDetail from "../components/ChatDetail";
import Client from "../components/Client";
import roomContext from '../context/roomContext'


function WhatsApp() {
  const context = useContext(roomContext)
  const { message,setmessages } = context;
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 7;
        setProgress(progress + increment);
      }
    }, 300);

    return () => clearTimeout(id);
  }, [progress]);

  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        {/* 2 components cointainer */}
        <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">

            {/* LeftMenu */}
            <div className="bg-[#111a21] min-w-[340px] max-w-[500px] w-100 h-100">
              <LeftMenu />
            </div>

            {/* ChatDetail */}
          <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100">
              <ChatDetail />
              <Client username={"kelagod"} doctorName={"Neurology"} message={message}/>
          </div>
            

        </div>
      </div>
    </>
  );
}

export default WhatsApp;
