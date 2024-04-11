import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const navigate=useNavigate();

  const submithandler=()=>{
    navigate('/Login')

  }
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <div style={{textAlign:"Center"}}>
        <Link to='/LoginForm'><button onClick={submithandler}>Login</button></Link><br/>
        <Link to='/SignUpForm'><button onClick={submithandler}>SignUp</button></Link>
        
      </div>
    </div>
  )
}

export default User
