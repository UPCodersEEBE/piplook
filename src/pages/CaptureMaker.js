import axios from "axios";

import React, { Component, useState } from "react";

const CaptureMaker = () => {
  const [state, setState] = useState({
    imgUpload: "",
  });

  const getBase64 = (e) => {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setState({
        ...state,
        e,
      });
    };
    console.log(state);
    uploadHandler();
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const uploadHandler = () => {
    console.log("the selected file is : " + JSON.stringify(state));
  };

  return (
    <div>
      <input
        type="file"
        className="input-file"
        name="imgUpload"
        accept=".jpg"
        onChange={getBase64}
      />
    </div>
  );
};

export default CaptureMaker;
