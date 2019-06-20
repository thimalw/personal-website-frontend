<template>
<div class="nav-links">
    <router-link class="nav-item" to="/">Home</router-link>
    <router-link class="nav-item" to="/projects">Projects</router-link>
    <a href="https://debug.cafe" target="_blank" rel="noopener noreferrer">Blog</a>
    <a href="https://thimal.me/resume" target="_blank" rel="noopener noreferrer">Resume</a>
</div>
</template>

<script>
export default {
    name: 'NavItems'
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
