<template>
<div id="nav" v-bind:class="{ active: navActive }">
  <div class="site-branding">
    <router-link class="nav-item" to="/">
      <img src="../assets/img/logo_white.svg" alt="">
    </router-link>
  </div>
  <div class="nav-links">
    <NavItems/>
  </div>
  <div class="social-icons">
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
}
#nav .site-branding {
  position: relative;
  opacity: 1;
  margin-top: 0;
  margin-left: 20px;
  transition: all 250ms ease;
}
#nav .site-branding img {
  height: 60px;
  display: block;
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
#nav .nav-links a,
#nav .nav-links a:visited,
#nav .nav-links a:focus {
  display: inline-block;
  color: #fff;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 5px;
  padding: 15px 5px;
}
#nav .nav-links a:hover,
#nav .nav-links a:active {
  color: rgba(255,255,255,0.6);
}
#nav .social-icons {
  margin-left: auto;
  margin-right: 20px;
  line-height: 1 !important;
  opacity: 1;
  margin-top: 0;
  transition: all 250ms ease;
}
#nav .social-icons a,
#nav .social-icons a:visited,
#nav .social-icons a:focus {
  display: inline-block;
  line-height: 1;
  color: #fff;
  text-decoration: none !important;
  margin: 0 5px;
  padding: 15px 5px;
  text-transform: uppercase;
  font-size: 16px;
}
#nav .social-icons a + a:before {
  content: "/";
  display: inline-block;
  color: rgba(255,255,255,0.2) !important;
  margin-right: 0;
  padding-right: 10px;
  margin-left: -10px;
  pointer-events: none;
}
#nav .social-icons a:hover,
#nav .social-icons a:active {
  color: rgba(255,255,255,0.6);
}

/* Nav Home Mode */
#nav.home-mode {
  height: calc(100vh - 30px);
}
#nav.home-mode .site-branding,
#nav.home-mode .nav-links,
#nav.home-mode .social-icons {
  opacity: 0;
  margin-top: -60%;
}
</style>
