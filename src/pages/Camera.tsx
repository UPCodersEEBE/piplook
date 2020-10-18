import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import CaptureHelper from "./CaptureHelper"
import Capture from './CaptureHelper';
import { usePhotoGallery } from "../components/Camera";


const Camera: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const { takePhoto } = usePhotoGallery();

  return (
    <IonPage>
          <CaptureHelper />
          <IonButton onClick={takePhoto}>Take Picture</IonButton>
    </IonPage>
  );
};

export default Camera;
