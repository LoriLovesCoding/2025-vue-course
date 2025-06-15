## Element-plus 安装

官网安装步骤：https://element-plus.org/zh-CN/guide/installation.html

```bash
npm install element-plus --save
```

## 完整导入

### 修改 main.ts

参考官网文档：https://element-plus.org/zh-CN/guide/quickstart.html

```js
// 引入ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入element-plus 的样式

const app = createApp(App);

app.use(ElementPlus); // 注册ElementPlus
app.mount('#app');
```

## Volar 支持

### 修改 `jsconfig.json`

```json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

## 按需导入

### 安装额外插件

```bash
npm install -D unplugin-vue-components unplugin-auto-import
```

### 修改 vite.config.js

```js
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
```

参考：【Vue3+Element Plus】https://www.bilibili.com/video/BV1TB6mY9ExC?t=48.0&p=39
