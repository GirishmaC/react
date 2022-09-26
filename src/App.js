import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import "./components/index1.css";
import { useState } from "react";

function App() {
  const [funcHidden, setFuncHidden] = useState(true);
  const handleClickFunction = (e) => setFuncHidden((current) => !current);

  const [clsHidden, setClsHidden] = useState(true);
  const handleClickClass = (e) => setClsHidden((current) => !current);

  return (
    <div className="body-1">
      <h1 className="main-header">Styling using Functional Components and Class Components</h1>
      <div className="butn">
        <button className="bttn funbtn" onClick={handleClickFunction}>
          To see styling in Functional Component
        </button>
        <button className="bttn clsbtn" onClick={handleClickClass}>
          To see styling in Class Component
        </button>
      </div>

      <div className="list">
        <>{!funcHidden ? <FunctionalComponent /> : null}</>
        <>{!clsHidden ? <ClassComponent /> : null}</>
      </div>
    </div>
  );
}

export default App;
