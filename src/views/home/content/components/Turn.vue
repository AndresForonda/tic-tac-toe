<template>
  <div>
    <h2>Turn {{ player }}</h2>
  </div>
</template>

<script>
export default {
  name: "Turn",
  // Receive the player (taco or pizza) as prop
  props: {
    player: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
h2 {
  padding-top: 20px;
  font-size: 120px;
  font-family: "Just Another Hand", cursive;
  color: #ffffff;
}
</style>
