<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title">
        欢迎登录
      </h1>
      <form class="login-form" @submit.prevent="login">
        <div class="form-group">
          <label for="username">
            用户名
          </label>
          <input type="text" id="username" v-model="username" placeholder="请输入用户名" required>
        </div>
        <div class="form-group">
          <label for="password">
            密码
          </label>
          <input type="password" id="password" v-model="password" placeholder="请输入密码" required>
        </div>

        <button type="submit" class="login-button">登录</button>
        <p class="error-message" v-if="errorMsg">{{ errorMsg }}</p>
      </form>
    </div>

  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 数据
let username = ref('');
let password = ref('');
let errorMsg = ref('');
let router = useRouter();

// 方法
function login() {
  if (username.value === 'admin' && password.value === '123456') {
    // 登录成功
    localStorage.setItem('isAuthenticated', 'true');
    router.push({ name: 'home' });
  } else {
    errorMsg.value = '用户名或密码错误';
  }
}
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5d0fe 0%, #c4b5fd 100%);
}

.login-box {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-title {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #6d28d9;
  font-weight: 500;
}

.form-group input {
  padding: 0.8rem;
  border: 2px solid #e9d5ff;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #8b5cf6;
}

.login-button {
  background-color: #8b5cf6;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.login-button:hover {
  background-color: #7c3aed;
}

.error-message {
  color: #ef4444;
  text-align: center;
  margin-top: 1rem;
}
</style>