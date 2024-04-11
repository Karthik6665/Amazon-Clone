import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"black"}}>
      <div></div>
      <ul style={{ display: "flex", gap: "20px", padding: "0", margin: "0" }}>
        <button style={{backgroundColor:"white",color:"black"}}><Link to='Home'>Home</Link></button>
        <button style={{backgroundColor:"white",color:"black"}}><Link to='Login'>Login</Link></button>
        <button style={{backgroundColor:"white",color:"black"}}><Link to='SignUp'>SignUp</Link></button>
      </ul>
      <div>
        
      </div>
    </div>
  )
}

export default Navbar
