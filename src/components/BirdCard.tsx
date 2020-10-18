import React from 'react';
import { useParams } from 'react-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const info = [
  {
    name: "Rock Dove", selfUrl:"rockdove", imgURL: "https://www.sanimedsl.com/wp-content/uploads/2019/10/palomas.jpg",unlocked: true
  },
  {
    name: "American Goldfinch",selfUrl:"americangoldfinch", imgURL: "https://www.allaboutbirds.org/guide/assets/photo/124706471-480px.jpg",unlocked: false
  },
  {
    name: "European Robin", selfUrl:"europeanrobin",imgURL: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg",unlocked: true
  },
  {
    name: "Flamingo", selfUrl:"flamingo",imgURL: "https://myanimals.com/es/wp-content/uploads/2018/02/flamencos-caracteristicas-habitat-alimentacion.jpg",unlocked: true
  },
  {
    name: "House Sparrow",selfUrl:"housesparrow", imgURL: "https://www.allaboutbirds.org/guide/assets/photo/63742431-480px.jpg",unlocked: false
  },
  {
    name: "Ostrich",selfUrl:"ostrich", imgURL: "https://news.cgtn.com/news/2020-09-06/Digital-Safari-How-fast-can-ostriches-run--TxeVEj7aso/img/53e8e08c6e9e452dafd4b8ed20fb08c8/53e8e08c6e9e452dafd4b8ed20fb08c8-750.png",unlocked: false
  },
  {
    name: "Duck", selfUrl:"duck",imgURL: "https://cms.qz.com/wp-content/uploads/2016/10/2427770107_e7be35d768_o-e1475851811724.jpg?quality=75&strip=all&w=1600&h=900&crop=1",unlocked: false
  },
  {
    name: "Hen", selfUrl:"hen",imgURL: "https://www.bhwt.org.uk/wp-content/uploads/2020/02/hen-examination-guidelines.jpg",unlocked: true
  },
  {
    name: "Common Blackbird",selfUrl:"commonblackbird",imgURL: "https://lh3.googleusercontent.com/proxy/FIIxg1XYw44DmfT3-zgRDpJ8R6sE13xcq6u0jEH_4olLTzfILEjCnoa6tIwxI3zFLf90h3gZxE6lVGUvVeyh3RQrHRLwG5Lf_Z7B4UVe0fN8haxdRQKRfQ",unlocked: false
  },
  {
    name: "Bald Eagle",selfUrl:"baldeagle", imgURL: "https://www.wkms.org/sites/wkms/files/styles/x_large/public/201911/1920px-a_banded_adult_bald_eagle__5657709617_.jpg",unlocked: false
  }
]

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