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
  font-size: 16px;
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#content {
  margin-top: 110px;
}
.container {
  width: 100%;
  max-width: 1000px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
}
hr {
  border: 0;
  height: 1px;
  background-color: rgba(0,0,0,0.05);
}
h1,h2,h3,h4,h5,h6 {
  /* font-weight: lighter; */
  font-weight: normal;
  margin-top: 20px;
}
p {
  /* font-weight: lighter; */
}
</style>
