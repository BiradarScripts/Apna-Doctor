import { useEffect, useState, useContext } from 'react';
// import './App.css';
import Client from './components/Client'; 
import RoomState from './context/RoomState'; 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Doctors from './components/Doctors';
import Video from './components/Video';
import WhatsApp from "./pages/WhatsApp";
// import "bootstrap/dist/css/bootstrap.min.css";
import ChatState from "./context/chatroom/ChatState"
import roomContext from './context/roomContext'
import PatientState from './context/PatientState';


function App() {
  const context = useContext(roomContext)
    // const { message } = context;
  // const [data,setdata] = useState("null")

  // const fetchdata = async () => {
  //   const response = await fetch(`/api/ml`,{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "text",
  //     },
  //   });

  //   const data = await response
  //   setdata(data)
  // }

  // useEffect(() => {
  //   fetchdata();
  //   fetch("/api/ml").then(res => res.json()).then(data => setdata(data.prediction_str))
  // },[])
  // console.log(data)
  return ( 
    <>
      <RoomState>
        <PatientState>
        <ChatState>
      <BrowserRouter>
        <div className='container'>
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
          <Route exact path="/doctorside" element={<WhatsApp /> }>
          </Route>
          <Route exact path="/patientside" element={<Doctors /> }>
          </Route>
          <Route exact path="/video" element={<Video/>}>
          </Route>
        </Routes>
        </div>  
      </BrowserRouter>
    {/* <WhatsApp />   */}
    {/* <Client username={"kelagod"} doctorName={"Neurology"} message={"sd"} /> */}
    </ChatState>
    </PatientState>
      </RoomState>

    </>
  );
}

export default App;
