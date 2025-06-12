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
  beforeCreate() {
    console.log('beforeCreate')
  },
  setup(props) {
    // console.log('setup')
    // // 数据
    // let name = '张三';
    // let age = 18;
    // let telephone = '15012346868';
    // // 方法
    // function showTel() {
    //   alert(telephone);
    // }
    // function changeName() {
    //   name = '张三三'; // 这样直接赋值，不是响应式的
    // }

    // function changeAge() {
    //   age = 19;
    // }
    // return { name, age, telephone, showTel, changeName, changeAge };
    return () => {
      return 'Hello 你好呀！'
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