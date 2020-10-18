import {
  IonButton,
  IonCol,
  IonImg,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";
import { usePhotoGallery } from "../components/Camera";
import { codeSlashOutline } from "ionicons/icons";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import CaptureHelper from "./CaptureHelper"

const Capture = () => {

  const { photos, takePhoto } = usePhotoGallery();
  const [state, setState] = useState({
    photo: "",
  });

  const { photo } = state;

  return (
    <IonPage>
      <CaptureHelper />
       <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Capture</IonTitle>

          {photos.map((photo, index) => (
            <IonCol size="6" key={index}>
              <IonImg src={photo.webviewPath} />
            </IonCol>
          ))}
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">dd</IonTitle>
          </IonToolbar>
        </IonHeader>
        <label>
          Click Me
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/png, image/jpeg"
            value={photo}
          ></input>
        </label>
        <IonButton onClick={() => takePhoto()}></IonButton>
      </IonContent> 
    </IonPage>
  );
};

export default Capture;


