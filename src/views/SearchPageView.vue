<template>
    <div class="frameParent">
          <div class="frameGroup">
                <div class="frameContainer" @click="onFrameContainerClick('/home')">
                      <div class="rectangleParent">
                            <div class="frameChild" />
                            <img class="xmlid5Icon" alt="" src="@/assets/xmlid-5.svg" />
                      </div>
                      <b class="b">汉语大字典</b>
                </div>
                <div class="menuParent">
                      <div class="menu" @click="onMenuContainerClick('/home')">
                            <div class="menuoffoff">
                                  <div class="homeiconParent">
                                        <img class="homeicon" alt="" src="@/assets/menu-off-homeicon.svg" />
                                        <div class="dadadada">主页</div>
                                  </div>
                                  <div class="menuoffoffChild" />
                            </div>
                      </div>
                      <div class="menu1">
                            <div class="menuonoff">
                                  <div class="searchiconParent">
                                        <img class="homeicon" alt="" src="@/assets/menu-on-searchicon.svg" />
                                        <b class="dadadada1">数据检索</b>
                                  </div>
                                  <div class="menuonoffChild" />
                            </div>
                      </div>
                      <div class="menu2">
                            <div class="menuoffoff">
                                  <div class="homeiconParent">
                                        <img class="homeicon" alt="" src="@/assets/menu-off-downloadicon.svg" />
                                        <div class="dadadada">批量导出</div>
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
                <div class="frameParent1">
                      <div class="frameWrapper1">
                            <div class="frameWrapper2">
                                  <div class="frameParent2">
                                        <div class="homeicon">
                                              <div class="vectorWrapper">
                                                    <img class="vectorIcon1" alt="" src="@/assets/blocks.svg" />
                                              </div>
                                        </div>
                                        <div class="div1">汉语大字典数据检索</div>
                                  </div>
                            </div>
                      </div>
                      <div class="frameWrapper3">
                            <div class="frameParent3">
                                  <div class="searchbarParent">
                                        <SearchBar class="searchbar"/>
                                        <div class="searchbutton">
                                              <img class="vectorIcon2" alt="" src="@/assets/searchbtn.svg" />
                                        </div>
                                  </div>
                                  <div class="downloadbtn">
                                        <div class="div3">数据导出</div>
                                  </div>
                            </div>
                      </div>
                      <div class="frameParent4">
                            <div class="frameItem" />
                            <div class="frameInner" />
                      </div>
                </div>
          </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import SearchBar from '@/components/SearchBar.vue'

export default defineComponent({
  name: 'SearchPageView',
  components: {
    SearchBar
  },
  methods: {
    onFrameContainerClick (route) {
      this.$router.push(route)
    },
    onMenuContainerClick (route) {
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
    cursor: pointer;
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
    font-weight: 500;
}
.homeiconParent {
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
.menu {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    cursor: pointer;
}
.dadadada1 {
    flex: 1;
    position: relative;
}
.searchiconParent {
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
.menu1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    color: #000;
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
.vectorIcon1 {
    width: 31.7px;
    position: relative;
    height: 36.7px;
}
.vectorWrapper {
    position: absolute;
    top: -8.33px;
    left: -5.83px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
}
.div1 {
    flex: 1;
    position: relative;
    font-weight: 800;
}
.frameParent2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 23px;
}
.frameWrapper2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.frameWrapper1 {
    align-self: stretch;
    background-color: #eff1f5;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 200px;
}
.b1 {
    align-self: stretch;
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
.searchbar {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 6px;
}
.vectorIcon2 {
    width: 20.3px;
    position: relative;
    height: 20.3px;
}
.searchbutton {
    width: 52px;
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    height: 52px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
}
.searchbarParent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 20px;
}
.div3 {
    width: 83px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
}
.downloadbtn {
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 10px;
    text-align: center;
    font-size: 20px;
    color: rgba(24, 25, 28, 0.6);
}
.frameParent3 {
    align-self: stretch;
    height: 73px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    gap: 84px;
}
.frameWrapper3 {
    align-self: stretch;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 39px 91px;
    text-align: left;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
}
.frameItem {
    flex: 1;
    position: relative;
    background-color: #fff;
    height: 788px;
    overflow: hidden;
}
.frameInner {
    width: 220px;
    position: relative;
    background-color: #fff;
    height: 788px;
    overflow: hidden;
    flex-shrink: 0;
}
.frameParent4 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
}
.frameParent1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 115px;
}
.frameWrapper {
    position: absolute;
    height: 100%;
    width: calc(100% - 345px);
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 345px;
    background-color: #eff1f5;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 72px 100px;
    box-sizing: border-box;
    text-align: center;
    font-size: 50px;
    color: #6c7177;
}
.frameParent {
    width: 100%;
    position: relative;
    background-color: #fff;
    height: 1423px;
    overflow: hidden;
    text-align: left;
    font-size: 24px;
    color: #000;
    font-family: Inter;
}

</style>
