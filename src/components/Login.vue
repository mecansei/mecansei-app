<template>
  <div class="login-container">
    <div class="title-container">
      <h1 class="login-title">me cansei</h1>
      <h3 class="login-subtitle">Solucionando problemas que você nem sabia que tinha</h3>
    </div>
    <div class="user-info-container">
      <div class="user-private-user">
        <Field value="digite seu nome" type="text" :icon="require('@/assets/user.png')" />
        <Field value="digite sua senha" type="password" :icon="require('@/assets/pwd.png')" />
      </div>
      <div class="login-experimente-container">
        <RoundedButton title="LOGIN" />
        <RoundedButton title="EXPERIMENTE" />
      </div>
    </div>
  </div>
</template>

<script>
import RoundedButton from "./RoudedButton.vue";
import Field from "./Field.vue";

export default {
  name: "Login",
  components: {
    RoundedButton,
    Field
  }
};
</script>

<style scoped>
.title-container {
  display: block;
  text-align: center;
  padding: 30px;
}
.login-subtitle {
  text-align: center;
  display: block;
  font-size: smaller;
}
.login-container {
  display: flex;
  flex-direction: column;
}
</style>