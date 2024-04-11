import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import User from './User';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Shop from './Shop';
import Cart from './Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/Home' exact Component={Home}/>
            <Route path='/About' exact Component={About}/>
            <Route path='/ContactUs' exact Component={ContactUs}/>
            <Route path='/User' exact Component={User}/>
            <Route path='/LoginForm' exact Component={LoginForm}/>
            <Route path='/SignUpForm' exact Component={SignUpForm}/>
            <Route path='/Shop' exact Component={Shop}/>
            <Route path='/Cart' exact Component={Cart}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
