import React from 'react';
import dayjs from 'dayjs';
import {

    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    
  } from '@ionic/react';

import {calculateBiorhythms} from '../calculations';



  function formatDate(isoString){
      return dayjs(isoString).format('D MMM YYYY');
  }

function BiorythmCard({birthDate, targetDate}){
  const {physical, emotional, intellectual} =  calculateBiorhythms(birthDate, targetDate);

return(
    <IonCard className='ion-text-center'>
          <IonCardHeader>
            <IonCardTitle >{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p>Physical: {physical}</p>
          <p>Emotional: {emotional}</p>
          <p>Intellectual: {intellectual}</p>
        
          </IonCardContent>
        </IonCard>
)

}

export default BiorythmCard