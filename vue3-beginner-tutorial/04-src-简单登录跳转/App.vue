<template>
  <router-view></router-view>
</template>

<script>
import Person from './components/Person.vue'
export default {
  name: 'App', // 组件名
  components: { Person }, // 注册Person组件
}
</script>

<style>
/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f9f4ff;
}
</style>
