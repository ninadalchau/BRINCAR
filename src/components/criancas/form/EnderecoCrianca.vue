<template>
  <ion-item color="primary" class="form">
    <ion-label>CEP</ion-label>
    <ion-input color="light" placeholder="xxxxx-xxx"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Estado</ion-label>
      <ion-select>
        <ion-select-option value="a">AC</ion-select-option>
        <ion-select-option value="b">AL</ion-select-option>
        <ion-select-option value="c">AP</ion-select-option>
        <ion-select-option value="d">AM</ion-select-option>
        <ion-select-option value="e">BA</ion-select-option>
        <ion-select-option value="f">CE</ion-select-option>
        <ion-select-option value="g">DF</ion-select-option>
        <ion-select-option value="h">ES</ion-select-option>
        <ion-select-option value="i">GO</ion-select-option>
        <ion-select-option value="j">MA</ion-select-option>
        <ion-select-option value="k">MT</ion-select-option>
        <ion-select-option value="l">MS</ion-select-option>
        <ion-select-option value="m">MG</ion-select-option>
        <ion-select-option value="n">PA</ion-select-option>
        <ion-select-option value="o">PB</ion-select-option>
        <ion-select-option value="p">PR</ion-select-option>
        <ion-select-option value="q">PE</ion-select-option>
        <ion-select-option value="r">PI</ion-select-option>
        <ion-select-option value="s">RJ</ion-select-option>
        <ion-select-option value="t">RN</ion-select-option>
        <ion-select-option value="u">RS</ion-select-option>
        <ion-select-option value="v">RO</ion-select-option>
        <ion-select-option value="w">RR</ion-select-option>
        <ion-select-option value="x">SC</ion-select-option>
        <ion-select-option value="y">SP</ion-select-option>
        <ion-select-option value="z">SE</ion-select-option>
        <ion-select-option value="1">TO</ion-select-option>
      </ion-select>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Município</ion-label>
    <ion-input color="light" placeholder="Araquari"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Bairro</ion-label>
    <ion-input color="light" placeholder="Colégio Agrícola"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Rua</ion-label>
    <ion-input color="light" placeholder="BR 280"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>Número</ion-label>
    <ion-input color="light" placeholder="Km 27"></ion-input>
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
  /* --placeholder-color: #aeafb3 !important; */
  }

</style>
