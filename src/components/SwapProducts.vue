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
        <div class="product-card">
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
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
import ProductCard from "@/components/ProductCard.vue";
import { api } from "../api";
let imgUrl =
  "https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-9-masculino/02/D18-0637-002/D18-0637-002_zoom1.jpg?ts=1560986040&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-asics-gel-impression-9-masculino/02/D18-0637-002/D18-0637-002_zoom1.jpg?ts=1560986040&?ims=1088x";
let actualImageSeq = [];

function setNewImage() {
  let serverStatus = api.checkHealth();
  serverStatus.then(res => {
    if (!res) {
      let nextProduct = api.nextProduct();
      nextProduct.then(res => {
        if (res) {
          let productData = JSON.parse(res);
          actualImageSeq = productData.photos;
          let nextImage = api.getImage(productData.photos[0]);
          nextImage.then(() => {
            let imgHtml = document.getElementById("productImg");
            imgHtml.src = api.getImageUrl(productData.photos[0]);
          });
        }
      });
    }
  });
}
export default {
  name: "Products",
  components: {
    MenuBar,
    ProductCard
  },
  methods: {
    like() {
      setNewImage();
    },
    dislike() {
      setNewImage();
    },
    setImage() {
      return imgUrl;
    }
  },
  data() {
    return {
      imgUrl,
      actualImageSeq
    };
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

.product-card {
  margin: 10px;
}
.image-container {
  height: 43vh;
  border-style: solid;
  border-color: transparent;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
