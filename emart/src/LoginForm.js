import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongPassword, setWrongPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://emart-b03e2-default-rtdb.firebaseio.com/signup.json`);
      const userData = Object.values(response.data).find(user => user.email === email);

      if (userData && userData.password === password) {
        setEmail('');
        setPassword('');
        // Set loggedIn to true to trigger navigation
        setLoggedIn(true);
      } else {
        setWrongPassword(true);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <div style={{padding:"20px",boxShadow:"4px 4px 2px #8e9491",border:"1px solid #aeb5b2",borderRadius:"10px",textAlign:"center",backgroundColor:"#dfe8e4"}}>
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label><br/>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {wrongPassword && <p style={{color: 'red'}}>Incorrect password</p>}
      </div>
      <button style={{marginTop:"10px",backgroundColor:"#197fe6",color:"white",border:"none",borderRadius:"10px",cursor:"pointer"}} type="submit">Login</button>
      {loggedIn && <Link to="/Shop"><button style={{marginTop:"10px",backgroundColor:"#197fe6",color:"white",border:"none",borderRadius:"10px",cursor:"pointer",marginLeft:"5px"}} type="submit">Go to Shop</button></Link>}
    </form>
      </div>
    </div>
  );
};

export default LoginForm;
