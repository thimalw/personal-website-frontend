<template>
  <div class="page-not-found">
    <div class="container">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for cannot be found.</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'pageNotFound',
  components: {
    Footer
  }
}
</script>
