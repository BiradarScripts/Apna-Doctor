const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/chatapp"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    console.log('connected to mongo')
}

module.exports = connectToMongo