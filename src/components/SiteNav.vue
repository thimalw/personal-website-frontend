<template>
<div id="nav" v-bind:class="{ active: navActive }">
  <div id="nav-bar" class="nav-bar" v-bind:class="{ homeMode: homeMode }">
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
      navActive: true,
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
  transition: all 250ms ease;
  transition-delay: 50ms;
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
  left: 20px;
  padding: 15px 10px;
  line-height: 1;
  border-left: 1px solid rgba(255,255,255,0.1);
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

/* Nav Home Mode */
.nav-bar.homeMode {
  height: calc(100vh - 30px);
}
.nav-bar.homeMode .site-branding,
.nav-bar.homeMode .site-nav,
.nav-bar.homeMode .site-social-icons {
  opacity: 0;
  margin-top: -60%;
  transition-delay: 0ms;
}
</style>
