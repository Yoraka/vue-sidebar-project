<template>
  <div class="frameParent">
    <div class="frameGroup">
      <div class="rectangleParent" @click="onMenuContainer1Click('/home')">
        <div class="frameChild"></div>
        <img class="xmlid5Icon" alt="" src="XMLID_5_.svg" />
      </div>
      <b class="b">汉语大字典</b>
    </div>
    <div class="menuParent">
      <div class="menu" @click="onMenuContainer1Click('/home')">
        <div class="menuonoff">
          <div class="homeiconParent">
            <img class="homeicon" alt="" src="homeicon.svg" />
            <b class="dadadada">主页</b>
          </div>
          <div class="menuonoffChild"></div>
        </div>
      </div>
      <div class="menu1" @click="onMenuContainer1Click('/profile')">
        <div class="menuoffoff">
          <div class="searchiconParent">
            <img class="homeicon" alt="" src="searchicon.svg" />
            <div class="dadadada1">数据检索</div>
          </div>
          <div class="menuoffoffChild"></div>
        </div>
      </div>
      <div class="menu2" @click="onMenuContainer1Click('/settings')">
        <div class="menuoffoff">
          <div class="searchiconParent">
            <img class="homeicon" alt="" src="downloadicon.svg" />
            <div class="dadadada1">批量导出</div>
          </div>
          <div class="menuoffoffChild"></div>
        </div>
      </div>
    </div>
    <div class="vectorParent">
      <img class="vectorIcon" alt="" src="Vector.svg" />
      <div class="div">批量导出暂未开放</div>
    </div>
    <div class="frameContainer">
      <img class="frameIcon" alt="" src="Frame.svg" />
      <div class="github">Github</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    onMenuContainer1Click (route) {
      this.$router.push(route)
    }
  }
}
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
  .frameGroup {
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
  .frameContainer {
    width: 345px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 48px;
    box-sizing: border-box;
    gap: 10px;
  }
  .frameParent {
    width: 100%;
    position: relative;
    background-color: #fff;
    height: 1500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 23px 0px;
    box-sizing: border-box;
    text-align: left;
    font-size: 24px;
    color: #000;
    font-family: Inter;
  }
</style>
