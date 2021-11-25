<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button class="edit" href="">
            <ion-icon :icon="createOutline" color="primary" style="font-size: 28px"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Perfil Criança</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <ion-row class="imagem">
      <ion-avatar>
        <img src="https://www.pastoraldacrianca.org.br/images/noticias/2019/GNRC.jpg">
      </ion-avatar>
    </ion-row>
    <ion-title class="nome">Maria Eduarda Silveira</ion-title>
    <ion-toolbar>
      <ion-segment value="ocorrencias">
        <ion-segment-button value="dados"  onclick="location.href='perfilCrianca'">Dados</ion-segment-button>
        <ion-segment-button value="responsaveis" onclick="location.href='perfilCriancaResponsavel'">Responsáveis</ion-segment-button>
        <ion-segment-button value="enderecos"  onclick="location.href='perfilCriancaEnderecos'">Endereços</ion-segment-button>
        <ion-segment-button value="ocorrencias" onclick="location.href='perfilCriancaOcorrencias'">Ocorrências</ion-segment-button>
        <ion-segment-button value="medidas" onclick="location.href='perfilCriancaMedidas'">Medidas</ion-segment-button>
      </ion-segment>
    </ion-toolbar>

    <ion-item color="medium" style="margin-top: 3vh">
      <ion-label color="dark" style="font-weight: bold" class="subtitulo">17/06/2020</ion-label>
    </ion-item>
    <ion-item color="medium" style="margin-top: 0">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">Código</ion-text></ion-col>
          <ion-col><ion-input color="success" placeholder="xx.xx.xxx.xx"></ion-input></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Tipo</ion-text></ion-col>
          <ion-col><ion-input color="success" placeholder="xxxxxxxxxxxx"></ion-input></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Notificação</ion-text></ion-col>
          <ion-col><ion-input color="success" placeholder="xx.xx.xxx.xx"></ion-input></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Hora</ion-text></ion-col>
          <ion-col><ion-input color="success" placeholder="xx:xx"></ion-input></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Não sei</ion-text></ion-col>
          <ion-col><ion-input color="success" placeholder="xx.xx.xxx.xx"></ion-input></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Não sei</ion-text></ion-col>
          <ion-col><ion-input color="success" placeholder="xx.xx.xxx.xx"></ion-input></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
    <div class="botao" style="padding: 2vh 0 0 0">
      <ion-button color="danger" href="perfilCriancaOcorrencias">Salvar</ion-button>
    </div>
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

.imagem {
  width: 100%;
  display: flex;
  justify-content: center; 
  padding: 7vh 0 2vh 0;   
}

.nome {
    text-align: center;
    font-size: clamp(3px ,7vw, 30px) !important;
    font-family: 'Nunito', sans-serif;
    height: 7vh;
}

.edit {
  margin: 0 2vw 0 0;
  display: flex;
  justify-content: center;  
}

.botao {
  display: flex;
  justify-content: center;
  color: black;
}

ion-item {
    width: 90%;
    max-width: 1000px;
    margin: 5vh auto 0 auto;
}

ion-text{
  font-size: clamp(3px, 4vw, 15px) !important;
  display: flex;
  flex-wrap: wrap;
  padding: 1vh 2vw;
}

ion-segment{
  display: flex;
  flex-wrap: wrap;
}

ion-segment-button{
  font-size: clamp(10px, 1.5vw, 16px) !important;
  width: 0 -15px;
}

.subtitulo{
  display: flex;
  justify-content: center;
}
</style>