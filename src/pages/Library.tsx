import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import BirdCard from '../components/BirdCard';

const info = [
  {
    name: "Rock Dove", imgURL: "https://www.sanimedsl.com/wp-content/uploads/2019/10/palomas.jpg",unlocked: true
  },
  {
    name: "American Goldfinch", imgURL: "https://www.allaboutbirds.org/guide/assets/photo/124706471-480px.jpg",unlocked: false
  },
  {
    name: "European Robin", imgURL: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg",unlocked: true
  },
  {
    name: "Flamingo", imgURL: "https://myanimals.com/es/wp-content/uploads/2018/02/flamencos-caracteristicas-habitat-alimentacion.jpg",unlocked: true
  },
  {
    name: "House Sparrow", imgURL: "https://www.allaboutbirds.org/guide/assets/photo/63742431-480px.jpg",unlocked: false
  },
  {
    name: "Ostrich", imgURL: "https://news.cgtn.com/news/2020-09-06/Digital-Safari-How-fast-can-ostriches-run--TxeVEj7aso/img/53e8e08c6e9e452dafd4b8ed20fb08c8/53e8e08c6e9e452dafd4b8ed20fb08c8-750.png",unlocked: false
  },
  {
    name: "Duck", imgURL: "https://cms.qz.com/wp-content/uploads/2016/10/2427770107_e7be35d768_o-e1475851811724.jpg?quality=75&strip=all&w=1600&h=900&crop=1",unlocked: false
  },
  {
    name: "Hen", imgURL: "https://www.bhwt.org.uk/wp-content/uploads/2020/02/hen-examination-guidelines.jpg",unlocked: true
  },
  {
    name: "Common Blackbird", imgURL: "https://lh3.googleusercontent.com/proxy/FIIxg1XYw44DmfT3-zgRDpJ8R6sE13xcq6u0jEH_4olLTzfILEjCnoa6tIwxI3zFLf90h3gZxE6lVGUvVeyh3RQrHRLwG5Lf_Z7B4UVe0fN8haxdRQKRfQ",unlocked: false
  },
  {
    name: "Bald Eagle", imgURL: "https://www.wkms.org/sites/wkms/files/styles/x_large/public/201911/1920px-a_banded_adult_bald_eagle__5657709617_.jpg",unlocked: false
  }
]

const Library: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Birds Library</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Library</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonGrid>
      <div style={{display:"grid", gridTemplateColumns:"auto auto"}}>
      {info.map((item,i) =>(
        <BirdCard name={item.name} imgURL={item.imgURL} unlocked={item.unlocked} />
      ))}
      </div>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Library;
