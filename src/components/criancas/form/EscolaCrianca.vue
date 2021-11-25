<template>
  <ion-item color="primary" class="form">
    <ion-label>Situação Escolar</ion-label>
    <ion-select>
      <ion-select-option value="a">Ativo</ion-select-option>
      <ion-select-option value="b">Abandonou</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Escolaridade</ion-label>
    <ion-select interface="action-sheet">
      <ion-select-option value="a">Ensino Fundamental I Incompleto</ion-select-option>
      <ion-select-option value="b">Ensino Fundamental I Completo</ion-select-option>
      <ion-select-option value="c">Ensino Fundamental II Incompleto</ion-select-option>
      <ion-select-option value="d">Ensino Fundamental II Completo</ion-select-option>
      <ion-select-option value="e">Ensino Médio Incompleto</ion-select-option>
      <ion-select-option value="f">Ensino Médio Completo</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Nome da Escola</ion-label>
    <ion-input color="light" placeholder="IFC-Campus Araquari"></ion-input>
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
  width: 86%;
  max-width: 1000px;
  margin: 1vh auto;
  border-radius: 4px;
  display: flex;
  justify-content: center;  
  }

</style>
