import React, { useState } from "react";
import Chats from "./Chats";
import { BiFilter } from "react-icons/bi";
import { pp } from "../assets/whatsapp";

function LeftMenu() {
  const [filter, setFilter] = useState(false);

  return (
    // LeftMenu container
    <>
      <div className="flex flex-col border-r border-neutral-700 w-100 h-screen">
      {/* Profile nav */}

      <div className="wsweb flex justify-between  items-center bg-[#202d33] h-[80px] p-4">
        {/* <img src={pp} alt="profile_picture" className="rounded-full w-[40px]" /> */}
        docWeb
      </div>

      {/* Search and filter */}
      
      <Chats filter={filter} />

      
    </div>
    </>
    
  );
}

export default LeftMenu;
