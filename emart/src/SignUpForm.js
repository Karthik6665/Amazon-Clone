import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    Mobile_number:"",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://emart-b03e2-default-rtdb.firebaseio.com/signup.json',formData)
    .then(()=>alert("submitted Succesfully"))
    
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <div style={{padding:"20px",boxShadow:"4px 4px 2px #8e9491",border:"1px solid #aeb5b2",borderRadius:"10px",textAlign:"center",backgroundColor:"#dfe8e4"}}>
        <form onSubmit={handleSubmit}>
          <h3>Register Here</h3>
          <div>
            <input type="tel" name="Mobile_number" placeholder="Mobile Number" value={formData.Mobile_number} onChange={handleChange} />
          </div>
          <div>
            <input type="email" name="email" value={formData.email} placeholder="EmailID" onChange={handleChange} />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          </div>
          <div>
            <input type="password" name="confirmPassword"placeholder="ConfirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          </div>
          
          <button  style={{marginTop:"10px",backgroundColor:"#197fe6",color:"white",border:"none",borderRadius:"10px",cursor:"pointer"}} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
