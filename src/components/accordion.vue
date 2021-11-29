<template>
  <ion-list>
    <div v-for="listItem in displayList" :key="listItem.id" style="">
      <ion-item class="ion-padding" style="padding: 0 !important; background-color: #f1f1f1;" lines="none" :ref="'header-' + listItem.id">
        <h5 slot="start" style="background-color: primary">{{listItem.name}}</h5>

        <ion-fab-button style="--box-shadow: none;" color="primary" size="small" @click="headerClicked(listItem)" v-if="!isExpanded(listItem)" slot="end">
          <ion-icon :icon="chevronDownOutline"></ion-icon>
        </ion-fab-button>

        <ion-fab-button style="--box-shadow: none;" color="dark" size="small" @click="headerClicked(listItem)" v-else slot="end">
          <ion-icon :icon="chevronUpOutline"></ion-icon>
        </ion-fab-button>
      </ion-item>
      
      <transition name="fade">
        <div style="margin-top: 8px; display: none; height: auto" :ref="'body-' + listItem.id" v-show="isExpanded(listItem)">
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