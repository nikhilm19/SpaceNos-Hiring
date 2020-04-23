import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import Appointment from "../Appointment";

import Paper from "@material-ui/core/Paper";

function App(props) {
  return (
    
      <div className="App">
        <form noValidate autoComplete="off">
          {props.children}
        </form>
      </div>
    
  );
}

export default App;
