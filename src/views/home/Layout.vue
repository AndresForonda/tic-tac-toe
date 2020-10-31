<template>
  <section>
    <!-- Board component mounted -->
    <board />
  </section>
</template>
<script>
// Import board component
import Board from "./content/Layout";
export default {
  name: "Home",
  components: {
    Board // Register board component
  }
};
</script>
<style scoped>
section {
  height: 100vh;
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
