<template>
  <div id="app">
    <h1>Filters</h1>
    <h4>{{ test | toUppercase }}</h4>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      test: "Hello There"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
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
