import { IonButton } from "@ionic/react";
import axios from "axios";
import React, { Component } from "react";
import "./Page.css";
import GeolocationButton from "../components/Geolocation";

class Capture extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    console.log(this.props);
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios
      .post("https://piplook.herokuapp.com/bird_capture", formData)
      .then((response) => {
        this.props.setShow(true);
        this.props.setBirdName(response.data.labels[0].species);
      });
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return <div style={{ zIndex: "1000" }}></div>;
    } else {
      return (
        <div style={{ zIndex: "1000" }}>
          <br />
          <h4>
            Select an image from your gallery or upload it from your camera.
          </h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div style={{ zIndex: "1000" }}>
        <div>
          <label className="custom-file-upload">
            <input type="file" onChange={this.onFileChange} />
          </label>
          <IonButton
            disabled={!this.state.selectedFile}
            onClick={this.onFileUpload}
            style={{ width: "98.7%" }}
          >
            Upload!
          </IonButton>
          {/* <GeolocationButton /> */}
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default Capture;
