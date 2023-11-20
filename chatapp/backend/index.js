require("dotenv").config();

const http = require('http');
const express = require('express');
const { Server } = require('socket.io')
const app = express();
const server = http.createServer(app)
const connectToMongo = require('./db')
connectToMongo();
const cors = require('cors');
const userRouter = require("./routes/auth.js");

app.use(cors());
app.use(express.json());
app.use('/api/auth', userRouter.userRoute)
app.use('/api/room', require('./routes/room'))
app.use('/api/patient',require('./routes/patients'))
const io = new Server(server,{
    cors:{
        origin: "https://chatapp-frontend-51aq.onrender.com",
         origin: "http://localhost:3000",
        methods: ["GET","POST"],
    },
});
// -------------------------- flask connection ------------------------------------
const axios= require('axios');
const { request } = require('https');

const postData = {
    room1 : [1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1],
    fuck:"Fyckkkkkkk"
}

// postData.type('application/json');
const flaskServerUrl = 'http://localhost:5000/api/ml'

axios.post(flaskServerUrl,postData,{
    headers: {
      'Content-Type': 'application/json'
    }})

.then(response=>{
    // console.log("Posted my data",postData)
})
.catch(error =>{
    console.log("Error making POST request",error)
})

// app.get('/api/ml',(req,res)=>{
//     request('http://localhost:5000/api/ml')
//     .on('error',(err)=>{
//         console.log(err)
//     })
//     .on('end',()=>{
//         res.send('done')
//     })
//     .pipe(request.post('http://localhost:5000/api/ml'))
// })

app.post('/api/ml',(req,res)=>{
    request('http://127.0.0.1:5000/api/ml')
    .on('error',(err)=>{
        console.log(err)
    })
    .on('end',()=>{
        res.send('done')
    })
    .pipe(request.post('http://127.0.0.1:5000/api/ml'))
})
//-------------------------------------------------------------------------------------

io.on("connection",(socket) => {
    console.log(`User Connected: ${socket.id}`);

    // socket.on("send_message",(data) => {
    //     socket.broadcast.emit("receive_message",data)
    //     console.log(data)
    // })
    let room_no;
    socket.on("join_room",(data) => {
        socket.join(data.room)
        room_no = data.room
        console.log(`joined room no.: ${data.room}`)
    }) 
    
    socket.on("send_message",(data) => {
        // if(data!==null){room_no = data[0].room};
        console.log(data)
        socket.to(room_no).emit("receive_message",data);
        
    })
})

server.listen(3001,() => {
    console.log("server is running on port 3001");
});

