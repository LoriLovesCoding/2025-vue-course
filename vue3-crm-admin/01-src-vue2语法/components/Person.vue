<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>
<script>
export default {
  name: 'Person', // 组件名称
  data() {
    return {
      name: '张三',
      age: 30,
      tel: 13812345600,
    }
  },
  methods: {
    showTel() {
      alert(this.tel);
    },  // 每个方法之间使用 逗号 隔开
    changeName() {
      this.name = '李四'; // 是响应式的，修改后立刻体现
    },
    changeAge() {
      this.age += 1;
    }
  }
}
</script>
<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>