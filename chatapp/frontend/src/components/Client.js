import React,{ useEffect,useState,useContext } from 'react'
import roomContext from '../context/roomContext'
import './chat.css'
const { io } = require("socket.io-client");
// const socket = io.connect("https://chatapp-backend-o061.onrender.com");
const socket = io.connect("http://localhost:3001");


export default function Client(props) {    
    // let date;
    const context = useContext(roomContext)
    const { chatdata,fetchdata,addchat,createroom } = context;
    const d = new Date();
    const [ready,setready] = useState(true);
    const [date,setdate] = useState(d.getHours()+ ':' + d.getMinutes())
    const [show,setshow] = useState(true)
    const [showchat,setshowchat] = useState(true)
    const [chat,setchat] = useState([]) //contains all messages
    const [message,setmessage] = useState("") //message given as input
    const [mesreceived, setmesreceived] = useState(false)  //chat received from backend
    const[room,setroom] = useState("") 
    const[name,setname] = useState("")
    const sendMessage = async () => {
      let send = {message:props.message,name:name,room:room,date: d.getHours()+ ':' + d.getMinutes()} //contains message just typed along with room and name
      setdate(d.getHours()+ ':' + d.getMinutes());
      await setchat(chat => [...chat,send])
      setmesreceived(!mesreceived)
      setmessage("")
      // await socket.emit("send_message",chat)
    }; 

    useEffect(() => {
      setname(props.username);
      setroom(props.doctorName.concat("",props.username));
      setready(!ready);
      // eslint-disable-next-line
    },[])

    useEffect(() => {
      sendRoom()
    },[ready])

    useEffect(() => {
      socket.emit("send_message",chat)
      // eslint-disable-next-line
    },[mesreceived])

    useEffect(() => {
      setmessage(props.message)
      sendMessage();
      // eslint-disable-next-line
    },[props.message])

    const sendRoom = () => {
      socket.emit("join_room",{room: (room + name)});
      setshow(!show);
      setshowchat(!showchat)
      createroom(room)
    };
 
    // const handlemessage = (event) => {setmessage(event.target.value)} 
    // const handleroom = (event) => {setroom(event.target.value)}
    // const handlename = (event) => {setname(event.target.value)}

    useEffect(() => {   // getting chats from backend
      fetchdata(room)
      // eslint-disable-next-line 
    },[room])

    useEffect(() => {     //uploading chat from backend
      console.log(chatdata)
      setchat(chatdata) 
      // eslint-disable-next-line
    },[showchat])

    useEffect(() => {
      addchat(room,chat)
      // eslint-disable-next-line
    },[sendMessage])

    useEffect(() => {
      socket.on("receive_message",(data) => {
        setchat(data);
      })
       // eslint-disable-next-line
    },[socket]); 

   return (
    <div> 
      
    </div>
  )
}
