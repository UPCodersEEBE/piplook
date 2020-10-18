import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,IonButton
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {  camera, person, book, heartOutline, heartSharp,  paperPlaneOutline, paperPlaneSharp, } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Capture bird',
    url: '/camera',
    iosIcon: camera,
    mdIcon: camera
  },
  {
    title: 'Bird library',
    url: '/library',
    iosIcon: book,
    mdIcon: book
  },
  {
    title: 'Profile',
    url: '/profile',
    iosIcon: person,
    mdIcon: person
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Piplook</IonListHeader>
          <IonNote>Your favourite bird tracker</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      <IonButton style={{textTransform: "none"}}>Log out</IonButton>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
