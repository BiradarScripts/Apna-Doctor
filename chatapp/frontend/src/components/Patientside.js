import React,{ useContext } from 'react'
import roomContext from '../context/roomContext'
import Client from './Client';

function Patientside() {
    const context = useContext(roomContext)
    const { doctorName,username } = context;
  return (
    <div>
      <Client username={username} doctorName={doctorName}/>
    </div>
  )
}

export default Patientside
