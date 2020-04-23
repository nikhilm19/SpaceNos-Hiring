import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MicIcon from '@material-ui/icons/Mic';
import InputLabel from '@material-ui/core/InputLabel';
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Button from "@material-ui/core/Button"
import './index.css'
export default function ResetButtom() {
  return (
    <div className="submit-button-container">

       
        <Button
        className="submit-btn"
        variant="contained"
       
        color="primary"
      
        startIcon={<MicIcon />}
      >
        Submit
      </Button>
    </div>
  );
}
