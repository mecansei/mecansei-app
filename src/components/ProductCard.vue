<template>
  <div class="product-card" v-on:next-image="nextImage()">
    <img :src="setImage()" class="image-container" id="productImg" />
  </div>
</template>

<script>
let imgUrl =
  "https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-9-masculino/02/D18-0637-002/D18-0637-002_zoom1.jpg?ts=1560986040&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-asics-gel-impression-9-masculino/02/D18-0637-002/D18-0637-002_zoom1.jpg?ts=1560986040&?ims=1088x";
export default {
  name: "ProductCard",
  methods: {
    setImage() {
      return imgUrl;
    },
    nextImage() {
      console.info("calling next image from child component");
    }
  }
};
</script>

<style scoped>
.product-card {
  margin: 10px;
}
.image-container {
  width: 100%;
  height: 50vh;
  border-style: solid;
  border-color: transparent;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
