<template>
  <IonApp>
      <ion-router-outlet id="main-content"></ion-router-outlet>
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Blank',
  components: {
    IonApp, 
    IonRouterOutlet, 
  },
  
});
</script>

<style scoped>

</style>