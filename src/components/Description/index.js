import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./index.css";

import { createMuiTheme } from "@material-ui/core/styles";

import { withStyles } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
const styles = {
  root: {
    border: 0,
    borderRadius: 3,
    /*boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",*/
    color: "white",
    margin: "none",
    "& .MuiOutlinedInput-root": {
      borderRadius: 25,
    },
  },
};
function Description(props) {
  const { classes } = props;
  return (
    <div className={"description-container " + classes.root}>
      <TextField
        className="description--text"
        id="description"
        label="Description"
        multiline
        rows={4}
        variant="outlined"
      />
    </div>
  );
}

Description.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Description);
