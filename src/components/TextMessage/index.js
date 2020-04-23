import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import "./index.css";

const styles = makeStyles({
  root: {
    border: 0,

    /*   boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",
     */

    color: "white",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: 25,
    },
   
  },
  multiline:{
    color: "black",
  },
 
});

const stylesX = {
  root: {
    border: 0,
    borderRadius: 3,
    /*boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",*/
    color: "white",
    margin: "none",
  },
};

export default function Description() {
  const classes = styles();

  return (
    <div className="textmessage-container">
      <TextField
      
        className={"textmessage--text " + classes.root}
        id="textmessage"
        label="Drop a Message"
        multiline
        rows={4}
        variant="outlined"
      />
    </div>
  );
}
