<template>
  <div>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filterFruits" v-bind:key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "../fruitMixin.js";
export default {
  mixins: [fruitMixin]
};
</script>

<style></style>
