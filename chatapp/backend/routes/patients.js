const Patient = require('../models/Patients')
const express = require('express');
const router = express.Router();

// add patients
router.post('/addpatient',async (req,res) => {
    const {doctortype,history,name,id,priority} = req.body
    const patient = await Patient.create({
        doctortype,history,name,id,priority
    })
   res.json(patient)
})

// fetch all patients
router.post('/fetchallpatients',async (req,res) => {
    const patients = await Patient.find({doctortype: req.body.doctortype})
    res.json(patients)
    console.log("all mare log: ",patients)
    console.log("---------------------------------fetched all patients-----------------------------")

})


module.exports = router