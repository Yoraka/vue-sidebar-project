<template>
    <el-container>
      <side-bar />
      <el-main>
        <h1 class="text-center mb-6">汉语大字典文字检索器</h1>
        <el-row class="mb-4" :gutter="20">
          <el-col :span="16">
            <el-input placeholder="输入单个文字" v-model="searchText"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" @click="searchCharacter">搜索</el-button>
          </el-col>
          <el-col :span="2">
            <el-dropdown>
              <el-button type="success">导出文字<i class="el-icon-arrow-down el-icon--right"></i></el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-for="option in exportOptions" :key="option.value">{{ option.label }}</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
          <el-col :span="3">
            <el-dropdown>
              <el-button type="danger">导出部首<i class="el-icon-arrow-down el-icon--right"></i></el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-for="option in exportOptions" :key="option.value">{{ option.label }}</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-card>
              <template #header>
                <div class="card-header">
                  <span>文字释义显示在此</span>
                </div>
              </template>
              <el-skeleton :rows="3" animated v-if="loading"></el-skeleton>
              <div v-else>{{ characterMeaning }}</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <template #header>
                <div class="card-header">
                  <span>相关文字</span>
                </div>
              </template>
              <el-skeleton :rows="3" animated v-if="loading"></el-skeleton>
              <div v-else>{{ relatedCharacters }}</div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </template>

<script>
import SideBar from '@/components/Sidebar.vue'
export default {
  name: 'MainContent',
  components: {
    SideBar
  },
  data () {
    return {
      searchText: '',
      loading: false,
      characterMeaning: '',
      relatedCharacters: '',
      exportOptions: [
        { label: '导出csv', value: 'csv' },
        { label: '导出json', value: 'json' }
      ]
    }
  },
  methods: {
    searchCharacter () {
      this.loading = true
      this.characterMeaning = ''
      this.relatedCharacters = ''

      // 模拟数据加载和渲染过程
      setTimeout(() => {
        this.loading = false
        this.characterMeaning = '这里将显示搜索结果的文字释义。'
        this.relatedCharacters = '这里将显示相关文字列表。'
      }, 2000)
    }
  }
}
</script>

  <style>
  .text-center {
    text-align: center;
  }
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  .card-header {
    font-weight: bold;
  }
  .el-row:not(:last-child) {
    margin-bottom: 20px;
  }
  </style>
