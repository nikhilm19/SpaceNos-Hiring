import React from "react";

import "./index.css";
import Recorder from "./Recorderjs/src";
import { app, db, storage } from "../Firebase";

import { makeStyles } from "@material-ui/core/styles";
import MicIcon from "@material-ui/icons/Mic";
import Button from "@material-ui/core/Button";
import { green } from '@material-ui/core/colors';

import TransitionSnackbar from "../Snackbar"
import ProgressBar from "../ProgressBar"
import Slide from "@material-ui/core/Slide";

import { withStyles } from '@material-ui/core/styles';
function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}


  

//const audioContext =  new (window.AudioContext || window.webkitAudioContext)();

//const storageClient = Firebase.storage;

class VoiceMessage extends React.Component {
  constructor(props) {
    super(props);
    this.storeUrl = this.storeUrl.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.startOrStopRecording = this.startOrStopRecording.bind(this);
    //  this.pauseRecording = this.pauseRecording.bind(this);
    this.createDownloadLink = this.createDownloadLink.bind(this);
	this.handleClose = this.handleClose.bind(this);
	this.handleProgressClose = this.handleProgressClose.bind(this);
    this.state = {
      url: "",
      label: "Voice Message",
      isRecording: false,
	  openSnackBar: false,
	  openProgress:false,
      progress: 0,
      Transition: SlideTransition(),
      //webkitURL is deprecated but nevertheless
      URL: window.URL || window.webkitURL,

      gumStream: "", //stream from getUserMedia()
      rec: null, //Recorder.js object
      input: null, //MediaStreamAudioSourceNode we'll be recording

      // shim for AudioContext when it's not avb.
      AudioContext: window.AudioContext || window.webkitAudioContext,
      audioContext: null, //audio context to help us record
    };
  }

  handleClose = () => {
    this.setState({
      ...this.state,
      openSnackBar: false,
    });
  };

  handleProgressClose = () => {
    this.setState({
      ...this.state,
      openProgress: false,
    });
  };
  startOrStopRecording = () => {
    if (this.state.isRecording) {
      this.stopRecording();
    } else this.startRecording();
  };

  storeUrl = (url) => {
	
    const addUrl = db
      .collection("appointments")
      .doc("zhuVOpratfGs8xxP1LT0")
      .update({
        urls: app.firestore.FieldValue.arrayUnion({
          url: url,
          filename: this.state.filename,
        }),
	  });
	  
	  this.setState({ openProgress: false });
	  this.setState({openSnackBar:true})
	//.add({url:url,userId:"xyz",fileName:this.state.filename})
	

    addUrl
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        this.setState({ url });
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  handleUpload = () => {
    const { blob, filename } = this.state;

    console.log("hello from upload");

    const uploadTask = storage.ref("voice-messages/" + filename).put(blob);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
		this.setState({ progress });
		this.setState({ openProgress: true });
      
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("voice-messages/" + filename)

          .getDownloadURL()
          .then((url) => {
			
			this.storeUrl(url);
			
          })
          .catch((error) => {
            console.log("caught" + JSON.stringify(error));
          });
      }
    );
  };

  startRecording = () => {
    console.log("recordButton clicked");

    var constraints = { audio: true, video: false };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        console.log(
          "getUserMedia() success, stream created, initializing Recorder.js ..."
        );

        this.setState({
          audioContext: new AudioContext(),
          gumStream: stream,
          label: "Stop Recording",
          isRecording: !this.state.isRecording,
        });

        this.setState({
          input: this.state.audioContext.createMediaStreamSource(stream),
        });
        //input = audioContext.createMediaStreamSource(stream);

        console.log(this.state);
        this.setState({
          rec: new Recorder(this.state.input, { numChannels: 1 }),
        });
        // rec = new Recorder(input, { numChannels: 1 });

        //start the recording process
        this.state.rec.record();

        console.log("Recording started");
      })
      .catch(function (err) {
        //enable the record button if getUserMedia() fails
      });
  };

  stopRecording = () => {
    console.log("stopButton clicked");

    //disable the stop button, enable the record too allow for new recordings

    //tell the recorder to stop the recording

    if (!this.state.rec) {
      alert("Please allow microphone permission");
    } else this.state.rec.stop();

    this.setState({ label: "Voice Message" });

    //stop microphone access
    this.state.gumStream.getAudioTracks()[0].stop();

    //create the wav blob and pass it on to createDownloadLink

	this.state.rec.exportWAV(this.createDownloadLink);
	this.setState({isRecording:!this.state.isRecording})
  };

  createDownloadLink = (blob) => {
    var url = URL.createObjectURL(blob);
  
    var filename = new Date().toISOString();

    this.setState({ blob, filename: filename + ".wav" });

    this.handleUpload();

    //console.log(link);
  };

  render() {

	const { classes } = this.props;
    return (
      <div className="voice-message-container">
        <Button

        style={{width:"30%",height:"50px",backgroundColor:"#4063ff"}}
          className="voice-message-btn--start"
          variant="contained"
          color="secondary"
          onClick={this.startOrStopRecording}
          startIcon={<MicIcon />}
        >
          
          {this.state.label}
        </Button>
		
		<ProgressBar open ={this.state.openProgress}  handleClose={this.handleProgressClose}/>
		<TransitionSnackbar open={this.state.openSnackBar} handleClose={this.handleClose}/>
      </div>
    );
  }
}



export default VoiceMessage;
