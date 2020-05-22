<template>
  <div class="products-main-class page">
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <SwapProducts />
    <MenuBar v-model="this.$data.currentTabIndex" />
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
import SwapProducts from "@/components/SwapProducts.vue";

const allComponents = [null, SwapProducts, null];
export default {
  name: "Products",
  components: {
    SwapProducts,
    MenuBar,
    ProductsComponent: SwapProducts
  },
  methods: {
    swapComponent: function(component) {
      this.currentComponent = component;
    }
  },
  watch: {
    currentTabIndex: function(val) {
      console.info("changing the current index in a parent component: " + val);
      this.swapComponent(allComponents[this.currentComponent]);
    }
  },
  data() {
    return {
      allComponents,
      currentComponent: this.$data
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
