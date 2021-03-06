import React, { Component } from "react";

import {db,storage} from '../Firebase'


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.storeUrl=this.storeUrl.bind(this);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  storeUrl =(url)=>{

    const addUrl = db.collection("appointments").add({url:url});

    addUrl.then((docRef)=> {
        console.log("Document written with ID: ", docRef.id);
        this.setState({ url })}
    )
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  }

  handleUpload = (e) => {
    const { image } = this.state;
 
    const uploadTask = storage.ref(`${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
    storage
          .ref(image.name)
        
          .getDownloadURL()
          .then(url => {
            this.storeUrl(url)
          });
      }
    );

    e.preventDefault();
  };
  render() {
    return (
      <div className="center">
          <br/>
          <h2 className="green-text">React Firebase Image Uploader</h2>
          <br/>
          <br/>
        <div className="row">
          <progress value={this.state.progress} max="100" className="progress" />
        </div>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        <br />
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default ImageUpload;
