<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'home',

  // TODO: Clean up nav class logic.
  beforeRouteEnter (to, from, next) {
    const bodyEl = document.getElementById('nav');
    if (bodyEl != null) {
      bodyEl.classList.add("home-mode");
    }
    next();
  },
  beforeRouteLeave (to, from, next) {
    const bodyEl = document.getElementById('nav');
    bodyEl.classList.remove("home-mode");
    next();
  },
  mounted() {
    const bodyEl = document.getElementById('nav');
    if (bodyEl != null) {
      bodyEl.classList.add("home-mode");
    }
  }
}
</script>

<style lang="css" scoped>

</style>
