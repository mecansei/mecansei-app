<template>
  <div class="button-container">
    <button class="button-class" v-on:click="navigate(name, params)">
      {{ title }}
    </button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "RoudedButton",
  props: {
    title: String,
    name: String,
    params: Object
  },
  methods: {
    navigate(name, params) {
      router.push({ name, params });
    }
  }
};
</script>

<style scoped>
.button-container {
  display: block;
  text-align: center;
}

.button-class {
  background-color: white;
  border-radius: 22px;
  border: 0px;
  padding: 15px;
  color: white;
  background-color: orange;
  min-width: 276px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
}
.button-class:hover {
  cursor: pointer;
}
</style>
