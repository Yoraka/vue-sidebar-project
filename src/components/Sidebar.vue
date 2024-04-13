<template>
    <el-menu default-active="1" class="sidebar" @open="handleOpen" @close="handleClose">
      <el-card class="menu-card" shadow="hover" @click="navigateTo('/home')">
        <div class="menu-item">
          <i class="el-icon-house"></i>
          <span>主页</span>
        </div>
      </el-card>
      <el-card class="menu-card" shadow="hover" @click="navigateTo('/profile')">
        <div class="menu-item">
          <i class="el-icon-user"></i>
          <span>文字检索器</span>
        </div>
      </el-card>
      <el-card class="menu-card" shadow="hover" @click="navigateTo('/settings')">
        <div class="menu-item">
          <i class="el-icon-setting"></i>
          <span>导出器</span>
        </div>
      </el-card>
    </el-menu>
  </template>

<script>
export default {
  name: 'SideBar',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

  <style scoped>
  .el-container {
    display: flex;
    flex-direction: row; /* aligns children (sidebar and main) horizontally */
    min-height: 100vh; /* full height of the viewport */
    }

  .el-main {
    flex: 1; /* takes up the remaining space */
    padding: 20px; /* optional padding */
    }

  .sidebar {
    width: 200px;
    min-height: 100vh;
    background-color: #f0f2f5;
    padding: 20px;
  }

  .menu-card {
    margin-bottom: 20px;
    cursor: pointer;
    transition: transform 0.3s;
  }

  .menu-card:hover {
    transform: translateY(-5px);
  }

  .menu-item {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #303133;
  }

  .menu-item i {
    margin-right: 10px;
    font-size: 20px;
  }
  </style>
