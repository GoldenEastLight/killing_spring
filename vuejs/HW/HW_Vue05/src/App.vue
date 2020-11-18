<template>
  <div id="app" class="container">
    <nav-header></nav-header>
    <h2 class="text-center">사원관리</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from './layout/Header.vue';

export default {
  name: 'App',
  components: {
    NavHeader,
  },
};
</script>

<style></style>
