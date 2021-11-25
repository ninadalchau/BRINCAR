<template>
  <ion-page>    
    <ion-content :fullscreen="true">
      <ion-text class="BRINCAR">BRINCAR</ion-text>
      <ion-item color="medium">
          <ion-input placeholder="CPF" v-model="email"></ion-input>
      </ion-item>
      <ion-item color="medium">
        <ion-input v-model="password" placeholder="Senha"></ion-input>
      </ion-item>
      <ion-row>
          <ion-button color="dark" @click="autenticar">Entrar</ion-button>
      </ion-row>
      <ion-row>
          <ion-text  style="display: flex; flex-wrap: wrap;">Ainda não possui conta? <ion-router-link style="padding-left: 10px;" href="cadastroConselheiro">Cadastre-se!</ion-router-link></ion-text>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { IonContent, IonPage } from '@ionic/vue';
// import {firebaseAuth} from '../firebase/firebaseinit.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface User {
  email: string;
  password: string;
}




export default defineComponent({
  name: 'Folder',
  components: {
    IonContent,
    IonPage
  },
  setup() {
    const user = 
      {
        email: '',
        password: ''
      }
    return { user }
    },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    autenticar() {
      alert('oioio')
      alert(this.email)
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password).then((usuario) => {
        alert(usuario)
      }).catch((e) => {
        alert(e)
      })
    }
  }
})
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;1,300&display=swap');

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

ion-item {
  background-color: #8c8c8c;
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