import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonItemDivider,
  IonItem,
  IonDatetime,

  
} from '@ionic/react';
import BiorythmCard from './components/BiorhythmCard';
import React, {useState} from 'react';


function App() {
  const [birthDate, setBirthDate] = useState('');
  const targetDate = new Date().toISOString();



  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center'>Biorythms</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent className="ion-padding">
        <IonItemDivider></IonItemDivider>
           <IonItem>
          
          <IonLabel position='stacked'>Date of Birth</IonLabel>
        <IonDatetime value={birthDate}  mode="ios" displayFormat='D-MMM-YYYY'
        onIonChange={(event)=> setBirthDate(event.detail.value)}/>
        </IonItem>  
        <BiorythmCard targetDate={targetDate}/>
     
        </IonContent>
    </IonApp>
  );
}

export default App;
