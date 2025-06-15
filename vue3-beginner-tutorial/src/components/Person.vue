<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <br>
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFisrtGame">修改第一个游戏名称</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';

// 数据
let name = ref('张三'); // 响应式的
let age = ref(18);
let telephone = '15012346868'; // 不是响应式的

// 对象类型数据
let car = reactive({
  brand: '奔驰',
  price: 100,
});
// 数组
let games = reactive([
  { id: '01', name: '王者荣耀' },
  { id: '02', name: '元神' },
  { id: '03', name: '三国志' },
])

function changePrice() {
  car.price += 1;
}

function changeFisrtGame() {
  games[0].name = '仙剑奇侠传';
}

// 方法
function showTel() {
  alert(telephone);
}
function changeName() {
  name.value = '张三三'; // 需要通过value属性去修改
}

function changeAge() {
  age.value += 1;
}
</script>
<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
