import React, { useState } from 'react';
import data from './City.json'

const App = () => {
  const[search,setSearch]=useState("");
  return (
    <div>
      <center>
        <h4>Enter your destination city</h4>
        <input style={{border:"1px solid black",padding:"10px",margin:"10px",maxWidth:"70%"}} type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        {data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map((city)=>{
          return <div style={{border:"1px solid black",padding:"10px",margin:"10px",maxWidth:"70%"}}>
            {city.name}
          </div>
        })}
      </center>
    </div>
  )
}

export default App
