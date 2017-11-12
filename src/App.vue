<template>
  <div id="app">
    <router-view></router-view>
    <div class="app-loading" v-show="isLoading">
      <div class="loading-wrap">
        <mt-spinner 
          :size="24"
          type="double-bounce"></mt-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import store from './store'
export default {
  name: "app",
  components: {

  },
  computed: {
    isLoading: function() {
      return store.state.isLoading
    }
  }
};
</script>

<style lang="less">

html, body , #app{
  background-color: #FFF;
  font-size: 20px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app .app-loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999999;
  background-color: #000;
  opacity: 0.6;

  .loading-wrap {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
  }
}
</style>
