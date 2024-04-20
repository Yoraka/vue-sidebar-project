<template>
  <div class="frameParent">
      <div class="frameGroup">
          <div class="frameContainer">
              <div class="rectangleParent">
                  <div class="frameChild" />
                  <img class="xmlid5Icon" alt="" src="@/assets/xmlid-5.svg" />
              </div>
              <b class="b">汉语大字典</b>
          </div>
          <div class="menuParent">
              <div class="menu">
                  <div class="menuonoff">
                      <div class="homeiconParent">
                          <img class="homeicon" alt="" src="@/assets/menu-on-homeicon.svg" />
                          <b class="dadadada">主页</b>
                      </div>
                      <div class="menuonoffChild" />
                  </div>
              </div>
              <div class="menu1" @click="onMenuContainer1Click('/search')">
                  <div class="menuoffoff">
                      <div class="searchiconParent">
                          <img class="homeicon" alt="" src="@/assets/menu-off-searchicon.svg" />
                          <div class="dadadada1">数据检索</div>
                      </div>
                      <div class="menuoffoffChild" />
                  </div>
              </div>
              <div class="menu2">
                  <div class="menuoffoff">
                      <div class="searchiconParent">
                          <img class="homeicon" alt="" src="@/assets/menu-off-downloadicon.svg" />
                          <div class="dadadada1">批量导出</div>
                      </div>
                      <div class="menuoffoffChild" />
                  </div>
              </div>
          </div>
          <div class="vectorParent">
              <img class="vectorIcon" alt="" src="@/assets/vector.svg" />
              <div class="div">批量导出暂未开放</div>
          </div>
          <div class="frameDiv">
              <img class="frameIcon" alt="" src="@/assets/frame.svg" />
              <div class="github">Github</div>
          </div>
      </div>
      <div class="frameWrapper">
          <div class="frameWrapper1">
              <div class="hanzi1Parent">
                  <img class="hanzi1Icon" alt="" src="@/assets/hanzi-1.svg" />
                  <img class="frameIcon1" alt="" src="@/assets/books.svg" />
                  <b class="dadadada">汉语大字典项目 主页</b>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  methods: {
    onMenuContainer1Click (route) {
      this.$router.push(route)
    }
  }
})
</script>

<style scoped>
.frameChild {
      position: absolute;
      top: 0px;
      left: 0px;
      border-radius: 8px;
      background-color: #fff;
      border: 2px solid #000;
      box-sizing: border-box;
      width: 55px;
      height: 55px;
  }
      .xmlid5Icon {
          position: absolute;
          top: 9px;
          left: 8.5px;
          width: 38.1px;
          height: 36.1px;
      }
      .rectangleParent {
          width: 55px;
          position: relative;
          height: 55px;
      }
      .b {
          position: relative;
      }
      .frameContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          font-size: 40px;
          color: #1e1e1e;
      }
      .homeicon {
          width: 40px;
          position: relative;
          height: 40px;
          overflow: hidden;
          flex-shrink: 0;
      }
      .dadadada {
          flex: 1;
          position: relative;
      }
      .homeiconParent {
          flex: 1;
          border-radius: 6px;
          background-color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 12px 24px;
          gap: 15px;
      }
      .menuonoffChild {
          width: 4.5px;
          position: relative;
          border-radius: 4px 1px 1px 4px;
          background-color: #4b76e5;
          height: 68px;
      }
      .menuonoff {
          width: 345px;
          background-color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 12px 0px 12px 24px;
          box-sizing: border-box;
          gap: 15px;
      }
      .menu {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          color: #000;
      }
      .dadadada1 {
          flex: 1;
          position: relative;
          font-weight: 500;
      }
      .searchiconParent {
          width: 301.5px;
          border-radius: 6px;
          background-color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 12px 24px;
          box-sizing: border-box;
          gap: 15px;
      }
      .menuoffoffChild {
          width: 4.5px;
          position: relative;
          border-radius: 4px 1px 1px 4px;
          background-color: #4b76e5;
          height: 68px;
          opacity: 0;
      }
      .menuoffoff {
          background-color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 12px 0px 12px 24px;
          gap: 15px;
      }
      .menu1 {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          cursor: pointer;
      }
      .menu2 {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
      }
      .menuParent {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 24px 0px;
          font-size: 32px;
          color: #6c7177;
      }
      .vectorIcon {
          width: 20px;
          position: relative;
          height: 20px;
      }
      .div {
          flex: 1;
          position: relative;
          font-weight: 500;
          display: inline-block;
          height: 29px;
      }
      .vectorParent {
          width: 345px;
          background-color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 12px 24px 12px 48px;
          box-sizing: border-box;
          gap: 11px;
      }
      .frameIcon {
          width: 24px;
          position: relative;
          height: 24px;
          overflow: hidden;
          flex-shrink: 0;
      }
      .github {
          position: relative;
          font-weight: 500;
      }
      .frameDiv {
          width: 345px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 12px 48px;
          box-sizing: border-box;
          gap: 10px;
      }
      .frameGroup {
          position: absolute;
          height: 100%;
          top: 0px;
          bottom: 0px;
          left: 0px;
          background-color: #fff;
          width: 345px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 23px 0px;
          box-sizing: border-box;
      }
      .hanzi1Icon {
          width: 200px;
          position: relative;
          height: 200px;
          overflow: hidden;
          flex-shrink: 0;
      }
      .frameIcon1 {
          width: 70px;
          position: relative;
          height: 70px;
          overflow: hidden;
          flex-shrink: 0;
      }
      .hanzi1Parent {
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0px 12px;
          gap: 20px;
      }
      .frameWrapper1 {
          position: absolute;
          width: calc(100% - 55px);
          top: 97px;
          right: 27.5px;
          left: 27.5px;
          border-radius: 10px;
          background-color: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 37px 20px;
          box-sizing: border-box;
      }
      .frameWrapper {
          position: absolute;
          width: calc(100% - 345px);
          top: 0px;
          right: 0px;
          left: 345px;
          background-color: #eff1f5;
          height: 1500px;
          overflow: hidden;
          text-align: center;
          font-size: 64px;
      }
      .frameParent {
          width: 100%;
          position: relative;
          background-color: #fff;
          height: 1500px;
          overflow: hidden;
          text-align: left;
          font-size: 24px;
          color: #000;
          font-family: Inter;
      }
</style>
