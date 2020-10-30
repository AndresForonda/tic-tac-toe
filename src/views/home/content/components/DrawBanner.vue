<template>
  <div class="winner-banner flex-center-center">
    <div
      class="winner-banner-message linear-purple-background flex-center-center"
    >
      <h2>Draw! 😤😱</h2>
      <button @click="$emit('restart-game')">Play again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DrawBanner"
};
</script>

<style scoped>
div {
  color: white;
}
.winner-banner {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

.winner-banner-message {
  width: 500px;
  height: 300px;
  border-radius: 20px;
}

.winner-banner-message > h2 {
  font-size: 48px;
}

.congrats {
  font-size: 32px;
}

.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.winner {
  font-size: 68px;
}

button {
  border-radius: 10px;
  border: 4px double rgb(170, 0, 255);
  color: rgb(170, 0, 255);
  text-align: center;
  font-size: 18px;
  padding: 10px;
  width: 140px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  outline: none;
}
</style>
