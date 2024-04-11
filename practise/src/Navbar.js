import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/About'><li>About</li></Link>
            <Link to='/Dashboard'><li>Dashboard</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
