<script setup>
import HelloWorld from '@/components/common/HelloWorld/index.vue';
import Sidebar from '@/components/common/Sidebar/index.vue';
import axios from 'axios';
import { onMounted } from 'vue';
// import '@/mock/mock.js';
// import '@/mock/basic.mock.js';
// import '@/mock/date.mock.js';
// import '@/mock/image.mock.js';
// import '@/mock/text.mock.js';
// import '@/mock/name.mock.js';
// import '@/mock/web.mock.js';
// import '@/mock/address.mock.js';
// import '@/mock/id.mock.js';
// import '@/mock/Info.mock.js';
const data = ref('123')

axios.defaults.baseURL = '/api/';
axios.get('id')
  .then(res => {
    console.log('data', res.data)
  })
axios.get('image')
  .then(res => {
    console.log('Image', res.data)
  })
axios.get('web')
  .then(res => {
    console.log('web', res.data)
  })

</script>

<template>
  <!-- <Sidebar /> -->
  <div style="width: calc( 100% - 200px);position:absolute;left:200px;">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../../assets/svgs/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue Leo's Template !" />
  </div>
</template>
<style lang="scss" scoped></style>
