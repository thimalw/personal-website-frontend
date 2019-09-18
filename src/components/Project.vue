<template>
<div class="project-block">
  <img v-if="project.image" :src="project.image" :alt="project.title" class="project-image">
  <img v-else src="" class="project-image">
  <div class="project-data">
    <div class="project-data-block">
      <label>Name</label>
      <span v-if="project.title" class="project-data-value">{{ project.title }}</span>
      <span v-else class="project-data-value">N/A</span>
    </div>
    <div class="project-data-block">
      <label>Description</label>
      <span v-if="project.description" class="project-data-value">{{ project.description }}</span>
      <span v-else class="project-data-value">N/A</span>
    </div>
    <div v-if="project.source || project.demo || project.blog_post" class="project-data-block">
      <label>Links</label>
      <div v-if="project.demo" class="project-data-link">
        <a v-bind:href="project.demo" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-magic"></i>
          Demo
        </a>
      </div>
      <div v-if="project.source" class="project-data-link">
        <a v-bind:href="project.source" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-code"></i>
          Source
        </a>
      </div>
      <div v-if="project.blog_post" class="project-data-link">
        <a v-bind:href="project.blog_post" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-pencil-alt"></i>
          Blog Post
        </a>
      </div>
    </div>
    <div v-if="project.technology || project.test_technology" class="project-data-row">
      <div v-if="project.technology" class="project-data-block">
        <label>Technology</label>
        <span class="project-data-value">{{ project.technology }}</span>
      </div>
      <div v-if="project.test_technology" class="project-data-block">
        <label>Test Frameworks</label>
        <span class="project-data-value">{{ project.test_technology }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Project',
  props: [
    'project'
  ],
}
</script>

<style lang="css" scoped>
.project-block {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 30px;
}
.project-image {
  position: relative;
  display: block;
  width: 100%;
  min-height: 250px;
  border: 1px solid #1564DB;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 6px 6px 0 0;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
}
.project-data {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  border: 1px solid #1564DB;
  border-top: 0;
  border-radius: 0 0 6px 6px;
  padding-top: 15px;
}
.project-data-block {
  padding: 0 15px;
  margin-bottom: 15px;
}
.project-data-block label {
  display: block;
  color: #999;
  text-transform: uppercase;
  font-size: 14px;
}
.project-data-link {
  display: inline-block;
}
.project-data-link + .project-data-link {
  margin-left: 20px;
}
.project-data-link a {
  text-decoration: none !important;
  color: #1564DB;
  text-transform: uppercase;
  font-size: 14px;
}
.project-data-link a i {
  margin-right: 5px;
}
.project-data-row {
  border-top: 1px solid #1564DB;
  margin-top: 15px;
  padding-top: 15px;
  margin-top: auto;
  margin-bottom: 0;
}
@media(min-width: 768px) {
  .project-block {
    flex-direction: row;
    transform: scale(1);
    transition: all 250ms ease;
  }
  .project-image {
    border: 1px solid #e5e5e5;
    width: 360px;
    min-height: 300px;
    border-radius: 6px;
    transition: all 250ms ease;
  }
  .project-data {
    border: 1px solid #e5e5e5;
    border-radius: 6px;
    margin-left: 15px;
    transition: all 250ms ease;
  }
  .project-data-value {
    color: #666;
    transition: all 250ms ease;
  }
  .project-data-link a {
    color: #666;
    opacity: 1;
    transition: all 250ms ease;
  }
  .project-data-row {
    border-top: 1px solid #e5e5e5;
    transition: all 250ms ease;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    padding-top: 0;
    position: relative;
  }
  .project-data-row .project-data-block {
    margin: 0;
    padding: 15px;
    transition: all 250ms ease;
    width: 50%;
  }
  .project-data-row .project-data-block + .project-data-block {
    border-left: 1px solid #e5e5e5;
  }
  .project-block:hover  {
    transform: scale(1.01);
  }
  .project-block:hover .project-image {
    border: 1px solid #1564DB;
    box-shadow: 0 28px 38px -28px rgba(20, 99, 219, 0.25);
  }
  .project-block:hover .project-data {
    border: 1px solid #1564DB;
    box-shadow: 0 28px 38px -28px rgba(20, 99, 219, 0.25);
  }
  .project-block:hover .project-data-value {
    color: #000;
  }
  .project-block:hover .project-data-link a {
    color: #1564DB;
  }
  .project-data-link a:hover {
    opacity: 0.7;
  }
  .project-block:hover .project-data-row {
    border-top: 1px solid #1564DB;
  }
  .project-block:hover .project-data-row .project-data-block + .project-data-block {
    border-left: 1px solid #1564DB;
  }
}
</style>
