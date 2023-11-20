import React, { useState, useEffect, useRef, useContext } from "react";
import Message from "./Message";
import RoundedBtn from "./Common/RoundedBtn";
import { messagesData } from "../data/whatsapp";
import { chatsData } from "../data/whatsapp";
import {MdSend } from "react-icons/md";
// import { HiDotsVertical } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { cs2 } from "../assets/whatsapp";
import { getTime } from "../logic/whatsapp";
import ChatContext from "../context/chatroom/chatContext";
import roomContext from '../context/roomContext'
import Client from "./Client";

function ChatDetail(props) {
  const context = useContext(roomContext)
  const { message,setmessages } = context;
  const [chats, setChats] = useState(chatsData);
  const [run,setrun] = useState(true);
  const chatContext = useContext(ChatContext);
  const { currentChat,setSort,sort} = chatContext;

  // Initialize messages as an empty array
  var la=currentChat.id  ;
  // const [messages, setMessages] = useState(messagesData[la]);
  const [messages, setMessages] = useState(messagesData[la]);
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Functions
  const addMessage = (msg) => {
    if (la === 0 && msg.msg === "yes") {
      console.log("lauda bc");
      setSort(1);
      const newMessages = [...messages, msg];
      setMessages(newMessages);
    } else {
      const newMessages = [...messages, msg];
      setMessages(newMessages);
    }
  };

  const handleImgUpload = () => {
    addMessage({
      img: cs2,
      time: getTime(),
      sent: true,
    });
  };

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    setTyping(inputValue.length > 0);
  };

  const handleInputSubmit = () => {
    setmessages(inputRef.current.value);
    console.log(inputRef.current.value);
    setrun(!run)
    if (inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
      setTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages,sort]);


  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit();
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  },[currentChat.id]);

  useEffect(() => {
    setMessages(messagesData[currentChat.id]);
  }, [currentChat.id]);

  return (
    // ChatDetail main container
    <div className="flex flex-col h-screen">
      {/* Contact nav */}
      

      {/* Messages section */} 
      <div
        className="bg_image bg-[#0a131a]  bg-contain overflow-y-scroll h-100"
        style={{ padding: "12px 7%" }}
      >
         {messages.map((msg, index) => (
          <Message
            key={index}
            msg={msg.msg}
            time={msg.time}
            isLink={msg.isLink}
            img={msg.img}
            sent={msg.sent}
          />
        ))} 


        <div ref={bottomRef} />
      </div>

      {/* Bottom section */}
      <div className="flex items-center bg-[#202d33] w-100 h-[70px] p-2">
        {/* Emoji btn */}
        <RoundedBtn icon={<BiHappy />} />

        {/* Upload btn */} 
        <span className="mr-2">
          <RoundedBtn icon={<AiOutlinePaperClip />} onClick={handleImgUpload} />
        </span>

        {/* Input bar */}

        <input
          type="text"
          placeholder="Type a message"
          className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#8796a1]"
          onChange={handleInputChange}
          ref={inputRef}
        />
        {/* {console.log(message)} */}
        

        {/* Mic/Send btn */}

        <span className="ml-2">
          {typing ? (
            <RoundedBtn icon={<MdSend />} onClick={handleInputSubmit} />
          ) : (
            <RoundedBtn icon={<BsFillMicFill />} />
          )}
          {/* <Client username={"kelagod"} doctorName={"Neurology"} message={message}/> */}
        </span>
      </div>
    </div>
  );
}

export default ChatDetail;



