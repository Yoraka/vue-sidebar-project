<template>
    <el-container>
        <sidebar />
        <div class="content">
            <h1>This is the Settings page.</h1>
        </div>
    </el-container>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'SettingsView',
  components: {
    Sidebar
  }
}
</script>
<style>
  .content {
    flex: 1;
    padding: 20px;
  }
</style>
