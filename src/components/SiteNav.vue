<template>
<div id="nav">
  <div id="nav-bar" class="nav-bar" v-bind:class="{ homeMode: homeMode, active: navActive }">
    <div class="site-branding">
      <router-link class="nav-item" to="/">
        <img src="../assets/img/logo_white.svg" alt="Thimal Wickremage">
      </router-link>
    </div>
    <div class="site-nav">
      <NavItems/>
    </div>
    <div class="site-social-icons">
      <SocialIcons/>
    </div>
    <div v-on:click="toggleNav" class="site-nav-toggler"><i class="fas fa-ellipsis-v"></i></div>
  </div>
</div>
</template>

<script>
import NavItems from '@/components/NavItems.vue';
import SocialIcons from '@/components/SocialIcons.vue';

export default {
  name: 'SiteNav',
  data: function() {
    return {
      navActive: false,
      homeMode: false
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
    },
    enableHomeMode: function() {
      this.homeMode = true;
    },
    disableHomeMode: function() {
      this.homeMode = false;
    }
  },
  mounted() {
    this.$root.$on('SiteNavHomeMode', () => {
      this.enableHomeMode();
    });
    this.$root.$on('SiteNavDefaultMode', () => {
      this.disableHomeMode();
    });
    this.$root.$on('DisableNavMenu', () => {
      this.disableNav();
    });
  }
}

 
</script>

<style lang="css">
#nav {
  border-top: 15px solid #fff;
  position: fixed;
  display: block;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 400;
}
.nav-bar {
  background-color: #111;
  width: calc(100% - 30px);
  height: 80px;
  margin: 0 15px 15px 15px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 6px;
  transition: all 250ms ease;
  overflow: hidden;
}
.nav-bar .site-branding {
  position: relative;
  opacity: 1;
  margin-top: 0;
  margin-left: 20px;
  padding-right: 20px;
  transition: all 250ms ease;
  transition-delay: 50ms;
  border-right: 1px solid rgba(255,255,255,0.1);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-bar .site-branding img {
  height: 60px;
  display: block;
}
.nav-bar .site-nav {
  opacity: 1;
  margin-top: 0;
  transition: all 250ms ease;
  transition-delay: 50ms;
}
.nav-bar .nav-links {
  display: flex;
  align-items: center;
  position: relative;
  height: 80px;
  /* left: 20px; */
  padding: 15px 10px;
  line-height: 1;
  /* border-left: 1px solid rgba(255,255,255,0.1); */
  opacity: 1;
  margin-top: 0;
  transition: all 250ms ease;
}
.nav-bar .site-social-icons {
  margin-left: auto;
  margin-right: 20px;
  line-height: 1 !important;
  opacity: 1;
  margin-top: 0;
  transition: all 300ms ease;
  transition-delay: 50ms;
}
.nav-bar .site-nav-toggler {
  display: none;
  margin-left: 0;
  margin-right: 0;
  padding: 10px 20px 10px 5px;
  transition: all 300ms ease;
  transition-delay: 50ms;
  opacity: 1;
  margin-top: 0;
}

@media(max-width: 768px) {
  .nav-bar {
    height: 50px;
  }
  .nav-bar .site-branding img {
    height: 34px;
  }
  .nav-bar .site-nav {
    position: absolute;
    top: 65px;
    margin: 0;
    left: auto;
    right: 15px;
    height: auto;
    min-width: 200px;
    border-radius: 6px;
    background-color: #111;
    padding: 0;
    transition: all 150ms linear;
    opacity: 0;
    /* transform: scaleY(0); */
    pointer-events: none;
  }
  .nav-bar.active .site-nav {
    top: 65px;
    opacity: 1;
    /* transform: scaleY(1); */
    pointer-events: all;
  }
  .nav-bar .site-nav .nav-links {
    display: block;
    flex-direction: column;
    border-left: 0;
    left: 0;
    padding: 0;
    height: auto;
  }
  .nav-bar .site-nav .nav-links a {
    display: block;
    margin: 0;
    padding: 15px;
  }
  .nav-bar .site-nav .nav-links a + a {
    border-top: 1px solid #222;
  }
  .nav-bar .site-nav-toggler {
    display: block;
  }
}

/* Nav Home Mode */
.nav-bar.homeMode {
  height: calc(100vh - 30px) !important;
}
.nav-bar.homeMode .site-branding,
.nav-bar.homeMode .site-nav,
.nav-bar.homeMode .site-nav-toggler,
.nav-bar.homeMode .site-social-icons {
  opacity: 0 !important;
  margin-top: -60% !important;
  transition-delay: 0ms !important;
}
</style>
