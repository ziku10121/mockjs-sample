# Use Mock.js in Vite(Vue3)

## 簡介

基於 Vue3 和 Vite 的前端專案。
使用 Mock.js Library 生成亂數數據。

## Getting Started

### Install

Node(CommonJS)

```bash
npm install mockjs
```

## 目錄結構

    ├── index.html                      入口頁面
    ├── public/                         靜態資源目錄
    ├── src/                            原始碼目錄
    │   ├── ...                         根組件
    │   ├── main.js                     入口檔案，初始化
    │   └── mock/                       mock目錄
    │   │   ├── modules/                mock模組目錄
    │   │   │   └── data.js             data數據
    │   │   └── index.js                整合各mock數據
    │   └── views/                      views目錄
    │       └── home/
    │           └── index.js
    ├── README.md                       專案說明文件
    ...

## 使用 Mock

### 創建 Mock 數據

在項目中創建一個`mock`目錄，添加一個`data.js`文件。

```javascript
// src/mock/date.js

import Mock from "mockjs";

var data = Mock.mock("/api/date", {
  // 屬性 list 的值是一個陣列，其中包含 1 到 10 個元素。
  "list|5": [
    {
      // 屬性id是一個自增數，起始值1，每次+1
      "id|+1": 1,
      birthday: "@date(yy-MM-dd)",
      time: "@time",
      watch: "@datetime",
      now: '@now("day", "yyyy-MM-dd HH:mm:ss SS")',
    },
  ],
});
```

### Vue 應用中導入 Mock 數據

```javascript
// main.js
import { createApp } from "vue";
import App from "./App.vue";

import "@/mock"; //導入Mock路徑

const app = createApp(App);
app.mount("#app");
```

### 使用 Mock 數據

```javascript
// src/views/home/index.vue

<script setup>
import axios from 'axios';

axios.get('/api/data')
  .then(res => {
    console.log('data', res.data)
  })
</script>
<template>
  <div></div>
</template>
<style lang="scss" scoped></style>
```
