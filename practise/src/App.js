// import React,{useEffect, useState} from 'react';
// import axios from 'axios';


// const App = () => {
//   const [data,setData]=useState({
//     fullname:"",
//     email:"",
//     password:"",
//     confirmpassword:""
//   })
//   const {fullname,email,password,confirmpassword}=data;
//   useEffect(()=>{
//     axios.get('https://react-3e5bb-default-rtdb.firebaseio.com/register.json')
//     .then((response)=>console.log(response))
//     .catch((error)=>console.log(error))

//   },[data]);
//   const changeHandler=e=>{
//     setData({...data,[e.target.name]:e.target.value});
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     axios.post('https://react-3e5bb-default-rtdb.firebaseio.com/register.json', data)
//       .then(() => {
//         alert("Submitted Successfully");
//         setData({
//           fullname: "",
//           email: "",
//           password: "",
//           confirmpassword: ""
//         });
//       })
//       .catch(error => console.error(error));
//   };
//   return (
//     <div>
//       <center>
//         <form autoComplete='off' onSubmit={submitHandler}>
//           <input type="text" name="fullname" value={fullname} placeholder="Fullname" onChange={changeHandler}></input><br/>
//           <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler} ></input><br/>
//           <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler}></input><br/>
//           <input type="password" name="confirmpassword" value={confirmpassword} placeholder="ConfirmPassword" onChange={changeHandler}></input><br/>
//           <input type="submit" name="submit"></input>
//         </form>
//       </center>  
//     </div>
//   )
// }

// export default App

//useMemo Hook

import React,{useMemo, useState} from 'react'

const App = () => {
  const [counter,setCounter]=useState(1);
  const [val,setVal]=useState(0);
  const [ass,setAss]=useState(0)
  let sum=useMemo(()=>{
    return Number(val)+Number(ass);
  },[val,ass])
  return (
    <div>
      <center>
        <input type="number" placeholder='enter value' value={val} onChange={(e)=>{setVal(e.target.value)}}/><br/>
        <input type="number" placeholder='enter value' value={ass} onChange={(e)=>{setAss(e.target.value)}}/><br/>
        <button onClick={()=>{
          setCounter(counter+1)
        }}>UpdateCounter</button><br/>
        <h1>Counter:{counter}</h1>
        <h2>sum:{sum}</h2>
      </center>
    </div>
  )
}

export default App

