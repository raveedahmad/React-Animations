import React from "react";
import "./App.css";
import Animation1 from "./Animation1/animation1";
import Animation2 from "./Animation2/animation2";
import Animation3 from "./Animation3/animation3";
import Animation4 from "./Animation4/animation4";
import Animation5 from "./Animation5/animation5";

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Animation2 />
      <Animation3 />
      <Animation5 />
    </div>
  );
}

export default App;
