import React, { useState } from "react";
import ChatContext from "./chatContext";
 // You need to import chatsData if it's not defined in this file.

function ChatState(props) {// Assuming chatsData is defined or imported.
  const [currentChat,setCurrentChat]=useState({
    id:0
  });

  const [sort,setSort]=useState(0);

  

  return (
    <ChatContext.Provider value={{ currentChat,setCurrentChat,sort,setSort}}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatState;

