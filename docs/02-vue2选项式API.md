## 创建一个 Person 组件

在`components` 文件夹下新建一个文件 `Person.vue`。

使用 `vueInit` 代码提示，快速生成组件模板。

## vue2 语法是选项式的（配置式）Options API

参考官网文档：https://cn.vuejs.org/guide/introduction.html#api-styles

- 数据 放在 data() 方法中，使用 return 返回
- 方法 放在 methods 对象中

```js
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
```

## 2. 在 App.vue 中引入并注册

```js
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
```
