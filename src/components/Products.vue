<template>
  <div class="main-products-class">
    <div class="swap-products">
      <div class="products-container">
        <img :src="imgUrl" v-bind:alt="imgUrl" class="image-container" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String,
    imgUrl: String
  }
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: auto;
}
</style>