<template>
  <div class="menu-container">
    <div class="icon-container user-settings-container">
      <img :src="require('@/assets/userMenu.svg')" class="icon" />
    </div>
    <div class="icon-container foot-more-info-container">
      <img :src="require('@/assets/foot.svg')" class="icon foot-icon" />
    </div>
    <div class="icon-container chat-container">
      <img :src="require('@/assets/chat.svg')" class="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 236, 218, 0.1);
  box-shadow: 0 0 10px rgba(200, 80, 0, 0.1);
}
.icon-container {
  margin: 10px;
}
.icon {
  position: relative;
  width: auto;
  height: 7vh;
}
.foot-icon {
  height: 12vh;
}
</style>
