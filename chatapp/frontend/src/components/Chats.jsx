import React, { useState, useEffect, useContext } from "react";
import Chat from "./Chato";
import { chatsData } from "../data/whatsapp";
import ChatContext from '../context/chatroom/chatContext';
import roomContext from '../context/roomContext';
import patientContext from "../context/patientContext";

function Chats({ filter }) {
  const context = useContext(roomContext);
  const { patients, fetchpatients } = context;
  const chatContext = useContext(ChatContext);
  const { currentChat, sort } = chatContext;
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchpatients("cardiology");
    setChats(patients);

    const newChats = filter ? chatsData.filter((chat) => chat.unreadMsgs) : chatsData;

    if (sort === 0) {
      setChats([newChats[0]]);
    } else if (sort === 1) {
      newChats.sort((a, b) => a.severity - b.severity);
      setChats(newChats.reverse());
    }
  }, [filter, sort]);
  console.log(patients )
  return (
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      {/* Chats */}
      {/* {console.log(patients[0])} */}
      {/* Mapping through patients array */}
      
      
      {patients.map((patient) => (
        <Chat
          key={patient.id}
          id={patient.id}
          pp={patient.pp}
          contact={patient.contact}
          msg={patient.msg}
          time={patient.time}
          unreadMsgs={patient.unreadMsgs}
          active={patient.id === currentChat.id}
        />
      ))}

      {/* <Chat/> */}
        
    </div>
  );
}

export default Chats;
