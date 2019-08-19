<template>
    <div class="social-icons">
        <a href="https://www.linkedin.com/in/thimalw/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/thimalw" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: 'SocialIcons'
}
</script>

<style lang="css">
.social-icons a,
.social-icons a:visited,
.social-icons a:focus {
  display: inline-block;
  line-height: 1;
  color: #fff;
  text-decoration: none !important;
  margin: 0 5px;
  padding: 15px 5px;
  text-transform: uppercase;
  font-size: 16px;
}
.social-icons a + a:before {
  content: "/";
  display: inline-block;
  color: rgba(255,255,255,0.2) !important;
  margin-right: 0;
  padding-right: 10px;
  margin-left: -10px;
  pointer-events: none;
}
.social-icons a:hover,
.social-icons a:active {
  color: rgba(255,255,255,0.6);
}
</style>
