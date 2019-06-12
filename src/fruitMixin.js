export const fruitMixin = {
  data: function() {
    return {
      fruits: ["Apple", "Kiwi", "Strawberry", "Honeydew"],
      filterText: ""
    };
  },
  computed: {
    filterFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  created: function() {
    console.log("Created");
  }
};
