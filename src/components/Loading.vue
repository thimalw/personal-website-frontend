<template>
<div class="loading">
    <div class="loading-icon">
        <div class="lds-dual-ring"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style lang="css" scoped>
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 15px;
}
.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #8aa8d4;
  border-color: #8aa8d4 transparent #8aa8d4 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
