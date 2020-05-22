<template>
  <div class="main-products-class page">
    <div class="swap-products">
      <div class="products-container">
        <div class="brand-container">
          <div class="login-title">
            <span id="title-me">me</span>
            <span>cansei</span>
          </div>
        </div>
        <!-- Hello {{ $route.params.token }} {{ $route.params.userValue }} /!-->
        <!-- <ProductCard v-on:next-image="$emit('next-image')" /> /!-->
        <div class="product-card" v-on:next-image="nextImage()">
          <img :src="setImage()" class="image-container" id="productImg" />
        </div>
      </div>
    </div>
    <div class="like-dislike-container">
      <div class="dislike-button">
        <img
          :src="require('@/assets/thumb-down.svg')"
          class="thumb-img"
          v-on:click="dislike()"
        />
      </div>
      <div class="swap-up-button"></div>
      <div class="like-button">
        <img
          :src="require('@/assets/thumb-up.svg')"
          class="thumb-img"
          v-on:click="like()"
        />
      </div>
    </div>
    <MenuBar />
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
import ProductCard from "@/components/ProductCard.vue";
import { api } from "../api";
let imgUrl =
  "https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-9-masculino/02/D18-0637-002/D18-0637-002_zoom1.jpg?ts=1560986040&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-asics-gel-impression-9-masculino/02/D18-0637-002/D18-0637-002_zoom1.jpg?ts=1560986040&?ims=1088x";

export default {
  name: "Products",
  props: {
    msg: String
  },
  components: {
    MenuBar,
    ProductCard
  },
  methods: {
    like() {
      console.info("like");
      this.$children[0].$emit("next-image");
      api.checkHealth();
    },
    dislike() {
      console.info("dislike");
    },
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
@import url("https://fonts.googleapis.com/css2?family=Cambay&display=swap");
.like-dislike-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.thumb-img {
  position: relative;
  min-width: 12vh;
  margin: 3vh;
}
.brand-container {
  position: relative;
  display: flex;
}
.login-title {
  position: relative;
  padding-left: 40px;
  font-family: Cambay;
  font-size: 34px;
  font-weight: normal;
  font-style: normal;
  line-height: 104px;
}
#title-me {
  font-weight: bold;
  color: orange;
}

.page {
  position: fixed;
  width: inherit;
}

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
