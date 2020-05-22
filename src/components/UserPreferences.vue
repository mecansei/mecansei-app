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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPreferences"
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
  width: 100%;
  height: 50vh;
  border-style: solid;
  border-color: transparent;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
