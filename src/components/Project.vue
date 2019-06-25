<template>
<div class="project-block">
  <div class="project-details">
    <span class="project-details-label">Name</span>
    <p class="project-name">{{ project.name }}</p>

    <span class="project-details-label">Description</span>
    <p v-if="project.description != null" class="project-description">{{ project.description }}</p>
    <p v-else class="project-description">N/A</p>

    <div class="project-details-dates">
      <div class="project-details-date">
        <span class="project-details-label">Created On</span>
        <p>{{ project.created_at | formatDate }}</p>
      </div>
    </div>

    <span class="project-details-label">Source</span>
    <p><a v-bind:href="project.html_url" target="_blank" rel="noopener noreferrer">{{ project.html_url }}</a></p>
  </div>
  <div class="project-meta">
    <div class="meta-item">
      <i class="far fa-star"></i>
      <span class="value">{{ project.stargazers_count }}</span>
    </div>
    <div class="meta-item">
      <i class="far fa-eye"></i>
      <span class="value">{{ project.watchers_count }}</span>
    </div>
    <div class="meta-item">
      <i class="fas fa-code-branch"></i>
      <span class="value">{{ project.forks_count }}</span>
    </div>
    <div class="meta-item">
      <span class="value">{{ project.language }}</span>
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
  color: #333;
  margin: 30px 0;
  position: relative;
}
.project-block .project-details {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
}
.project-block .project-details {
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
}
.project-block .project-details .project-details-label {
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  display: block;
  color: #999;
  margin-top: 20px;
}
.project-block .project-details .project-details-label:first-child {
  margin-top: 0;
}
.project-block .project-details .project-name {
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1;
}
.project-block .project-details p {
  margin: 0;
  font-size: 16px;
}
.project-block .project-details p a,
.project-block .project-details p a:visited,
.project-block .project-details p a:focus {
  color: inherit;
  text-decoration: none;
}
.project-block .project-details p a:hover,
.project-block .project-details p a:active {
  color: rgb(75, 139, 182);
  text-decoration: underline;
}
.project-block .project-details .project-description {
  margin-bottom: 15px;
  margin-top: 0;
}
.project-block .project-details .project-details-dates {
  display: flex;
  flex-direction: row;
}
.project-block .project-details .project-details-date + .project-details-date {
  margin-left: 20px;
}
.project-block .project-meta {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.project-block .project-meta .meta-item {
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 15px;
  color: #888;
  font-size: 12px;
  cursor: default;
  transition: all 200ms ease;
}
.project-block .project-meta .meta-item:hover {
  color: #000;
}
.project-block .project-meta .meta-item i {
  display: inline-block;
  margin-right: 5px;
}
@media(min-width: 768px) {
  .project-block {
    flex-direction: row;
    opacity: 0.75;
    transition: all 250ms ease;
  }
  .project-block:hover {
    opacity: 1;
  }
  .project-block .project-details {
    box-shadow: 0 0 0 0 rgba(0,0,0,0.2);
    transform: scale(1);
    transition: all 250ms ease;
  }
  .project-block:hover .project-details {
    box-shadow: 0 28px 38px -28px rgba(0,0,0,0.2);
    transform: scale(1.01);
    opacity: 1;
  }
  .project-block .project-meta {
    flex-direction: column;
    border-top: 0;
    width: 100px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .project-block .project-meta .meta-item + .meta-item {
    border-left: 0;
  }
}
</style>
