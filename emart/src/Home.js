import React from 'react';
import {Link} from 'react-router-dom';
import image from'./OIG3.jpeg';


const Home = () => {
   
  return (
    <div style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh", 
      }}>
      <center>
        <h1>
            <Link to="/Home" style={{ textDecoration: 'none', color:"White" }}>WELCOME TO BHAVANI HARDWARE ELECTRICALS AND CEMENT</Link>
        </h1>
      </center>
    </div>
  )
}

export default Home
