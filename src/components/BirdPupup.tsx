import React, { useEffect } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, withIonLifeCycle, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk, card } from 'ionicons/icons';


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
    name: "Common Blackbird",selfUrl:"commonblackbird",imgURL: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/44584641/1800",unlocked: false
  },
  {
    name: "Bald Eagle",selfUrl:"baldeagle", imgURL: "https://www.wkms.org/sites/wkms/files/styles/x_large/public/201911/1920px-a_banded_adult_bald_eagle__5657709617_.jpg",unlocked: false
  }
]

interface CardProps {
    name: string;
    setShow: Function;

  }
const BirdDetails: React.FC<CardProps> = ({ name, setShow }) => {
const id = window.location.pathname.toString().slice(6)
 console.log(id)

    return (
      <IonCard>
        <button onClick={()=>setShow(false)}>Ok</button>
         {info.map((item,i) =>(<div>
        {item.name.toLowerCase() === name.toLowerCase()  && <><div><img alt = "Img Not Found" src={item.imgURL}/></div><div></div><h1>{item.name}</h1></>}</div>
      ))}
      <IonButton>Map</IonButton>  
      </IonCard>
    );
  };
  
  export default BirdDetails;