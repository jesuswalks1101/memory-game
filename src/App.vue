<template>
  <div id="app">
    <div class="container flex justify-center flex-wrap">
      <Card v-for="villager in shuffle" :key="villager.index" :card="villager" />
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      images: [
        { img: "dom.png" },
        { img: "filbert.png" },
        { img: "judy.png" },
        { img: "lily.png" },
        { img: "lucky.png" },
        { img: "sherb.png" },
      ],
      villagers: [],
    };
  },
  mounted() {
    this.villagers = [...this.images, ...this.images].map((villager, index) => ({
        ...villager, matched: false, id: index
      }));
    console.log(this.villagers);
  },
  computed: {
    shuffle() {
      return this.villagers.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style>
</style>
