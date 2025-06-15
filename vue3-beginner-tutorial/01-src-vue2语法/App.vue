<template>
  <Person />
</template>

<script>
import Person from './components/Person.vue'
export default {
  name: 'App', // 组件名
  components: { Person } // 注册Person组件
}
</script>
<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
