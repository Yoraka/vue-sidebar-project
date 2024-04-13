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
                    <span>文字数据</span>
                    </div>
                </template>
                <el-skeleton :rows="3" animated v-if="loading"></el-skeleton>
                <div v-else>
                    <!-- Render definitions using Element UI cards -->
                    <el-card class="definition-card" v-if="character">
                    <div class="text-display">
                        <p v-if="character">字：{{ character }}</p>
                        <p v-if="characterRadical">部首：{{ characterRadical }}</p>
                        <p v-if="characterStrokes">笔画：{{ characterStrokes }}</p>
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
    searchCharacter () {
      this.loading = true
      setTimeout(() => {
        import('@/assets/characters.json')
          .then((data) => {
            const characterData = data.default // Adjust based on JSON import
            if (characterData.character === this.searchText) {
              this.character = characterData.character
              this.characterRadical = characterData.radical
              this.characterStrokes = characterData.strokes
              this.characterDefinitions = characterData.definitions
              this.relatedCharacters = `说
               說
               言
               话
               話
               语
               語
               `
            } else {
              this.characterDefinitions = []
              this.relatedCharacters = ''
            }
            this.loading = false
          })
          .catch(error => {
            console.error('Error fetching the character data:', error)
            this.loading = false
            this.characterDefinitions = []
            this.relatedCharacters = '加载数据时出错'
          })
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
  .text-display{
    white-space: pre-wrap;
  }
  .definition-card {
    text-align: left;
    margin-bottom: 20px;
  }
  </style>
