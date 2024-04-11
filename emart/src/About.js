import React from 'react';

const About = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "100px", backgroundColor: "grey", border: "none", borderRadius: "20px", marginLeft: "20px", marginRight: "20px", justifyContent: "center", alignContent: "center", height: "fit-content" }}>
        <center>
          <h3>ABOUT US</h3>
          <p>At BHAVANI HARDWARE STORE, we take pride in being more than just a retail space. We’re a community hub, a place where builders, homeowners, and hobbyists come together to explore, learn, and create. Our shelves are stocked with quality tools, materials, and expert advice to help you tackle any project with confidence.</p>
          <ul style={{ textAlign: "center" }}> 
            <li>Tools: From power drills to hand saws, we’ve got the right tools for every job.</li>
            <li>Building Materials: Need lumber, cement, or plumbing supplies? Look no further.</li>
            <li>Electrical and Plumbing: Whether you’re rewiring a room or fixing a leaky faucet, we’ve got the essentials.</li>
            <li>Paint and Finishes: Choose from a rainbow of colors to transform your space.</li>
            <li>Gardening Supplies: Green thumbs rejoice! Find seeds, soil, and garden tools here.</li>
            <li>Hardware Accessories: Nails, screws, hinges—you name it, we’ve got it.</li>
          </ul>
          <h4>Address:</h4>
          <p>Badapahad road, Jalalpur, Varni, NIzamabad, 503201.</p>
        </center>
      </div>
    </div>
  )
}

export default About;
