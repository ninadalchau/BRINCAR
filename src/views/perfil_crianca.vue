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
        <ion-title>Perfil Criança</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <ion-row class="imagem">
        <ion-avatar>
          <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg">
        </ion-avatar>
    </ion-row>  
    <ion-title class="BRINCAR">Marina Linda Dalchau</ion-title>
      <ion-item color="medium">
        <ion-label color="success" class="subtitulo">Criança</ion-label>
      </ion-item>
    <ion-item color="medium">
      <ion-col>
        <ion-text color="success">Nome Completo</ion-text>
        <ion-text color="success">Nascimento</ion-text>
        <ion-text color="success">Sexo</ion-text>
        <ion-text color="success">Nacionalidade</ion-text>
        <ion-text color="success">Naturalidade</ion-text>
        <ion-text color="success">Cor</ion-text>
        <ion-text color="success">Raça</ion-text>
        <ion-text color="success">Deficiência</ion-text>
      </ion-col>
      <ion-col>
        <ion-text color="success">Maria Eduarda Silveira</ion-text>
        <ion-text color="success">21/02/2007</ion-text>
        <ion-text color="success">Feminino</ion-text>
        <ion-text color="success">Brasileira</ion-text>
        <ion-text color="success">Joinville, Santa Catarinense</ion-text>
        <ion-text color="success">Parda</ion-text>
        <ion-text color="success">Negra</ion-text>
        <ion-text color="success">Joinville, Santa Catarinense</ion-text>
      </ion-col>
    </ion-item>
      <ion-item color="medium">
        <ion-label color="success" class="subtitulo">Documentos</ion-label>
      </ion-item>
    <ion-item color="medium">
      <ion-col>
        <ion-text color="success">CPF</ion-text>
        <ion-text color="success">RG</ion-text>
        <ion-text color="success">Órgão emissor</ion-text>
        <ion-text color="success">UF</ion-text>
        <ion-text color="success">Mora com responsável?</ion-text>
      </ion-col>
      <ion-col>
        <ion-text color="success">Login (CPF)</ion-text>
        <ion-text color="success">Senha</ion-text>
        <ion-text color="success">Nome Completo</ion-text>
        <ion-text color="success">Email</ion-text>
        <ion-text color="success">Número de Portaria</ion-text>
      </ion-col>
    </ion-item>
      <ion-item color="medium">
        <ion-label color="success" class="subtitulo">Login (CPF)</ion-label>
      </ion-item>
    <ion-item color="medium">
      <ion-col>
        <ion-text color="success">Login (CPF)</ion-text>
        <ion-text color="success">Senha</ion-text>
        <ion-text color="success">Nome Completo</ion-text>
        <ion-text color="success">Email</ion-text>
        <ion-text color="success">Número de Portaria</ion-text>
      </ion-col>
      <ion-col>
        <ion-text color="success">Login (CPF)</ion-text>
        <ion-text color="success">Senha</ion-text>
        <ion-text color="success">Nome Completo</ion-text>
        <ion-text color="success">Email</ion-text>
        <ion-text color="success">Número de Portaria</ion-text>
      </ion-col>
    </ion-item>
      <ion-item color="medium">
        <ion-label color="success" class="subtitulo">Login (CPF)</ion-label>
      </ion-item>
    <ion-item color="medium">
      <ion-col>
        <ion-text color="success">Login (CPF)</ion-text>
        <ion-text color="success">Senha</ion-text>
        <ion-text color="success">Nome Completo</ion-text>
        <ion-text color="success">Email</ion-text>
        <ion-text color="success">Número de Portaria</ion-text>
      </ion-col>
      <ion-col>
        <ion-text color="success">Login (CPF)</ion-text>
        <ion-text color="success">Senha</ion-text>
        <ion-text color="success">Nome Completo</ion-text>
        <ion-text color="success">Email</ion-text>
        <ion-text color="success">Número de Portaria</ion-text>
      </ion-col>
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

*{
  border: transparent 0px solid;
}

.BRINCAR {
    display: flex;
    justify-content: center;
    font-size: clamp(3px ,7vw, 40px) !important;
    height: 7vh;
    font-family: 'Nunito', sans-serif;
}

ion-avatar{ 
  width: 30vw;
  height: 30vw;
  max-height: 180px;
  max-width: 180px;
}

ion-item {
    width: 90%;
    max-width: 1000px;
    margin: auto;
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

ion-text{
  font-size: clamp(3px ,4vw, 20px) !important;
  display: flex;
  flex-wrap: wrap;
  padding: 1vh 2vw;
}


.subtitulo{
  display: flex;
  justify-content: center;
}
</style>



<!--<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-back-button></ion-back-button>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="createOutline" color="primary" style="font-size: 28px"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"> 
      <ion-avatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
      </ion-avatar>
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { createOutline } from 'ionicons/icons';


export default {
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
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

ion-avatar{
  width: auto;
  height: auto;
  margin: 10px 35vw 0 35vw;
}
</style>-->