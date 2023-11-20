import React,{ useState,useContext, useEffect } from 'react'
import roomContext from '../context/roomContext'
import { useNavigate } from "react-router-dom";
// import img from './workmanagement.png'

export default function Login() {
    const context = useContext(roomContext)
    const { setname } = context
    const [user,setuser] = useState("");

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    // const history = useHistory()
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3001/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify({input: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token',json.autoken);
            if(user === "patient") { navigate("/patientside"); }
            else if ( user === "doctor" ) { navigate("/doctorside") }
        }
        else{
            alert("invalid credentials")
        }
        setname(credentials.email)
        setcredentials({email:"",password:""})
    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const setDoctor = () => {
        setuser("doctor");
    }

    const setPatient = () => {
        setuser("patient");
    }

    return (
        <div className='wrapper'>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={setDoctor}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Doctor
                </label>
                </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={setPatient}/>
                <label className="form-check-label" forhtmlFor="flexRadioDefault2">
                    Patient
                </label>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    {/* <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} ariax -describedby="emailHelp" /> */}
                    <input type="text" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
