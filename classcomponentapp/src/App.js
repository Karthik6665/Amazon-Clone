// import React, { Component } from 'react'
// import Display from './Display'

// export default class App extends Component {
//   state={
//     name:"Karthik"
//   }
//   render() {
//     return (
//       <div>
//         <center>
//          <Display data={this.state.name}/>
//          <button onClick={()=>this.setState({name:"GETIKE KARTIK"})}>Change Name</button>
//         </center>
        
//       </div>
//     )
//   }
// }

import React, { useRef, useEffect } from 'react';

const App = () => {
  const data = useRef(null);

  useEffect(() => {
    data.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data.current.value);
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input ref={data} type="text" placeholder='name' />
          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
};

export default App;

