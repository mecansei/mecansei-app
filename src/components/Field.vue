<template>
  <div class="field-container">
    <div class="field">
      <i class="icon">
        <img :src="icon" class="img" />
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
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  border-width: 10px;
  border-color: orange;
}
.field:hover {
  cursor: pointer;
}
.field-container {
  display: flex;
  width: 100%;
}
.icon {
  padding: 10px;
  color: white;
  min-width: 30px;
  text-align: center;
}
.img {
  position: relative;
  top: 5px;
}
#fid {
  background-color: transparent;
  border: black 0px;
}
</style>
