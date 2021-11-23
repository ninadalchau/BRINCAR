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
    
    <!-- <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Crianças</ion-title>

        </ion-toolbar>
      </ion-header>
      
    
      <div id="container">
        <strong class="capitalize">Crianças</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content> -->
    <ion-content fullscreen>
      <!-- <ion-card>
        
        <ion-avatar item-start> <img src="./madison.jpg"></ion-avatar>
        <ion-card-header>
          
          <ion-card-title>Joana D'arc</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
        </ion-card-content>
      </ion-card> -->

      
      <ion-card v-for="(crianca, i) in criancinhas" :key="i"> 
            <ion-item href="perfilCrianca">
              <ion-avatar item-start> <img :src="require(`${crianca.avatar}`)"></ion-avatar>
              <h2>{{crianca.nome}}</h2>
            </ion-item>
            <ion-card-content>
              <p>{{crianca.idade}} - {{crianca.cidade}}</p>
            </ion-card-content> 
        <!-- <ion-item v-for=" (c , i) in criancinhas " :key="i">
          <ion-avatar item-start> <img src="./madison.jpg"></ion-avatar>
          <h2 >{{c.nome}}</h2>
        </ion-item>  -->
        <!-- <ion-card-content>
          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>
        </ion-card-content> -->
      </ion-card>

      <!-- <ion-card>
        <ion-grid>
          <ion-row>
          <ion-col>
        <img src="./madison.jpg">
        </ion-col>
        <ion-col>
        <ion-item>
          <ion-avatar item-start> <img src="./madison.jpg"> </ion-avatar>
          <h2>Marty McFly</h2>
        </ion-item> 
        <ion-card-content>
          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>
        </ion-card-content>
        </ion-col>
        </ion-row>
        </ion-grid>./madison.jpg

      </ion-card> -->


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    // IonTitle,
    IonToolbar
  },

  setup() {
    const criancinhas = [
      {
        nome: 'Marina Eduarda Silveira',
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
    return { criancinhas }
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
