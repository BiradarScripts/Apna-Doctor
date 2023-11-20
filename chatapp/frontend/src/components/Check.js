import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Check() {
  // const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async() => {
    const response = await fetch(`http://localhost:3001/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify({email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //save the auth token and redirect
        localStorage.setItem('token',json.autoken);
        // navigate("/client");
    }
    else{
        alert("invalid credentials")
    }
  }

  return (
<div>
      <div className="mb-3 row">
      <label for="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" onChange={onChange} placeholder="name@example.com"/>
    </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
    <input type="password" className="form-control" onChange={onChange} id="inputPassword"/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</div>
  )
}

export default Check
