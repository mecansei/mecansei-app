<template>
  <div id="app">
    <transition
      name="router-anim"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutUp"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
* {
  border: 0;
  margin: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(0, 0, 0, 0.03);
  position: relative;
  height: 100vh;
  width: 100%;
}
</style>
