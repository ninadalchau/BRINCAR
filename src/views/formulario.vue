<template>
  <ion-page>

    <!-- Content -->
    <ion-content :fullscreen="true">
      <!-- Accordion -->
      <div>
        <ion-progress-bar v-if="tosquias.length === 0" type="indeterminate"></ion-progress-bar>
        <accordion v-else :list="tosquias">
          <template v-slot="s">
            <!-- Item Slide -->
            <item @edit="editar()" :item="s.item" />
          </template>
        </accordion>
      </div>

      <!-- Message Bottom -->
      <div id="message" v-show="tosquias.length !== 0">
        <p>Abra o item e arraste para o lado para mais opções</p>
      </div>

      <!-- Float Button -->
      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button color="danger" href="/add">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { searchCircle, filterCircle, add } from "ionicons/icons";
import accordion from "@/components/accordion.vue";
import item from "@/components/item.vue";

export default defineComponent({
  name: 'formulario',
  components: {
    accordion,
    item,
  },
  setup() {
    const tosquias = [
      {
        ovelha : 1,
        id: 1,
        date : '01/01/2001',
        amountOfWool : 1,
      },{
        ovelha : 2,
        id: 2,
        date : '01/01/2001',
        amountOfWool : 1,
      },{
        ovelha : 3,
        id: 3,
        date : '01/01/2001',
        amountOfWool : 1,
      },{
        ovelha : 4,
        id: 4,
        date : '01/01/2001',
        amountOfWool : 1,
      },{
        ovelha : 5,
        id: 5,
        date : '01/01/2001',
        amountOfWool : 1,
      },
    ];

    return {
      tosquias,
      searchCircle,
      filterCircle,
      add
    }
  }
})
</script>
