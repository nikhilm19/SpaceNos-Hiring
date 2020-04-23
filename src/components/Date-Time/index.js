import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import './index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexDirection: "row",

    backgroundColor: "theme.palette.background.paper",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginRight:"5px",
    },
  },
  li: {
    color: "#dee0e3",
    backgroundColor: "#1e3a87",
    display: "flex",
    flexDirection: "row",
    marginRight: "30px",
    marginBottom: "5px",
    borderRadius: "30px",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",

      "& .MuiListItemAvatar-root": {
        color: "red",
        backgroundColor: "red",
        display: "none",
      },
    },
  },
}));

const MobileView = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "theme.palette.background.paper",
  },
  li: {
    color: "#dee0e3",
    backgroundColor: "#1e3a87",
    display: "flex",
    flexDirection: "column",
    marginRight: "30px",
    borderRadius: "30px",
  },
}));

export default function FolderList() {
  let classes = useStyles();
  /*const matches = useMediaQuery('(max-width:600px)');
  if(matches) classes = MobileView();
  else classes = useStyles();*/

  return (
    <div className="date-time-picker" style={{ marginTop: "40px" }}>
      <h2>Appoinment Time</h2>
      <div className="time-container">
        <List className={classes.root}>
          <ListItem className={classes.li}>
            <ListItemAvatar>
              <Avatar>
                <QueryBuilderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="10:00 AM" />
          </ListItem>
          <ListItem className={classes.li}>
            <ListItemAvatar>
              <Avatar>
                <QueryBuilderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="11:00 AM" />
          </ListItem>
          <ListItem className={classes.li}>
            <ListItemAvatar>
              <Avatar>
                <QueryBuilderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="12:00 Noon" />
          </ListItem>
        </List>
        <List className={classes.root}>
          <ListItem className={classes.li}>
            <ListItemAvatar>
              <Avatar>
                <QueryBuilderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="1:00 PM" />
          </ListItem>
          <ListItem className={classes.li}>
            <ListItemAvatar>
              <Avatar>
                <QueryBuilderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="2:00 PM" />
          </ListItem>
          <ListItem className={classes.li}>
            <ListItemAvatar>
              <Avatar>
                <QueryBuilderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="3:00 PM" />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
