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
          <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg">
        </ion-avatar>
    </ion-row>  
      <ion-item color="medium">
          <ion-label color="success">Login (CPF)</ion-label>
      </ion-item>
      <ion-item color="medium">
          <ion-label color="success">Senha</ion-label>
      </ion-item>
      <ion-item color="medium">
          <ion-label color="success">Nome Completo</ion-label>
      </ion-item>
      <ion-item color="medium">
          <ion-label color="success">Email</ion-label>
      </ion-item>
      <ion-item color="medium">
          <ion-label color="success">Número de Portaria</ion-label>
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