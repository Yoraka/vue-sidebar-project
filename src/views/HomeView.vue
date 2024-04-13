<template>
    <div class="home">
      <sidebar />
      <div class="content">
        <!-- 页面内容 -->
        <p>这是主页</p>
      </div>
    </div>
  </template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'HomePage',
  components: {
    Sidebar
  }
}
</script>

  <style scoped>
  .home {
    display: flex;
  }

  .content {
    flex: 1;
    padding: 20px;
  }
  </style>
