import app from "firebase/app";

import React from "react";
import "firebase/storage";
import "firebase/firestore";


const devConfig = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
};

const config = {
    apiKey: "AIzaSyCkYt8MQPF2uex-XcghDCpsr4MEGL17Eow",
    authDomain: "spacenos-hiring.firebaseapp.com",
    databaseURL: "https://spacenos-hiring.firebaseio.com",
    projectId: "spacenos-hiring",
    storageBucket: "spacenos-hiring.appspot.com",
    messagingSenderId: "1023800752908",
    appId: "1:1023800752908:web:fb83c7e43b40f60c88e729"
  };
//const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

class Firebase extends React.Component {
  db = null;
  storage = null;

  constructor(props) {
    super(props);
    app.initializeApp(config);
    this.state = {
      url: "",
      storage: app.storage(),
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload = (image) => {
    console.log("hello" + image);
    const uploadTask = this.state.storage
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        this.state.storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
          });
      }
    );
  };
}

app.initializeApp(config);

const storage = app.storage();
const db = app.firestore();

export { app, storage, db };
