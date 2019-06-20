<template>
  <div id="app">
    <SiteNav/>
    <div id="content">
      <transition name="view-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import SiteNav from './components/SiteNav.vue';

export default {
  components: {
    SiteNav
  }
}
</script>

<style lang="css">
/* Animations */
.view-fade-enter-active, .view-fade-leave-active {
  transition: opacity .3s ease;
}
.view-fade-enter, .view-fade-leave-to {
  opacity: 0;
}

/* Defaults */
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  background-color: #fff;
  color: #000;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#content {
  margin-top: 110px;
}
</style>
