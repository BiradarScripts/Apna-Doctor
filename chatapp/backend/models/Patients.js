const mongoose = require('mongoose');
const {Schema} = mongoose;

const PatientSchema = new Schema({
    id:{
        type : Number,
        required: true
    },
    priority:{
        type : Number,
        required: true
    },
    doctortype:{
        type : String,
        required: true
    },
    name:{
        type : String,
        required: true
    },
    history:{
        type : Array, 
        required: false  
    }
})

const Patient = mongoose.model('patient',PatientSchema);
Patient.createIndexes();
module.exports = Patient;