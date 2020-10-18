import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React , {useState} from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import CaptureHelper from "./CaptureHelper"
import Capture from './CaptureHelper';
import { usePhotoGallery } from "../components/Camera";
import BirdPopup from '../components/BirdPupup';


const Camera: React.FC = () => {
  const [show, setShow] = useState(false);
  const [birdName, setBirdName] = useState("rock dove")
  const { name } = useParams<{ name: string; }>();
  const { takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Capture bird</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Library</IonTitle>
          </IonToolbar>
        </IonHeader>
           
      {show && <BirdPopup name={birdName} setShow={setShow}/>}
          <CaptureHelper setShow={setShow} setBirdName={setBirdName} />  
      </IonContent>
    </IonPage>

  
 
  );
};

export default Camera;
