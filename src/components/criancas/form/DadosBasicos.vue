<template>
  <ion-item color="primary" class="form">
    <ion-label>Nome</ion-label>
    <ion-input color="light" placeholder="Maria Eduarda Silveira"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Data</ion-label>
    <ion-datetime display-timezone="utc"></ion-datetime>
  </ion-item>

  <ion-item color="primary" class="form">
      <ion-label>Sexo</ion-label>
      <ion-select>
        <ion-select-option value="f">Feminino</ion-select-option>
        <ion-select-option value="m">Masculino</ion-select-option>
      </ion-select>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Nacionalidade</ion-label>
    <ion-input color="light" placeholder="Brasileiro"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Naturalidade</ion-label>
    <ion-input color="light" placeholder="Joinville, Santa Catarina"></ion-input>  </ion-item>

  <ion-item color="primary" class="form">
      <ion-label>Cor</ion-label>
      <ion-select>
        <ion-select-option value="f">Amarelo</ion-select-option>
        <ion-select-option value="f">Branco</ion-select-option>
        <ion-select-option value="m">Indígena</ion-select-option>
        <ion-select-option value="m">Pardo</ion-select-option>
        <ion-select-option value="m">Preto</ion-select-option>
      </ion-select>  </ion-item>

  <ion-item color="primary" class="form">
      <ion-label>Raça</ion-label>
      <ion-select>
        <ion-select-option value="f">Sim</ion-select-option>
        <ion-select-option value="m">Não</ion-select-option>
      </ion-select>  
  </ion-item>

  <ion-item color="primary" class="form">
      <ion-label>Possui deficiência?</ion-label>
      <ion-select>
        <ion-select-option value="f">Sim</ion-select-option>
        <ion-select-option value="m">Não</ion-select-option>
      </ion-select>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Se sim, qual?</ion-label>
    <ion-input color="light" placeholder="Visual"></ion-input>  </ion-item>

</template>


<script>
import { defineComponent } from "vue";
import { 
  IonItem, 
  IonLabel, 
  IonSelect,
  IonSelectOption
} from '@ionic/vue';


export default defineComponent({
  name: "DadosBasicos",
  components: {
    IonItem, 
    IonLabel, 
    IonSelect,
    IonSelectOption
  }
});
</script>

<style>

  .form{
  line-height: 30px;
  width: 86%;
  max-width: 1000px;
  margin: 1vh auto;
  border-radius: 4px;
  display: flex;
  justify-content: center;  
  /* --placeholder-color: #aeafb3 !important; */
  }

</style>
