<template>
  <div id="container" class="box">
    <div id="cesiumContainer"></div>
  </div>
</template>
<script>
export default {
  name: 'cesiumPage',
  data() {
    return {};
  },
  mounted() {
    let Cesium = this.Cesium;
    var viewer = new Cesium.Viewer("cesiumContainer",{
      //加载在线谷歌地图
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url:"/map/vt?lyrs=s&x={x}&y={y}&z={z}"
      })
    });
    viewer._cesiumWidget._creditContainer.style.display="none";
  }
}
</script>
<style scoped>
html,
body,
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.box {
  height: 100%;
} 
</style>