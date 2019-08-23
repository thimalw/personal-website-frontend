<template>
  <div class="projects">
    <div class="container">
      <h1>Projects</h1>
      <!-- <hr> -->
      <Loading v-if="!dataLoaded"/>
      <Project
        v-for="project in projects"
        v-bind:key="project.id"
        v-bind:project="project"
      />
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Project from '@/components/Project.vue';
import Loading from '@/components/Loading.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'projects',
  data() {
    return {
      projects: [],
      dataLoaded: false
    }
  },
  components: {
    Project,
    Loading,
    Footer
  },
  mounted() {
    // this.dataLoaded = false;
    // axios
    //   .get('https://api.github.com/users/thimalw/repos?type=owner&sort=created')
    //   .then(response => {
    //     this.projects = response.data.filter(data => {
    //       return !data.fork;
    //     });
    //     this.dataLoaded = true;
    //   });
    this.dataLoaded = false;
    axios
      .get('https://api.thimal.me/v1/projects')
      .then(response => {
        this.projects = response.data.data;
        this.dataLoaded = true;
        console.log(this.projects);
      });
  }
}
</script>

<style lang="css">
</style>
