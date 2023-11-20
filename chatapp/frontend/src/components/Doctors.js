import React,{useState,useContext } from 'react'
import roomContext from '../context/roomContext'
import Patientside from './Patientside';
// import Client from './Client';

function Doctors() {
  const [doctorList, setDoctorList] = useState(true);
  const context = useContext(roomContext)
  const { setdocname } = context
  const onclick = () => {
    setdocname("Neurology")
    setDoctorList(false)
  }

  return (
    <div>
      {doctorList?<div><button type="button" className="btn btn-primary" onClick={onclick}>Neurology</button>
      <button type="button" className="btn btn-primary">Cardiology</button>
      <button type="button" className="btn btn-primary">Kidneylogy</button>
      <button type="button" className="btn btn-primary">Liverlogy</button></div>  :  
      <Patientside/>}
    </div>
  )
}

export default Doctors
