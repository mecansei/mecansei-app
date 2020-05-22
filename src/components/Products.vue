<template>
  <div class="products-main-class page">
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <MenuBar @changeMenuContext="changeMenuByIndex" />
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
import SwapProducts from "@/components/SwapProducts.vue";
import UserPreferences from "@/components/UserPreferences.vue";
import UserChat from "@/components/UserChat.vue";

const allComponents = [UserPreferences, SwapProducts, UserChat];
let currentComponent = allComponents[1];
export default {
  name: "Products",
  components: {
    SwapProducts,
    MenuBar
  },
  methods: {
    changeMenuByIndex: function(index) {
      this.currentComponent = allComponents[index];
    }
  },
  data() {
    return {
      allComponents,
      currentComponent
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cambay&display=swap");

.products-main-class {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
