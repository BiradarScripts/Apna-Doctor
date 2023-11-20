import React, { useState,useContext } from "react";
import ChatContext from '../context/chatroom/chatContext'

function Chat({ id,pp, contact, msg, time, unreadMsgs, active}) {

  const chatContext = useContext(ChatContext);
  const { currentChat,setCurrentChat } = chatContext;

  const [read, setRead] = useState(unreadMsgs);

  const handleOnChange = () => {
    setCurrentChat({id});
    setRead(0); 
  };

  return (
    // Chat container
    <>
      <div
        className={`flex justify-between items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33] ${
          active ? "bg-[#202d33]" : ""
        }`}
        onClick={handleOnChange} // Call the handleOnChange function when clicked
      >
        {/* Profile picture */}
        <img src={pp} alt="profile_picture" className="rounded-full w-[50px] mr-5" />

        {/* Info container */}
        <div className="flex justify-between border-t border-neutral-700 w-100 h-100 py-3">
          {/* Contact name and message */}
          <div className="flex flex-col justify-between text-white">
            {/* Contact name */}
            <h1 className="font-medium mb-1">{contact}</h1>

            {/* Message */}
            <p className={`text-sm ${!read ? "text-neutral-400" : ""}`}>{msg}</p>
          </div>

          {/* Time and number of messages*/}
          <div className="flex flex-col justify-between items-end h-100 text-xs">
            {/* Time */}

          <p className="text-emerald-500 min-w-[55px]">{time}</p>
          {/* Number of messages */}
          
          {read && (
            <div className="flex justify-center items-center bg-emerald-500 rounded-full w-[20px] h-[20px]">
              <p className="text-emerald-900">{read}</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;