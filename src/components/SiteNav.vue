<template>
<div id="nav" v-bind:class="{ active: navActive }">
  <div class="site-branding">
    <router-link class="nav-item" to="/">
      <img src="../assets/img/logo_white.svg" alt="">
    </router-link>
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

var navActive = true;

export default {
  name: 'SiteNav',
  data: function() {
    return {
      navActive: false
    }
  },
  components: {
    NavItems,
    SocialIcons
  },
  methods: {
    toggleNav: function() {
      this.navActive = !this.navActive;
    },
    disableNav: function() {
      this.navActive = false;
    }
  }
}

 
</script>

<style lang="css">
#nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  width: calc(100% - 30px);
  height: 80px;
  margin: 15px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 6px;
  transition: all 250ms ease;
  overflow: hidden;
  z-index: 400;
}
#nav .site-branding {
  position: relative;
  opacity: 1;
  margin-top: 0;
  margin-left: 20px;
  transition: all 250ms ease;
  transition-delay: 50ms;
}
#nav .site-branding img {
  height: 60px;
  display: block;
}
#nav .site-nav {
  opacity: 1;
  margin-top: 0;
  transition: all 250ms ease;
  transition-delay: 50ms;
}
#nav .nav-links {
  display: flex;
  align-items: center;
  position: relative;
  height: 80px;
  left: 20px;
  padding: 15px 10px;
  line-height: 1;
  border-left: 1px solid rgba(255,255,255,0.1);
  opacity: 1;
  margin-top: 0;
  transition: all 250ms ease;
}
#nav .site-social-icons {
  margin-left: auto;
  margin-right: 20px;
  line-height: 1 !important;
  opacity: 1;
  margin-top: 0;
  transition: all 300ms ease;
  transition-delay: 50ms;
}

/* Nav Home Mode */
#nav.home-mode {
  height: calc(100vh - 30px);
}
#nav.home-mode .site-branding,
#nav.home-mode .site-nav,
#nav.home-mode .site-social-icons {
  opacity: 0;
  margin-top: -60%;
  transition-delay: 0ms;
}
</style>
