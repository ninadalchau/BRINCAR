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
      <ion-segment value="dados">
        <ion-segment-button value="dados">Dados</ion-segment-button>
        <ion-segment-button value="responsaveis" onclick="location.href='perfilCriancaResponsavel'">Responsáveis</ion-segment-button>
        <ion-segment-button value="enderecos"  onclick="location.href='perfilCriancaEnderecos'">Endereços</ion-segment-button>
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
          <ion-col><ion-text color="dark">Nome Completo</ion-text></ion-col>
          <ion-col><ion-text color="success">Maria Eduarda Silveira</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Nascimento</ion-text></ion-col>
          <ion-col><ion-text color="success">21/02/2007</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Sexo</ion-text></ion-col>
          <ion-col><ion-text color="success">Feminino</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Nacionalidade</ion-text></ion-col>
          <ion-col><ion-text color="success">Brasileira</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Naturalidade</ion-text></ion-col>
          <ion-col><ion-text color="success">Joinville, Santa Catarina</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Cor</ion-text></ion-col>
          <ion-col><ion-text color="success">Parda</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Raça</ion-text></ion-col>
          <ion-col><ion-text color="success">Preta</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Deficiência</ion-text></ion-col>
          <ion-col><ion-text color="success">-</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>

      <ion-item color="medium">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Documentos</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin-top: 0">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">CPF</ion-text></ion-col>
          <ion-col><ion-text color="success">165.521.125-00</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">RG</ion-text></ion-col>
          <ion-col><ion-text color="success">7.458.547</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Órgão emissor</ion-text></ion-col>
          <ion-col><ion-text color="success">SSP-SC</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">UF</ion-text></ion-col>
          <ion-col><ion-text color="success">SC</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Mora com responsável?</ion-text></ion-col>
          <ion-col><ion-text color="success">Sim</ion-text></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
      <ion-item color="medium">
        <ion-label color="dark" style="font-weight: bold" class="subtitulo">Escola</ion-label>
      </ion-item>
    <ion-item color="medium" style="margin: 0 auto 5vh auto">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">Situação</ion-text></ion-col>
          <ion-col><ion-text color="success">Não sei</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Escolaridade</ion-text></ion-col>
          <ion-col><ion-text color="success">Ensino Fundamental completo</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Nome</ion-text></ion-col>
          <ion-col><ion-text color="success">Colégio Positivo Joinville</ion-text></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-text color="dark">Cidade</ion-text></ion-col>
          <ion-col><ion-text color="success">Joinville</ion-text></ion-col>
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