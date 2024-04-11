import React, { useState } from 'react';

const Signin = () => {
  const [data, setData] = useState({
    username: "",
    emailid: "",
    password: "",
    confirmpassword: ""
  });

  const { username, emailid, password, confirmpassword } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div style={{ backgroundColor: "#111214", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <center>
        <form onSubmit={submitHandler} style={{ border: "solid grey 1px", borderRadius: "10px", padding: "20px" }}>
          <p style={{ color: "white" }}>Create a new account</p>
          <input type="text" name="username" value={username} onChange={changeHandler} placeholder="Username" style={{ marginBottom: "10px" }} />
          <input type="email" name="emailid" value={emailid} onChange={changeHandler} placeholder="Email" style={{ marginBottom: "10px" }} />
          <input type="password" name="password" value={password} onChange={changeHandler} placeholder="Password" style={{ marginBottom: "10px" }} />
          <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} placeholder="Confirm Password" style={{ marginBottom: "10px" }} />
          <button type="submit" style={{ backgroundColor: "#4B63DD", color: "white", border: "None", borderRadius: "4px", fontWeight: "bold", height: "48px", width: "198px", margin: "10px 40px 0px 40px" }}>Create an Account</button>
          <p style={{ color: "white", paddingTop: "10px" }}>Already have an account? <span style={{ paddingLeft: "2px", cursor: "pointer" }}>Sign In</span></p>
        </form>
        {password !== confirmpassword && password && confirmpassword ? <p style={{ color: "red", fontSize: "14px" }}>Password not matching</p> : null}
      </center>
    </div>
  );
};

export default Signin;
