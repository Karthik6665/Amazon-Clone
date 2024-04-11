import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/Home' exact Component={Home}/>
          <Route path='/Login' exact Component={Login}/>
          <Route path='/SignUp' exact Component={SignUp}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
