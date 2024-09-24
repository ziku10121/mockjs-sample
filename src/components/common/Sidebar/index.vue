<script setup>
const isOpen = ref(false);

const menuItems = ref([]);

menuItems.value = [
  {
    title: "Home",
    submenu: null,
    isOpen: false, // 控制子選單的開關
  },
  {
    title: "About",
    submenu: ["Our Team", "Our History"],
    isOpen: false,
  },
  {
    title: "Services",
    submenu: ["Web Development", "App Development", "SEO"],
    isOpen: false,
  },
  {
    title: "Contact",
    submenu: null,
    isOpen: false,
  },
]

const toggleSidebar = () => {
  this.isOpen = !this.isOpen;
}
const toggleSubmenu = (index) => {
  this.menuItems[index].isOpen = !this.menuItems[index].isOpen; // 切換子選單顯示狀態
}
</script>
<template>
  <div class="text-blue" :class="['sidebar', { 'is-open': isOpen }]">
    <button @click="toggleSidebar" class="toggle-btn">
      {{ isOpen ? 'Close' : 'Open' }} Sidebar
    </button>

    <nav class="menu">
      <ul>
        <!-- 迭代 menuItems 生成主選單和子選單 -->
        <li v-for="item in menuItems" :key="item.id">
          <div class="menu-title">
            <i class="menu-icon">
              <!-- SVG圖檔 -->
            </i>
            <span>{{ item.title }}</span>
            <!-- <a href="#" @click="toggleSubmenu(index)">
              {{ item.title }}
            </a> -->
            <i class="el-icon el-sub-menu__icon-arrow" style="transform: rotateZ(180deg);">
              <img src="../../../assets/svgs/arrow.svg" </i>
          </div>
          <!-- 如果有子選單，顯示子選單 -->
          <ul v-if="item.children && item.isOpen">
            <li v-for="childrenItem in item.submenu" :key="childrenItem.id">
              <a href="#">{{ childrenItem }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
@import './style.scss';
@import '@/styles/global.scss';

.sidebar {
  background-color: $gray-800;
}

.menu-icon {
  vertical-align: middle;
  display: inline-block;
  width: 24px;
}

img {
  width: 15px;
}
</style>