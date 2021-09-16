<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/css/reset.css';
@import './assets/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100% !important;
  height: 100%;
  font-size: 16px;
  background: #fff;
  box-sizing: border-box;
}
</style>
