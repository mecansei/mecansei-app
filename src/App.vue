<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Products
      msg="test"
      imgUrl="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/06/HZM-1864-006/HZM-1864-006_zoom1.jpg?ts=1583774895&ims=544x"
    />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import Products from "./components/Products.vue";

export default {
  name: "App",
  components: {
    //HelloWorld
    Products
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
