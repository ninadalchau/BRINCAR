<template>
  <ion-item color="primary" class="form">
    <ion-label>Código</ion-label>
    <ion-input color="light" placeholder="xxxxxxxxxxxx"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Tipo</ion-label>
    <ion-select>
      <ion-select-option value="a">Não sei</ion-select-option>
      <ion-select-option value="b">Não sei</ion-select-option>
      <ion-select-option value="c">Não sei</ion-select-option>
      <ion-select-option value="d">Não sei</ion-select-option>
      <ion-select-option value="e">Não sei</ion-select-option>
      <ion-select-option value="f">Não sei</ion-select-option>
    </ion-select>
  </ion-item>

    <ion-item color="primary" class="form">
    <ion-label>Notificação</ion-label>
    <ion-input color="light" placeholder="xxxxxxxxxxxx"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Hora</ion-label>
    <ion-datetime displayFormat="HH:mm" display-timezone="utc"></ion-datetime>
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
