<template>
  <ion-item color="medium" class="form">
    <ion-input color="light" placeholder="CPF"></ion-input>
  </ion-item>

  <ion-item color="medium" class="form">
    <ion-datetime color="light" display-timezone="utc" placeholder="Data de Nascimento"></ion-datetime>
  </ion-item>

  <ion-item color="medium" class="form">
      <ion-label>Sexo</ion-label>
      <ion-select placeholder="Select One">
        <ion-select-option value="f">Female</ion-select-option>
        <ion-select-option value="m">Male</ion-select-option>
      </ion-select>
  </ion-item>

  <ion-item color="medium" class="form">
    <ion-input placeholder="CPF"></ion-input>
  </ion-item>

  <ion-item color="medium" class="form">
    <ion-input placeholder="Senha"></ion-input>
  </ion-item>

  <ion-item color="medium" class="form">
    <ion-input placeholder="CPF"></ion-input>
  </ion-item>

  <ion-item color="medium" class="form">
    <ion-input placeholder="Senha"></ion-input>
  </ion-item>

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
  margin: 1vh 7%;
  border-radius: 4px;
  display: flex;
  justify-content: center;  
  --placeholder-color: #aeafb3 !important;
  }

  /* .color{

  } */


</style>
