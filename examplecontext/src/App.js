import React from 'react';
import Componentc from './Componentc';

 export const UserContext=React.createContext();

const App = () => {
  return (
    <div>
      <center>
        <h1>Hello </h1>
        <UserContext.Provider value={"Customers"}>
          <Componentc/>
        </UserContext.Provider>
      </center>
    </div>
  )
}

export default App
