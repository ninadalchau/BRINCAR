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
      <ion-segment value="responsaveis">
        <ion-segment-button value="dados"  onclick="location.href='perfilCrianca'">Dados</ion-segment-button>
        <ion-segment-button value="responsaveis">Responsáveis</ion-segment-button>
        <ion-segment-button value="enderecos"  onclick="location.href='perfilCriancaEnderecos'">Endereços</ion-segment-button>
        <ion-segment-button value="ocorrencias"  onclick="location.href='perfilCriancaOcorrencias'">Ocorrências</ion-segment-button>
        <ion-segment-button value="medidas"  onclick="location.href='perfilCriancaMedidas'">Medidas</ion-segment-button>
      </ion-segment>
    </ion-toolbar>
      <ion-item color="medium">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Responsável</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin-top: 0">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">Nome Completo</ion-text></ion-col>
          <ion-col><ion-text color="success">Cátia Silveira</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Nascimento</ion-text></ion-col>
          <ion-col><ion-text color="success">19/12/1980</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Parentesco</ion-text></ion-col>
          <ion-col><ion-text color="success">Mãe</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Tipo</ion-text></ion-col>
          <ion-col><ion-text color="success">Responsável Legal</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Programa social</ion-text></ion-col>
          <ion-col><ion-text color="success">-</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
      <ion-item color="medium" style="margin-top: 0">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Documentos</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin-top: 0">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">CPF</ion-text></ion-col>
          <ion-col><ion-text color="success">184.589.458-11</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">RG</ion-text></ion-col>
          <ion-col><ion-text color="success">9.687.372</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Órgão emissor</ion-text></ion-col>
          <ion-col><ion-text color="success">SSP-SC</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">UF</ion-text></ion-col>
          <ion-col><ion-text color="success">SC</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
      <ion-item color="medium" style="margin-top: 0">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Contato</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin: 0 auto 5vh auto">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">Telefone</ion-text></ion-col>
          <ion-col><ion-text color="success">(47) 3549-7956</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Celular</ion-text></ion-col>
          <ion-col><ion-text color="success">(47) 9 9856-2795</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Email</ion-text></ion-col>
          <ion-col><ion-text color="success">catia.silveira@gmail.com</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Moradia</ion-text></ion-col>
          <ion-col><ion-text color="success">Junto à criança</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
          <ion-item color="medium">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Responsável 2</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin-top: 0">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">Nome Completo</ion-text></ion-col>
          <ion-col><ion-text color="success">Alfredo José Silveira</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Nascimento</ion-text></ion-col>
          <ion-col><ion-text color="success">31/08/1978</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Parentesco</ion-text></ion-col>
          <ion-col><ion-text color="success">Pai</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Tipo</ion-text></ion-col>
          <ion-col><ion-text color="success">Responsável Legal</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Programa social</ion-text></ion-col>
          <ion-col><ion-text color="success">Bolsa Família</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
      <ion-item color="medium" style="margin-top: 0">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Documentos</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin-top: 0">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">CPF</ion-text></ion-col>
          <ion-col><ion-text color="success">114.498.665-71</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">RG</ion-text></ion-col>
          <ion-col><ion-text color="success">1.987.732</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Órgão emissor</ion-text></ion-col>
          <ion-col><ion-text color="success">SSP-SC</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">UF</ion-text></ion-col>
          <ion-col><ion-text color="success">SC</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
      <ion-item color="medium" style="margin-top: 0">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Contato</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin: 0 auto 5vh auto">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">Telefone</ion-text></ion-col>
          <ion-col><ion-text color="success">(47) 3539-2456</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Celular</ion-text></ion-col>
          <ion-col><ion-text color="success">(47) 9 9753-3340</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Email</ion-text></ion-col>
          <ion-col><ion-text color="success">alfredo_jose_silveira@gmail.com</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Moradia</ion-text></ion-col>
          <ion-col><ion-text color="success">Longe da criança</ion-text></ion-col>
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