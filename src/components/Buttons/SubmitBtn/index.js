import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MicIcon from '@material-ui/icons/Mic';
import InputLabel from '@material-ui/core/InputLabel';
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Button from "@material-ui/core/Button"
import './index.css'
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";

const styles = makeStyles((theme)=>({
    root: {
      border: 0,
  
      /*   boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",
       */
  
      color: "white",
      backgroundColor:"#0e3063",
      width: "30%",
      height:"50px",
      [theme.breakpoints.down('sm')]: {
        width: "100%",
        height:"50px",
    
        
        "& .MuiListItemAvatar-root": {
          color:"red",
          backgroundColor:"red",
          display:"none"
        },
      }
  
    },
    multiline:{
      color: "black",
    },
    ".MuiFormLabel-root": {
      borderRadius: "50px",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
    },

      }) );
  
export default function SubmitButton() {
    const classes = styles();
  return (
    <div className="submit-button-container">

       
        <Button
        className={"submit-btn "+classes.root}
        variant="contained"
       
        color="primary"
      
       
      >
       Get an Appointment
      </Button>
    </div>
  );
}
