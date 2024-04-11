import React from 'react';
import vault from './Pic.png';
import './App.css'

const App = () => {
  return (
    <div>
      <p className="paratag">Powered By</p>
      <p className="cpa">CPA VAULT</p> 
      <p className="gpwyb">Go private with your business.</p>
      <div className="loginbox">
        <h1 className='loginboxtext'>Welcome</h1>
        <p className="textbox">to the vault</p>
      </div>  
      <div>
       <input style={{marginLeft:"1150px", marginTop:"-500px"}}type="text" value="Company name"/>
       <input/>
      </div>  
      <div className='picdiv'>
        <img className="img"src={vault} alt="hjiukiolk"/>
      </div>
    </div>
  )
}

export default App
