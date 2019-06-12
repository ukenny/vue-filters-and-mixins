<template>
  <div id="app">
    <h1>Filters</h1>
    <!-- <h4>{{ test | toUppercase }}</h4> -->
    <h4>{{ test2 | toLowercase }}</h4>
    <hr />
    <button @click="addNewFruit(fruits, $event)">Add New Fruit</button>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filterFruits" v-bind:key="fruit">{{ fruit }}</li>
    </ul>
    <app-list></app-list>
  </div>
</template>

<script>
import List from "./components/List.vue";
import { fruitMixin } from "./fruitMixin.js";

export default {
  name: "app",
  components: {
    appList: List
  },
  methods: {
    addNewFruit: function(fruits, event) {
      fruits.push("Berries");

    }
  },
  data: function() {
    return {
      test: "Hello There",
      test2: "I SHOULD BE Lowercase"
    };
  },
  mixins: [fruitMixin]
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
