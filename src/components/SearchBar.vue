<template>
    <div class="searchbar" @mouseover="toggleHover" @mouseleave="toggleDefault" @click="toggleActive">
          <div class="property1" :class="{ 'property1default': isDefault, 'property1hover': isHover, 'property1active': isActive }">
                <b class="b">输入框</b>
                <div class="wrapper">
                      <div class="div">输入单个文字进行查询</div>
                </div>
          </div>
    </div>
</template>
<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      isDefault: true,
      isHover: false,
      isActive: false
    }
  },
  methods: {
    toggleHover () {
      this.isHover = true
      this.isDefault = false
      this.isActive = false
    },
    toggleDefault () {
      this.isHover = false
      this.isDefault = true
      this.isActive = false
    },
    toggleActive () {
      this.isHover = false
      this.isDefault = false
      this.isActive = true
    }
  }
}
</script>
<style>
.b {
          align-self: stretch;
          position: relative;
    }
          .div {
                flex: 1;
                position: relative;
          }
          .wrapper {
                align-self: stretch;
                border-radius: 7px;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.6);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 12px 24px;
                font-size: 20px;
                color: rgba(0, 0, 0, 0.3);
          }
          .property1default {
                position: absolute;
                top: 20px;
                left: 20px;
                width: 329px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 6px;
                color: rgba(0, 0, 0, 0.6);
          }
          .container {
                align-self: stretch;
                border-radius: 7px;
                background-color: #fff;
                border: 1px solid #0c8ce9;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 12px 24px;
                font-size: 20px;
                color: rgba(0, 0, 0, 0.64);
          }
          .parent {
                align-self: stretch;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 6px;
          }
          .property1hover {
                position: absolute;
                top: 118px;
                left: 20px;
                width: 329px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
          }
          .frame {
                align-self: stretch;
                box-shadow: 0px 0px 0px 2px #0c8ce9;
                border-radius: 7px;
                background-color: #fff;
                border: 1px solid #0c8ce9;
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 12px 24px;
                font-size: 20px;
                color: #18191c;
          }
          .group {
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 6px;
          }
          .property1active {
                position: absolute;
                top: 216px;
                left: 20px;
                width: 329px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
          }
          .searchbar {
                width: 100%;
                position: relative;
                border-radius: 5px;
                border: 1px dashed #9747ff;
                box-sizing: border-box;
                height: 314px;
                overflow: hidden;
                text-align: left;
                font-size: 16px;
                color: #0c8ce9;
                font-family: Inter;
          }

    </style>
