<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button href="editarPerfil">
            <ion-icon :icon="createOutline" color="primary" style="font-size: 28px"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Perfil Conselheiro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <ion-row class="imagem">
        <ion-avatar>
          <img src="https://cdn.pixabay.com/photo/2018/03/31/17/52/portrait-3278758_960_720.jpg">
        </ion-avatar>
    </ion-row>  
      <ion-item color="medium">
          <ion-label color="success">01554367832</ion-label>
      </ion-item>
      <ion-item color="medium">
          <ion-label color="success">*********</ion-label>
      </ion-item>
      <ion-item color="medium">
          <ion-label color="success">Marta Rocha da Silva</ion-label>
      </ion-item>
      <ion-item color="medium">
          <ion-label color="success">martajsilva@gmail.com</ion-label>
      </ion-item>
      <ion-item color="medium">
          <ion-label color="success">6547382974</ion-label>
      </ion-item>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { createOutline } from 'ionicons/icons';


export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonIcon, 
    IonTitle,
    IonToolbar
  },
  setup () {
    return {
      createOutline
    }
  }
};
</script>

<style scoped>

ion-avatar{ 
  width: 30vw;
  height: 30vw;
  max-height: 180px;
  max-width: 180px;
}

ion-item {
    width: 70%;
    margin: 2vh 15%;
    border-radius: 4px;
}

.imagem {
  width: 100%;
  display: flex;
  justify-content: center; 
  padding: 7vh;   
}

.botao {
  width: 100%;
  display: flex;
  justify-content: center; 
}

ion-button {
    margin: 0 2vw 0 0;
    display: flex;
    justify-content: center;  
}

</style>