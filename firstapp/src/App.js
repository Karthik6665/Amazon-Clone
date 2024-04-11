import React from 'react';



const App = () => {
  return (
    <div style={{ backgroundColor: "#111214", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
      <header style={{ marginTop: "20px", marginBottom: "20px", display: "flex", alignItems: "center" }}>
        <h1 style={{ margin: "0", fontSize: "24px" }}>REACHINBOX</h1>
      </header>
      <hr style={{ width: "100%", borderTop: "1px solid #343A40" }} />
      <div style={{ marginTop: "250px", textAlign: "center", justifyContent: "center" }}>
        <form style={{ border: "solid grey 1px", borderRadius: "17px", padding: "20px", backgroundColor: "#121212" }}>
          <p>Create a new account</p>
          <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "380px", height: "48px", color: "#FFFFFF", backgroundColor: "#121212", border: "1px solid #343A40", borderRadius: "7px", marginBottom: "10px", cursor: "pointer" }}>
            Sign Up with Google
          </button>
          <button type="submit" style={{ backgroundColor: "#4B63DD", color: "white", border: "None", borderRadius: "4px", fontWeight: "bold", height: "48px", width: "198px", margin: "10px 40px 0px 40px", cursor: "pointer" }}>Create an Account</button>
          <p>Already have an account? <a href=" " style={{ paddingLeft: "2px", cursor: "pointer", color: "white" }}>Sign In</a></p>
        </form>
      </div>
      {/* Container for line and footer */}
      <div style={{width:"100%", marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Line above footer */}
        <hr style={{ width: "100%", borderTop: "1px solid #343A40" }} />
        {/* Footer */}
        <footer style={{ marginTop: "20px", marginBottom: "20px",color:"#5C5F66" }}><b>Reachbox 2023. All rights reserved</b></footer>
      </div>
    </div>
  );
};

export default App;
