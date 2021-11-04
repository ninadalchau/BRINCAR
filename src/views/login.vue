<template>
  <ion-page>    
    <ion-content :fullscreen="true">
        <ion-text class="BRINCAR">BRINCAR</ion-text>
        <ion-item color="medium">
            <ion-input placeholder="CPF"></ion-input>
        </ion-item>
        <ion-item color="medium">
            <!-- <ion-label position="floating">Senha</ion-label> -->
            <ion-input placeholder="Senha"></ion-input>
        </ion-item>
        <ion-row>
            <ion-button color="dark" href="home">Entrar</ion-button>
        </ion-row>
        <ion-row>
            <ion-text  style="display: flex; flex-wrap: wrap;">Ainda não possui conta? <ion-router-link style="padding-left: 10px;" href="cadastroConselheiro">Cadastre-se!</ion-router-link></ion-text>
        </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  name: 'Folder',
  components: {
    // IonButtons,
    IonContent,
    // IonHeader,
    // IonMenuButton,
    IonPage,
    // IonTitle,
    // IonToolbar
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {gray
ion-item {
    background-color: #8c8c8c;
}
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-item {
    width: 70%;
    margin: 4vh 15%;
    border-radius: 4px;
}

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;1,300&display=swap');

.BRINCAR {
    display: flex;
    justify-content: center;
    margin: 15vh 0 10vh 0;
    font-size: 250%;
    height: 7vh;
    font-family: 'Nunito', sans-serif;
}

ion-row{
    display: flex;
    justify-content: center;    
}

ion-button {
    width: 198px;
    display: flex;
    justify-content: center;  
}

ion-link{
    display: flex;
    justify-content: center;    
}

ion-text{
    margin: 20px 0 5px 0;
    display: flex;
    justify-content: center;    
}

</style>