# 数据库设计

目标：学会使用 JSON Server 生成模拟数据和对应的 API，在此基础上使用 MySQL 数据库设计后台数据库，并使用 Navicat 操作数据库

## **使用 Json Server**

JSON Server 是一个基于 Node.js 的开源工具，用于快速创建 RESTful API。它可以将 JSON 文件转换为 RESTful API，并提供了一些基本的 CRUD 操作。

[typicode/json-server: Get a full fake REST API with zero coding in less than 30 seconds (seriously) (github.com)](https://github.com/typicode/json-server)

起始项目：[starter](./资源包/vue-project-starter.zip)

首先安装 Json Server: npm install json-server

> AI 提示词：
> 项目里有一个 sql 文件，里面有用户 sys_user，菜单 sys_menu, 角色 sys_role,部门 sys_dept 表结构以及数据，也有用户角色 sys_user_role, 角色菜单 sys_role_menu,角色部门 sys_role_dept 关联表的结构和数据，请你使用 json server 在项目中生成 db.json 和对应的 api，以便在本项目中没有后端程序的情况下，仍然可以模拟后端使用数据。json server 已经安装。

以下内容，都是在以上提示词下生成的，是在分支 starter 基础上做的，前提是配置好国际版本的 TRAE。

### 简介

本项目使用 JSON Server 作为模拟后端服务，提供用户注册、登录等功能的 API 接口。JSON Server 是一个可以快速创建模拟 REST API 的工具，非常适合前端开发阶段使用。

### 数据结构

`db.json` 文件包含以下主要数据：

1. **users** - 用户基本信息

   - id: 用户 ID
   - username: 用户名
   - password: 密码
   - email: 邮箱
   - role: 角色（admin/user）
   - avatar: 头像 URL
   - created_at: 创建时间
   - updated_at: 更新时间

2. **profiles** - 用户详细资料

   - id: 资料 ID
   - user_id: 关联的用户 ID
   - full_name: 全名
   - phone: 电话
   - address: 地址
   - bio: 个人简介

3. **login_logs** - 登录日志

   - id: 日志 ID
   - user_id: 用户 ID
   - login_time: 登录时间
   - ip_address: IP 地址
   - device: 设备信息

### 启动服务

运行以下命令启动 JSON Server：

```bash
npm run server
```

服务将在 [http://localhost:3000](http://localhost:3000) 启动，可以通过以下端点访问数据：

- [http://localhost:3000/users](http://localhost:3000/users) - 用户列表
- [http://localhost:3000/profiles](http://localhost:3000/profiles) - 用户资料列表
- [http://localhost:3000/login_logs](http://localhost:3000/login_logs) - 登录日志列表

### API 使用示例

#### 用户登录

```javascript
// 使用 fetch API 登录
const login = async (username, password) => {
  // 查询用户是否存在
  const response = await fetch(
    `http://localhost:3000/users?username=${username}`
  );
  const users = await response.json();

  if (users.length === 0) {
    return { success: false, message: '用户不存在' };
  }

  const user = users[0];
  if (user.password !== password) {
    return { success: false, message: '密码错误' };
  }

  // 返回用户信息（不包含密码）
  const { password: _, ...userInfo } = user;
  return { success: true, user: userInfo };
};
```

#### 用户注册

```javascript
// 使用 fetch API 注册新用户
const register = async (userData) => {
  // 检查用户名是否已存在
  const checkResponse = await fetch(
    `http://localhost:3000/users?username=${userData.username}`
  );
  const existingUsers = await checkResponse.json();

  if (existingUsers.length > 0) {
    return { success: false, message: '用户名已存在' };
  }

  // 创建新用户
  const newUser = {
    id: Date.now(), // 简单生成ID
    username: userData.username,
    password: userData.password,
    email: userData.email || '',
    role: 'user',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // 保存用户
  const saveResponse = await fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  const savedUser = await saveResponse.json();
  return { success: true, user: savedUser };
};
```

### 注意事项

1. JSON Server 仅用于开发环境，不适合生产环境使用
2. 密码在 db.json 中是明文存储的，实际生产环境应使用加密存储
3. 在实际项目中，应该实现更完善的认证机制，如 JWT 等
4. 本项目已经在 `src/api/user.js` 中提供了完整的 API 调用示例
5. 登录页面示例在 `src/views/Login.vue`

### 自定义数据

你可以根据需要修改 `db.json` 文件来添加更多数据或修改现有数据结构。修改后需要重启 JSON Server 服务以应用更改。

### 高级用法

#### 自定义路由

可以创建 `routes.json` 文件来自定义路由：

```json
{
  "/api/*": "/$1",
  "/auth/login": "/users?username=:username"
}
```

然后使用以下命令启动服务：

```bash
json-server --watch db.json --routes routes.json --port 3000
```

#### 添加中间件

可以创建 `server.js` 文件来添加自定义中间件：

```javascript
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// 添加自定义中间件
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    // 自定义登录逻辑
  }
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
```

然后使用以下命令启动服务：

```bash
node server.js
```

## **MySQL 数据库设计**

目标：

1. 巩固数据库知识并了解如何应用
2. 学会使用数据库工具 Navicat 连接和操作数据库
3. 学会设计表和导出模型

## Navicat 的安装和配置

官方网站：[Navicat 中国 | 支持 MySQL、Redis、MariaDB、MongoDB、SQL Server、SQLite、Oracle 和 PostgreSQL 的数据库管理](https://navicat.com.cn/)

![1716166254141](image/Navicat.png)

## 学习过程

- 讲解数据库基础知识

  - 什么是数据模型？
  - 数据模型设计的发展演变？ 传统与电商
  - 选择？

- 讲解如何使用 Navicat

  - 连接数据库，以 MySQL 为例
  - 导入导出数据库
  - 创建数据库
  - 创建表
  - 创建/修改模型
  - 导出模型

- 讲解如何设计模型？

## 课程交付物

- 设计好的 ER 图
- 以及各表的说明
