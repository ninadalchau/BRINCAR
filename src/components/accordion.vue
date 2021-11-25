<template>
  <ion-list>
    <div v-for="listItem in displayList" :key="listItem.id" style="">
      <!-- Header -->
      <ion-item
        class="ion-padding default-header"
        lines="none"
        :ref="'header-' + listItem.id"
      >
        <h5 slot="start">{{ listItem.amountOfWool }} Kgs de lã</h5>
        <ion-label>
          <h3>{{ listItem.date }}</h3>
          <p>{{ listItem.amountOfWool }}</p>
          <p style="color: #888888; font-size: 12px;"> Alterado em {{ listItem.date }}</p>
        </ion-label>

        <!-- Float button -->
        <ion-fab-button
          color="primary"
          size="small"
          @click="headerClicked(listItem)"
          v-if="!isExpanded(listItem)"
        >
          <ion-icon :icon="chevronDownOutline"></ion-icon>
        </ion-fab-button>

        <ion-fab-button
          color="dark"
          size="small"
          @click="headerClicked(listItem)"
          v-else
        >
          <ion-icon :icon="chevronUpOutline"></ion-icon>
        </ion-fab-button>
      </ion-item>
      
      <!-- Body -->
      <transition name="fade">
        <div
          style="margin-top: 8px; display: none; height: auto"
          :ref="'body-' + listItem.id"
          v-show="isExpanded(listItem)"
        >
          <slot :item="listItem"></slot>
        </div>
      </transition>
    </div>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { chevronDownOutline, chevronUpOutline } from "ionicons/icons";

export default defineComponent({
  name: "Accordion",
  props: ["list"],
  setup() {
    return {
      chevronDownOutline,
      chevronUpOutline,
    };
  },
  data() {
    return {
      displayList: this.list,
    };
  },
  methods: {
    isExpanded(item: any) {
      const curE: any = this.$refs["body-" + item.id];
      if (curE === undefined) return false;
      if (curE.dataset.isExpanded === "true") {
        return true;
      } else {
        return false;
      }
    },
    headerClicked(item: any) {
      this.displayList.map(function (this: any, e: any) {
        const curE = this.$refs["body-" + e.id];
        if (e === item) {
          curE.setAttribute(
            "data-is-expanded",
            curE.dataset.isExpanded === "true" ? false : true
          );
        } else {
          curE.setAttribute(
            "data-is-expanded",
            false
          );
        }
      }, this);
      this.displayList = [...this.displayList];
    },
  },
});
</script>

<style scoped>
.default-header {
  padding: 0 !important;
  background-color: #f1f1f1;
}
ion-fab-button {
  --box-shadow: none;
}

/* Transition */
.fade-enter-active {
  transition: height 0.5s ease-in-out;
}
.fade-leave-active {
  transition: height 0.1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  height: 0px !important;
}
</style>