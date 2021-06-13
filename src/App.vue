<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  color: #000;
  overflow: hidden;
}
</style>
