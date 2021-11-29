<template>
    <ion-item color="medium" style="margin-top: 3vh">
      <ion-label color="dark" style="font-weight: bold" class="subtitulo">17/06/2020</ion-label>
    </ion-item>
    <ion-item color="medium" style="margin-top: 0">
      <ion-grid>
        <ion-row>
          <ion-col><ion-text color="dark">{{item.info}}</ion-text></ion-col>
          <ion-col><ion-input color="success" placeholder="xx.xx.xxx.xx"></ion-input></ion-col>
        </ion-row>
      </ion-grid>
    </ion-item>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Item",
  props: ["item"],
});
</script>