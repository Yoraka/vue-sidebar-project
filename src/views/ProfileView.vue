<template>
    <el-container>
      <side-bar />
      <el-main>
        <h1 class="text-center mb-6">汉语大字典文字检索器</h1>
        <el-row class="mb-4" :gutter="20">
          <el-col :span="16">
            <el-input placeholder="输入单个文字" v-model="searchText" @input="handleInput"></el-input>
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
                    <span>文字数据</span>
                    </div>
                </template>
                <el-skeleton :rows="3" animated v-if="loading"></el-skeleton>
                <div v-else>
                    <!-- Render definitions using Element UI cards -->
                    <el-card class="definition-card" v-if="character">
                    <div class="text-display">
                        <p v-if="character">字：{{ this.character }}</p>
                        <p v-if="characterRadical">部首：{{ this.characterRadical }}</p>
                        <p v-if="characterStrokes">笔画：{{ this.characterStrokes }}</p>
                    </div>
                    </el-card>
                    <el-card
                    v-for="(definition, index) in characterDefinitions"
                    :key="index"
                    class="definition-card"
                    shadow="always">
                    <template #header>
                        <div style="text-align: left;">{{ definition.pinyin }} - {{ definition.rhyme_book }}</div>
                    </template>
                    <div style="text-align: left;">
                        <ul>
                        <li v-for="(meaning, mIndex) in definition.meanings" :key="mIndex">{{ meaning }}</li>
                        </ul>
                    </div>
                    </el-card>
                </div>
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
      characterDefinitions: [], // Store definitions directly
      relatedCharacters: '',
      exportOptions: [
        { label: '导出csv', value: 'csv' },
        { label: '导出json', value: 'json' }
      ]
    }
  },
  methods: {
    handleInput (value) {
      if (value.length > 1) {
        this.searchText = value.charAt(0) // 保留第一个字符
      }
    },
    searchCharacter () {
      this.loading = true
      fetch(`http://localhost:3000/search/${this.searchText}`)
        .then(response => {
          if (!response.ok) throw new Error('Character not found')
          return response.json()
        })
        .then(data => {
          this.character = data.character
          this.characterRadical = data.radical
          this.characterStrokes = data.strokes
          this.characterDefinitions = data.definitions
          this.relatedCharacters = data.relatedCharacters
          this.loading = false
        })
        .catch(error => {
          console.error('Error fetching the character data:', error)
          this.characterDefinitions = []
          this.relatedCharacters = '加载数据时出错'
          this.loading = false
        })
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
  .text-display{
    white-space: pre-wrap;
  }
  .definition-card {
    text-align: left;
    margin-bottom: 20px;
  }
  </style>
