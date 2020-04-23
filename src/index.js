import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Description from "./components/Description";
import Name from "./components/Name";
import AppHeader from "./components/Header";
import VoiceMessage from "./components/VoiceMessage";
import DateTime from "./components/Date-Time";
import TextMessage from "./components/TextMessage";
import ImageUpload from "./components/VoiceUploader/index";
import {
  SubmitButton,
  
} from './components/Buttons';
import {app,FirebaseContext} from "./components/Firebase";
import * as serviceWorker from "./serviceWorker";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { blue, pink } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";

const style = {
  root: {
    color: "red", // 🔴
    padding: "30px",
    "& > *": {
      margin: "16px",
      width: "25ch",
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red", // 🔴

    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

ReactDOM.render(
  <FirebaseContext.Provider value={app}>
    <ThemeProvider theme={theme}>
      <App>
        <Paper elevation={5} style={{padding:"30px",border:"5px #2f659c solid",backgroundColor:"#f0f1f2"}}>
          <AppHeader />

          <Name />
          <Description />
          <DateTime/>
          <VoiceMessage />
          <TextMessage />
          <SubmitButton/>
         
        </Paper>
      </App>
    </ThemeProvider>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
