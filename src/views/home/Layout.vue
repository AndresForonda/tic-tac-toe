<template>
  <section>
    <board />
  </section>
</template>
<script>
import Board from "./content/Layout";
export default {
  name: "Home",
  components: {
    Board
  }
};
</script>
<style scoped>
section {
  height: 80vh;
  background: rgb(246, 119, 46);
  background: linear-gradient(
    0deg,
    rgba(246, 119, 46, 1) 0%,
    rgba(253, 45, 45, 1) 100%
  );
  border-radius: 0 0 0% 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
