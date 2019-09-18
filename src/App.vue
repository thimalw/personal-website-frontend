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
import SiteNav from '@/components/SiteNav.vue';


export default {
  components: {
    SiteNav,
  }
}
</script>

<style lang="css">
/* Animations */
.view-fade-enter-active {
  transition: opacity 300ms ease;
  transition-delay: 200ms;
}
.view-fade-leave-active {
  transition: opacity 0ms ease;
  transition-delay: 0;
}
.view-fade-enter, .view-fade-leave-to {
  opacity: 0;
}

/* Defaults */
* {
  box-sizing: border-box;
}
html {
  padding: 0;
  margin: 0;
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  overflow: hidden;
}
#content {
  margin-top: 110px;
}
@media(max-width: 768px) {
  #content {
    margin-top: 80px;
  }
}
.container {
  width: 100%;
  max-width: 1000px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
hr {
  border: 0;
  height: 1px;
  background-color: rgba(0,0,0,0.05);
}
h1,h2,h3,h4,h5,h6 {
  font-weight: lighter;
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
  color: #1564db;
  border-bottom: 1px solid #1564db;
  padding-bottom: 20px;
  /* text-transform: uppercase; */
  line-height: 1;
}
h1:after,
h2:after,
h3:after,
h4:after,
h5:after,
h6:after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #e1edff;
  position: absolute;
  margin-top: 20px;
  z-index: -1;
}

</style>
