<template>
  <div>
    <!-- Breed -->
    <ion-item lines="none">
        <p id="p-breed">Descrição etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc</p>
      <ion-buttons style="display: flex; flex-direction: column; justify-content: space-around; padding: 5px;" slot="end">
           <ion-button color="warning"> 
            <ion-icon :icon="documentsOutline" slot="icon-only"></ion-icon>
          </ion-button>
         <ion-button color="success" href="/shearing/edit">
          <ion-icon @click="$emit('edit', this.item)" :icon="pencilOutline" slot="icon-only"></ion-icon>
        </ion-button>
           <ion-button color="danger">
            <ion-icon :icon="trashOutline" slot="icon-only"></ion-icon>
          </ion-button>
      </ion-buttons>
    </ion-item>
  </div>
</template>


<script>
import { defineComponent } from "vue";
import {
  pencilOutline,
  trashOutline,
  documentsOutline,
  chevronBackOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "Item",
  props: ["item"],
  setup() {
    return {
      pencilOutline,
      trashOutline,
      documentsOutline,
      chevronBackOutline,
    };
  },
});
</script>

<style scoped>
.itemSlide {
  width: 100%;
  background-color: #f7f7f7;
  text-align: center;
}
.itemSlide ion-icon {
  font-size: 2em;
}
</style>