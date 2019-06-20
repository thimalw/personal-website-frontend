<template>
  <div class="home">
    <div id="particle-js"></div>
    <div class="site-branding">
      <img src="../assets/img/logo_white.svg" alt="">
    </div>
    <div class="site-nav">
      <NavItems/>
    </div>
    <div class="site-social-icons">
      <SocialIcons/>
    </div>
  </div>
</template>

<script>
import NavItems from '@/components/NavItems.vue';
import SocialIcons from '@/components/SocialIcons.vue';

export default {
  name: 'home',
  components: {
    NavItems,
    SocialIcons
  },

  // TODO: Clean up nav class logic.
  beforeRouteEnter (to, from, next) {
    const bodyEl = document.getElementById('nav');
    if (bodyEl != null) {
      bodyEl.classList.add("home-mode");
      // particlesJS.load('particle-js', 'particles.json');
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
    particlesJS.load('particle-js', 'particles.json');
  },
}
</script>

<style lang="css">
#particle-js {
  width: 100%;
  height: 100vh;
  position: fixed;
  pointer-events: none;
  z-index: 450;
}
.home {
  z-index: 500;
  position: absolute;
  width: calc(100% - 30px);
  height: calc(100vh - 30px);
  padding: 15px;
  margin: 15px;
  margin-top: -110px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home .site-branding {
  position: relative;
  width: 100%;
  max-width: 300px;
}
.home .site-branding img {
  width: 100%;
}
.home .site-nav {
  margin-top: 50px;
}
</style>
