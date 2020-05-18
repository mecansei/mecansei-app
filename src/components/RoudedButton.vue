<template>
  <div class="button-container">
    <button class="button-class">{{ title }}</button>
  </div>
</template>

<script>
export default {
  name: "RoudedButton",
  props: {
    title: String
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
  padding: 5px;
}
</style>