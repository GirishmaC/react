import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div className="classComponent">
        <h2>This is created using Class Component</h2>
        <p className="line">This is done using external CSS</p>
        <p style={{ fontFamily: "Arial", color: "black" }}>
          This is done using inline CSS
        </p>
      </div>
    );
  }
}

export default ClassComponent;
