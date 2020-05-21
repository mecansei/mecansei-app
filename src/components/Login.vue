<template>
  <div class="login-container page">
    <div class="title-container">
      <div class="login-title">
        <span id="title-me">me</span>
        <span>cansei</span>
      </div>
      <h3 class="login-subtitle">
        Solucionando problemas que você nem sabia que tinha
      </h3>
    </div>
    <div class="user-info-container">
      <div class="user-private-container">
        <span></span>
        <div class="user-private">
          <Field
            value="Digite seu usuario"
            type="text"
            :icon="require('@/assets/user.png')"
          />
          <Field
            value="Digite sua senha"
            type="password"
            :icon="require('@/assets/pwd.png')"
          />
        </div>
        <span></span>
      </div>
      <div class="login-experimente-container">
        <RoundedButton title="LOGIN" name="Products" :params="loginParams" />
        <RoundedButton
          title="EXPERIMENTE"
          name="Products"
          :params="experimenteParams"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RoundedButton from "@/components/RoudedButton.vue";
import Field from "@/components/Field.vue";

export default {
  name: "Login",
  components: {
    RoundedButton,
    Field
  },
  data() {
    let loginParams = {
      token: "123345"
    };
    let experimenteParams = {
      token: "456678"
    };
    return {
      loginParams,
      experimenteParams
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cambay&display=swap");
.login-title {
  font-family: Cambay;
  font-size: 64px;
  font-weight: normal;
  font-style: normal;
  line-height: 104px;
}
#title-me {
  font-weight: bold;
  color: orange;
}
.login-subtitle {
  font-family: Cambay;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 33px;
}
.title-container {
  padding: 55px;
}
.login-sep {
  position: relative;
  min-height: 25vh;
}
.user-private {
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 5px;
}
.user-private-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}
.user-info-container {
  padding: 25px;
}
.login-container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.login-experimente-container {
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 5px;
  padding: 25px;
}

.page {
  position: fixed;
  width: inherit;
}
</style>
