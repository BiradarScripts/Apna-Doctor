import { useState } from 'react';
import PatientContext from './patientContext';


const PatientState = (props) => {
  const host = `http://localhost:3001`;
    const [patients,setpatients] = useState("");
    const fetchpatients = async () => {
        const response = await fetch(`${host}/api/patient/fetchallpatients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "autoken": localStorage.getItem('token')
            },
            body: JSON.stringify({})
        });
        const json = await response.json();
        setpatients(json)
        console.log("---------------------------------fetched all patients-----------------------------")
    }

  return (
    // eslint-disable-next-line 
    <PatientContext.Provider value={{ fetchpatients,patients }}>
      {props.children}
    </PatientContext.Provider>
  )

}

export default PatientState;