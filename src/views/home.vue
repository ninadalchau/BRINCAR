<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-searchbar animated color='medium'></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-card v-for="(crianca, i) in criancinhas" :key="i"> 
            <ion-item href="perfilCrianca">
              <ion-avatar item-start> <img :src="require(`${crianca.avatar}`)"></ion-avatar>
              <h2>{{crianca.nome}}</h2>
            </ion-item>
            <ion-card-content>
              <p>{{crianca.idade}} - {{crianca.cidade}}</p>
            </ion-card-content> 
      </ion-card>
      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button color="danger" href="formulario">
          <ion-icon :icon="add" color="light"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/vue';
import { add } from "ionicons/icons";


export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonToolbar
  },

  setup() {
    const criancinhas = [
      {
        nome: 'Maria Eduarda Silveira',
        avatar: './madu.jpg', 
        idade: "15 anos", 
        cidade: "Joinville"
      },
      {
        nome: 'Kauane Delvoss',
        avatar: './madison.jpg', 
        idade: "15 anos", 
        cidade: "Joinville"
      },
      {
        nome: 'Marina Dalchau',
        avatar: './madison.jpg', 
        idade: "16 anos", 
        cidade: "Belo Horizonte"
      },
      {
      
        nome: 'Juliana',
        avatar: './madison.jpg', 
        idade: "20 anos", 
        cidade: "itajaí"
      },
      {
      
        nome: 'Casemiro José Mota',
        avatar: './madison.jpg', 
        idade: "40 anos", 
        cidade: "Penha"
      },
      {
        nome: 'Marina Dalchau',
        avatar: './madison.jpg', 
        idade: "15 anos", 
        cidade: "Joinville"
      },
    ]
    return { criancinhas, add }
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

#container strong {
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
ion-searchbar { 
  --border-radius: 8vh;
  height: 70px
}
h2 {
  padding-left: 10px;
  margin: 5px;
}
ion-card {
  padding: 10px;
  margin: 10px;
  border: 2px
  
}

</style>
