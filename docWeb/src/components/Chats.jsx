import React, { useState, useEffect, useContext } from "react";
import Chat from "./Chat";
import { chatsData } from "../data/whatsapp";
import ChatContext from '../context/chatroom/chatContext';

function Chats({ filter }) {
  const chatContext = useContext(ChatContext);
  const { currentChat, sort } = chatContext;
  const [chats, setChats] = useState(chatsData);

  useEffect(() => {
    const newChats = filter
      ? chatsData.filter((chat) => chat.unreadMsgs)
      : chatsData;

    if (sort === 0) {
      setChats([newChats[0]]);
    } else if (sort === 1) {
      newChats.sort((a, b) => a.severity - b.severity);
      setChats(newChats.reverse());
    }
  }, [filter, sort]);

  return (
    <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
      {/* Chats */}

      {chats.map((chat, i) => (
        <Chat
          key={chat.id}
          id={chat.id}
          pp={chat.pp}
          contact={chat.contact}
          // msg={chat.msg}
          time={chat.time}
          // unreadMsgs={chat.unreadMsgs}
          active={i === currentChat.id - 1}
        />
      ))}
    </div>
  );
}

export default Chats;
