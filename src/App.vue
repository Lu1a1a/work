<script setup>
import DemoComponent from "./components/02-imgLoad.vue";
</script>

<template>
  <DemoComponent />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "微軟正黑體";
}
#app {
  width: 100%;
  height: 100%;
}
img {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
</style>
