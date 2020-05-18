<template>
  <div id="app">
    <!-- <Products
      msg="test"
      imgUrl="https://static.netshoes.com.br/produtos/tenis-nike-court-lite-2-masculino/06/HZM-1864-006/HZM-1864-006_zoom1.jpg?ts=1583774895&ims=544x"
    />-->
    <Login />
  </div>
</template>

<script>
//import Products from "./components/Products.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Login
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
