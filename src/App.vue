<template>
      <ion-router-outlet id="main-content"></ion-router-outlet>
</template>

<script lang="ts">
import { IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Blank',
  components: {
    IonRouterOutlet, 
  },
  
});
</script>

<style scoped>

</style>