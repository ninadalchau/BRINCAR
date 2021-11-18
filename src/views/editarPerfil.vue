<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Editar Perfil Conselheiro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <ion-row class="imagem">
      <ion-avatar>
          <img src="https://cdn.pixabay.com/photo/2018/03/31/17/52/portrait-3278758_960_720.jpg">
      </ion-avatar>
    </ion-row>
    <ion-label color="primary" class="editar">Editar Imagem</ion-label>
      <ion-item class="ionItem" color="medium">
          <ion-label color="dark" position="stacked">Login (CPF)</ion-label>
          <ion-input placeholder="CPF"></ion-input>
      </ion-item>
      <ion-item class="ionItem" color="medium">
          <ion-label color="dark" position="stacked">Senha</ion-label>
          <ion-input placeholder="Senha"></ion-input>
      </ion-item>
      <ion-item class="ionItem" color="medium">
          <ion-label color="dark" position="stacked">Nome Completo</ion-label>
          <ion-input placeholder="Nome Completo"></ion-input>
      </ion-item>
      <ion-item class="ionItem" color="medium">
          <ion-label color="dark" position="stacked">Email</ion-label>
          <ion-input placeholder="Email"></ion-input>
      </ion-item>
      <ion-item class="ionItem" color="medium">
          <ion-label color="dark" position="stacked">Número de Portaria</ion-label>
          <ion-input placeholder="Número de Portaria"></ion-input>
      </ion-item>
      <ion-row class="botao">
        <ion-button color="dark" href="perfil">Salvar</ion-button>
      </ion-row>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { createOutline } from 'ionicons/icons';


export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
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

.ionItem {
    width: 70%;
    margin: 2vh 15%;
    border-radius: 4px;
}

.imagem {
  width: 100%;
  display: flex;
  justify-content: center; 
  padding: 7vh 0 3vh;   
}

.editar {
  width: 100%;
  display: flex;
  justify-content: center; 
  padding: 0 0 6vh 0;   
}

.botao {
  width: 100%;
  display: flex;
  justify-content: center; 
}

ion-button {
    width: 198px;
    display: flex;
    justify-content: center;  
}

ion-input {
  padding: -0px;
}
</style>