import React from 'react';
import './cssFiles/doctor.css';
import DoctorCard from './DoctorCard';
import logo1 from './Images/doctor-1.jpg';
import logo2 from './Images/doctor-2.jpg';
import logo3 from './Images/doctor-3.jpg';
import logo4 from './Images/doctor-4.jpg';
export default function Doctor() {
  return (
    <div className='container doctors-flex'>
        <div className="container text">
            <h3 className="team-1">Team</h3>
            <h1 className="team-2">Our Team</h1>
            <h5 className="team-3">A doctor is more than just a doctor, they're a friend and a guide</h5>
        </div>
        
        <div className="container doctor-section">
            <DoctorCard logo = {logo1} name={"Bhavya Kapadia"} speciality = {"Orthopedician"}/>
            <DoctorCard logo = {logo2} name={"Shreyas Biradar"} speciality = {"Neurologist"}/>
            <DoctorCard logo = {logo3} name={"Siddeshwar Kagatikar"} speciality = {"Cardiologist"}/>
            <DoctorCard logo = {logo4} name={"Ritish Shrirao"} speciality = {"Pediatrician"}/>
        </div>
    </div>
  )
}
