<template>
  <div
    class="
      card
      w-40
      h-56
      m-2
      flex
      justify-center
      items-center
      relative
      cursor-pointer
      hover:shadow-lg
    "
    :class="{'flipped' : active}"
    @click="active = !active"
  >
    <img
      :src="require(`../assets/${card.img}`)"
      alt="ac"
      class="h-full p-4 w-full front shadow-lg"
      
    />
    <img
      src="../assets/back.png"
      alt="back"
      class="h-full w-full back shadow-sm"
    />
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["card"],
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
.front {
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
}
.flipped .front {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}
.back {
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}
.flipped .back {
  transform: rotateY(90deg);
  transition-delay: 0s;
}
</style>