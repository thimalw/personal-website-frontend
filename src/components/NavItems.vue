<template>
<div class="nav-links">
    <router-link @click.native="disableNav" class="nav-item" to="/">Home</router-link>
    <router-link @click.native="disableNav" class="nav-item" to="/projects">Projects</router-link>
    <a @click.native="disableNav" href="https://thimal.me/resume" target="_blank" rel="noopener noreferrer">Resume</a>
    <a @click.native="disableNav" href="https://debug.cafe" target="_blank" rel="noopener noreferrer">Blog</a>
</div>
</template>

<script>
export default {
    name: 'NavItems',
    methods: {
      disableNav: function (event) {
        this.$root.$emit('DisableNavMenu');
      }
    }
}
</script>

<style lang="css">
.nav-links a,
.nav-links a:visited,
.nav-links a:focus {
  display: inline-block;
  color: #fff;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 5px;
  padding: 15px 5px;
}
.nav-links a:hover,
.nav-links a:active {
  color: rgba(255,255,255,0.6);
}
</style>
