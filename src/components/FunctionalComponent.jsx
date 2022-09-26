const FunctionalComponent = () => {
    return (
      <div className="functionComponent">
        <h2>This is created using Functional Component</h2>
        <p className="line">This is done using external CSS</p>
        <p style={{ fontFamily: "Arial", color: "black" }}>
          This is done using inline CSS
        </p>
      </div>
    );
  };
  
  export default FunctionalComponent;