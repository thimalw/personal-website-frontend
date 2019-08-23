<template>
<div>
  <div class="project-loading">
    <div class="loading-image loading-background"></div>
    <div class="loading-data loading-background"></div>
  </div>
  <div class="project-loading">
    <div class="loading-image loading-background"></div>
    <div class="loading-data loading-background"></div>
  </div>
  <div class="project-loading">
    <div class="loading-image loading-background"></div>
    <div class="loading-data loading-background"></div>
  </div>
</div>
</template>

<script>
export default {
    name: 'ProjectLoading'
}
</script>

<style lang="css" scoped>
.project-loading {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 30px;
}
.loading-image {
  position: relative;
  display: block;
  width: 100%;
  min-height: 250px;
  border: 1px solid transparent;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  background: #eee;
  animation-name: loadingImage;
}
.loading-data {
  display: none;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  border: 1px solid transparent;
  border-top: 0;
  border-radius: 0 0 6px 6px;
  padding-top: 15px;
  background: #eee;
  animation-name: loadingData;
}
@media(min-width: 768px) {
  .project-loading {
    flex-direction: row;
  }
  .loading-image {
    width: 360px;
    min-height: 300px;
    border-radius: 6px;
  }
  .loading-data {
    display: flex;
    border-radius: 6px;
    margin-left: 15px;
  }
}

@keyframes loadingImage{
  0%{
    background-position: 100% 0
  }
  100%{
    background-position: -100% 0
  }
}
@keyframes loadingData{
  0%{
    background-position: 200% 0
  }
  100%{
    background-position: -200% 0
  }
}
.loading-background {
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background: #f5f5f5;
  background: linear-gradient(to right, #f6f9fd 8%, #e7f1fd 28%, #f6f9fd 50%);
  background-size: 800px 104px;
  position: relative;
}
</style>
