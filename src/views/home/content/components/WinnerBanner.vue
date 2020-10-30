<template>
  <div class="winner-banner flex-center-center">
    <div
      class="winner-banner-message linear-orange-background flex-center-center"
    >
      <h2>We have a winner!</h2>
      <p class="congrats">Congrats</p>
      <p class="winner">{{ winner }}</p>
      <button @click="$emit('restart-game')">Play again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WinnerBanner",
  props: {
    winner: {
      type: String,
      default: ""
    }
  }
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
  height: 400px;
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
  border: 4px double rgb(251, 92, 0);
  color: rgb(251, 92, 0);
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
