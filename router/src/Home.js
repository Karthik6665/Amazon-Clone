import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Example of navigating on button click
  const handleClick = () => {
    navigate('/Home');
  };

  return (
    <div>
      <center>
        <h1>Welcome to our website{handleClick}</h1>
        
      </center>
    </div>
  );
}

export default Home;
