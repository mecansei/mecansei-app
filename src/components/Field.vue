<template>
  <div class="field-container">
    <div class="field">
      <i class="icon">
        <img :src="icon" />
      </i>
      <input :type="type" id="fid" name="fname" :placeholder="value" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    value: String,
    icon: String,
    type: String
  }
};
</script>

<style scoped>
.field {
  text-align: center;
}
.field-container {
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 22px;
}
.icon {
  padding: 2px;
  color: white;
  min-width: 30px;
  text-align: center;
}
#fid {
  background-color: transparent;
  border: black 0px;
}
</style>