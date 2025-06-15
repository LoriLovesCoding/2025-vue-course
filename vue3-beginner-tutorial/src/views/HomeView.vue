<template>
  <div class="home-container">
    <header class="home-header">
      <h1>欢迎, {{ username }}</h1>
      <button @click="logout">退出登录</button>
    </header>
    <main class="home-content">
      <p>这是主页内容</p>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let username = ref('admin');
let router = useRouter();

function logout() {
  localStorage.removeItem('isAuthenticated');
  router.push({ name: 'login' });
}
</script>
<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e9d5ff;
}

.home-header h1 {
  color: #7c3aed;
  margin: 0;
}

.logout-button {
  background-color: #8b5cf6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #7c3aed;
}

.home-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.home-content p {
  color: #6d28d9;
  font-size: 1.2rem;
}
</style>