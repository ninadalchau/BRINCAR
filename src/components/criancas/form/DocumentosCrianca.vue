<template>
  <ion-item color="primary" class="form">
    <ion-label>CPF</ion-label>
    <ion-input color="light" placeholder="xxx.xxx.xxx-xx"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>RG</ion-label>
    <ion-input color="light" placeholder="x.xxx.xxx"></ion-input>
  </ion-item>

  <ion-item color="primary" class="form">
      <ion-label>Órgão Emissor</ion-label>
      <ion-select>
        <ion-select-option value="a">SSP</ion-select-option>
        <ion-select-option value="b">SSPDS</ion-select-option>
        <ion-select-option value="c">SESP</ion-select-option>
        <ion-select-option value="d">SESED</ion-select-option>
        <ion-select-option value="e">SESDEC</ion-select-option>
      </ion-select>
  </ion-item>

  <ion-item color="primary" class="form">
    <ion-label>UF</ion-label>
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
      <ion-label>Mora com responsável?</ion-label>
      <ion-select>
        <ion-select-option value="f">Sim</ion-select-option>
        <ion-select-option value="m">Não</ion-select-option>
      </ion-select>
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
