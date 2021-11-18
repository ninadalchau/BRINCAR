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
          <img src="https://www.pastoraldacrianca.org.br/images/noticias/2019/GNRC.jpg">
        </ion-avatar>
    </ion-row>
    <ion-title class="nome">Maria Eduarda Silveira</ion-title>
    <ion-toolbar>
      <ion-segment value="enderecos">
        <ion-segment-button value="dados"  onclick="location.href='perfilCrianca'">Dados</ion-segment-button>
        <ion-segment-button value="responsaveis" onclick="location.href='perfilCriancaResponsavel'">Responsáveis</ion-segment-button>
        <ion-segment-button value="enderecos">Endereços</ion-segment-button>
        <ion-segment-button value="ocorrencias"  onclick="location.href='perfilCriancaOcorrencias'">Ocorrências</ion-segment-button>
        <ion-segment-button value="medidas"  onclick="location.href='perfilCriancaMedidas'">Medidas</ion-segment-button>
      </ion-segment>
    </ion-toolbar>
      <ion-item color="medium">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Criança</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin-top: 0">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">CEP</ion-text></ion-col>
          <ion-col><ion-text color="success">89205260</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Estado</ion-text></ion-col>
          <ion-col><ion-text color="success">Santa Catarina</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Município</ion-text></ion-col>
          <ion-col><ion-text color="success">Joinville</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Bairro</ion-text></ion-col>
          <ion-col><ion-text color="success">Boa Vista</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Rua</ion-text></ion-col>
          <ion-col><ion-text color="success">Albano Schimtz</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Número</ion-text></ion-col>
          <ion-col><ion-text color="success">423</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
      <ion-item color="medium" style="margin-top: 0">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Contato</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin: 0 auto 5vh auto">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">Parentesco</ion-text></ion-col>
          <ion-col><ion-text color="success">Mãe</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Celular</ion-text></ion-col>
          <ion-col><ion-text color="success">(47) 9 9856-2795</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Telefone</ion-text></ion-col>
          <ion-col><ion-text color="success">(47) 3549-7956</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Email</ion-text></ion-col>
          <ion-col><ion-text color="success">catia.silveira@gmail.com</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
          <ion-item color="medium">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Responsável 2</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin-top: 0">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">CEP</ion-text></ion-col>
          <ion-col><ion-text color="success">89207590</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Estado</ion-text></ion-col>
          <ion-col><ion-text color="success">Santa Catarina</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Município</ion-text></ion-col>
          <ion-col><ion-text color="success">Joinville</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Bairro</ion-text></ion-col>
          <ion-col><ion-text color="success">Guanabara</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Rua</ion-text></ion-col>
          <ion-col><ion-text color="success">Graciosa</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Número</ion-text></ion-col>
          <ion-col><ion-text color="success">254</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
      <ion-item color="medium" style="margin-top: 0">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Contato</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin: 0 auto 5vh auto">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">Parentesco</ion-text></ion-col>
          <ion-col><ion-text color="success">Pai</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Celular</ion-text></ion-col>
          <ion-col><ion-text color="success">(47) 9 9753-3340</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Telefone</ion-text></ion-col>
          <ion-col><ion-text color="success">(47) 3539-2456</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Email</ion-text></ion-col>
          <ion-col><ion-text color="success">alfredo_jose_silveira@gmail.com</ion-text></ion-col>
        </ion-row>
      </ion-grid>
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
.nome {
    text-align: center;
    font-size: clamp(3px ,7vw, 30px) !important;
    font-family: 'Nunito', sans-serif;
    height: 7vh;
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
    margin: 5vh auto 0 auto;
}

.imagem {
  width: 100%;
  display: flex;
  justify-content: center; 
  padding: 7vh 0 2vh 0;   
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