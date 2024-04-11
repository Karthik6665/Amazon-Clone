import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showUserOptions, setShowUserOptions] = useState(false); 

  const handleUserMouseEnter = () => {
    setShowUserOptions(true); 
  };

  const handleUserMouseLeave = () => {
    setShowUserOptions(false); 
  };

  return (
    <div>
      <nav style={navStyles}>
        <Link to='/Home' style={linkStyles}>Home</Link>
        <Link to='/About' style={linkStyles}>About</Link>
        <Link to='/ContactUs' style={linkStyles}>ContactUs</Link>
        <Link  to='/Cart' style={linkStyles}>Cart</Link>
        <div
          onMouseEnter={handleUserMouseEnter}
          onMouseLeave={handleUserMouseLeave}
          style={userContainerStyles}
        >
          <Link to='/User' style={linkStyles}>User</Link>
          {showUserOptions && <UserOptions />}
        </div>
      </nav>
    </div>
  );
};

const navStyles = {
  backgroundColor: "black",
  color: "white",
  margin: 0,
  padding: "10px 20px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  fontSize: "18px", 
};

const linkStyles = {
  marginLeft: "40px", 
  color: "white",
  textDecoration: "none",
};

const userContainerStyles = {
  position: "relative",
  display: "inline-block",
};

const UserOptions = () => {
  return (
    <div style={userOptionsStyles}>
      <Link to='/LoginForm' style={optionLinkStyles}>Login</Link>
      <Link to='/SignUpForm' style={optionLinkStyles}>SignUp</Link>
    </div>
  );
};

const userOptionsStyles = {
  position: "absolute",
  top: "100%",
  backgroundColor: "black",
  color: "white",
  minWidth: "100px",
  textAlign: "center",
  borderRadius: "5px",
  zIndex: "1",
};

const optionLinkStyles = {
  display: "block",
  padding: "10px 0",
  textDecoration: "none",
  color: "white",
};

export default Navbar;
