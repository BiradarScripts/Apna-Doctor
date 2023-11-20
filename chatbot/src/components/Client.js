import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import "./chat.css";
import chatbotQuestions from './chatbotQuestions'; 
const { io } = require("socket.io-client");
const socket = io.connect("https://chatapp-backend-o061.onrender.com");
// import { useEffect } from 'react'

export default function Client() {
  // let date;
  const d = new Date();
  const [date, setdate] = useState(d.getHours() + ":" + d.getMinutes());
  const [show, setshow] = useState(true);
  const [chat, setchat] = useState([]); //contains all messages
  const [message, setmessage] = useState(""); //message given as input
  const [mesreceived, setmesreceived] = useState(false); //chat received from backend
  const [room, setroom] = useState("");
  const [name, setname] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const sendMessage = async () => {
    let send = {
      message: message,
      name: name,
      room: room,
      date: d.getHours() + ":" + d.getMinutes(),
    }; //contains message just typed along with room and name
    setdate(d.getHours() + ":" + d.getMinutes());
    setchat((chat) => [...chat, send]);
    setmesreceived(!mesreceived);
    setmessage("");
    // await socket.emit("send_message",chat)
  };

  useEffect(() => {
    socket.emit("send_message", chat);
    // eslint-disable-next-line
  }, [mesreceived]);

  const sendRoom = () => {
    socket.emit("join_room", { room: room });
    setshow(!show);
  };

  const handlemessage = (event) => {
    setmessage(event.target.value);
  };
  const handleroom = (event) => {
    setroom(event.target.value);
  };
  const handlename = (event) => {
    setname(event.target.value);
  };

  function handleAnswerClick(selectedAnswer) {
    // Find the question that contains the selected answer
    const questionWithSelectedAnswer = chatbotQuestions.find(question => {
      return question.answer.some(option => {
        return option[0].toLowerCase() === selectedAnswer.toLowerCase(); // Case-insensitive comparison
      });
    });
  
    // If a question with the selected answer is found, log the value at the first index of the answer
    if (questionWithSelectedAnswer) {
      const selectedAnswerIndex = questionWithSelectedAnswer.answer.findIndex(option => {
        return option[0].toLowerCase() === selectedAnswer.toLowerCase(); // Case-insensitive comparison
      });
  
      if (selectedAnswerIndex !== -1) {
        const valueAtIndex1 = questionWithSelectedAnswer.answer[selectedAnswerIndex][1];
        console.log(valueAtIndex1);
      }
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  let optionsClicked = [];
  const ClickOptions = async (event) => {
    console.log(event.target.value);
    const selectedAnswer =event.target.value;
    optionsClicked.push(handleAnswerClick(selectedAnswer));
    // handleAnswerClick(selectedAnswer);    
    setmessage(event.target.value + handleAnswerClick(selectedAnswer));
    sendMessage();
  }

  
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setchat(data);
      console.log(data);
    });
    // eslint-disable-next-line
  }, [socket]);

  return (
    <div>
      {show ? (
        <div className="room">
          <div></div>
          <div>
            <div className="my-2">
              <input placeholder="Room No..." onChange={handleroom} />
            </div>
            <div className="my-2">
              {/* <script src="https://kit.fontawesome.com/0a50529fcc.js" crossorigin="anonymous"></script> */}
              <input placeholder="User Name..." onChange={handlename} />
            </div>
            <div className="my-2">
              <button onClick={sendRoom}>Join Room</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Chat ClickOptions = {ClickOptions} texts={chat} name={name} date={date} message = {message} onChangeHandler = {handlemessage} onClickHandler = {sendMessage} currentQuestionIndex = {currentQuestionIndex} />
        </div>
      )}
    </div>
  );
}
