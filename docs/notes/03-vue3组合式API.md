## VUE3 组合式 API Composition API

组合式 API 通常会与 `<script setup>`

### 1. setup() 函数

将 vue2 语法中的 `data(){}` 和 `methods` 去掉，替换为 `setup()`函数。

`setup()`函数可以返回模板所需要的数据和方法。

`setup()`函数 会在生命周期函数 `beforeCreate()` 之前执行。

```js
export default {
  name: 'Person', // 组件名称
  beforeCreate() {
    console.log('beforeCreate');
  },
  setup(props) {
    console.log('setup');
    // 数据
    let name = '张三';
    let age = 18;
    let telephone = '15012346868';
    // 方法
    function showTel() {
      alert(telephone);
    }
    function changeName() {
      name = '张三三'; // 这样直接赋值，不是响应式的
    }

    function changeAge() {
      age = 19;
    }
    return { name, age, telephone, showTel, changeName, changeAge };
  },
};
```

`setup()`函数还可以返回一个渲染函数，该渲染函数返回页面想要显示的内容。

```js
export default {
  name: 'Person', // 组件名称
  beforeCreate() {
    console.log('beforeCreate');
  },
  setup(props) {
    // 很像react
    // return () => {
    //   return 'Hello 你好呀！';
    // };

    return () => 'Hello 你好呀！';
  },
};
```

## setup 语法糖

setup() 函数可以简写成 `<script setup>`

```js
<script>
export default {
  name: 'Person', // 组件名称
}
</script>
<script setup>
let name = '张三san'
let age = 18
let telephone = '15012346868'
</script>
```

> 提问：这两个`<script>` 标签可以合并吗？

可以，但是要安装一个 vite plugin

```bash
npm i vite-plugin-vue-setup-extend -D
```

> 注意：最新版本已经不需要了，因为自动安装了 `vite-plugin-vue-devtools`, 并在 `vite.config.js`中引入了。
> 所以，不需要写 2 个<script> 标签了。

## 响应式数据 ref

给需要响应式的数据，用 `ref()` 包一下。

```js
<script setup>
import { ref } from 'vue';
// 数据
let name = ref('张三');
let age = ref(18);
let telephone = '15012346868'

// 方法
function showTel() {
  alert(telephone);
}
function changeName() {
  name.value = '张三三'; // 这样直接赋值，不是响应式的
}

function changeAge() {
  age.value += 1;
}
</script>
```
