import React from 'react';
import { useParams } from 'react-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import axios from "axios";




axios.get("https://piplook.herokuapp.com/bird_pokedex?user_id=test")
      .then((response) => {
        console.log(response);
      });

// def funcio {llist_targetes, llista_unlocked}{
//   for bird in llista_targts  
//   i
//     BirdCard.unlocked=False
// }


interface CardProps {
    name: string;
    selfUrl: string;
    imgURL: string;
    unlocked: boolean;
  }
  
  const BirdCard: React.FC<CardProps> = ({ name, imgURL, unlocked , selfUrl}) => {
    const newUrl = "/bird/"+selfUrl;
    return (
      <IonCard onClick={() => {window.location.href=newUrl}}>
          <img alt = "Img Not Found" style= {unlocked? undefined:{filter: "grayscale(1)"}} src={imgURL}/>
          <IonCardHeader>
              <IonCardTitle>{name}</IonCardTitle>
          </IonCardHeader>
          </IonCard>
    );
  };
  
  export default BirdCard;