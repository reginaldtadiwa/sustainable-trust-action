import React, { Component } from "react";
import homepic from "./homepic.jpg"; // Adjust path if needed

class TestHero extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${homepic})`, // Use template literal
      height: "100vh",
      marginTop: "-140px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      //backgroundsize: cover,
      backgroundPosition: "center"
      
    };
    return (
      <div style={myStyle}>
        <h1>Reginald Chikumbu</h1>
      </div>
    );
  }
}

export default TestHero;
