import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import CaptureHelper from "./CaptureHelper"
import CaptureMaker from './CaptureMaker';

const Camera: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
          <CaptureHelper />
          <CaptureMaker />
    </IonPage>
  );
};

export default Camera;
