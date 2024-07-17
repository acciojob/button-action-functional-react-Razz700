import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [render,setrender]=useState(false);
const handlebtn=()=>{
  setrender(true);
}
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button onClick={handlebtn} id="click">click</button>
      {render && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> }
    </div>
  );
}


export default App;
