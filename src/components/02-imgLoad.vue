<script setup>
import { useImgLoad } from "../composables/useImgLoad";
const imgArr = "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KncG4Kdw578f6IdYj2Vczg.jpeg";
// const imgArr = [
//   "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KncG4Kdw5Yj2Vcz",
//   "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KncG4Kdw578f6IdYj2Vczg.jpeg",
//   "https://picsum.photos/300/200/?random=10",
//   "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*",
//   "https://picsum.photos/300/200/?random=12",
// ];
const { images, error, imagesError, isLoad } = useImgLoad(imgArr);
</script>
<template>
  <div v-for="(item, index) of images" :key="item" class="imgload">
    <div v-if="!error[index]">
      <h1 v-if="isLoad">載入中...</h1>
      <img v-else :src="item" alt="" />
    </div>
    <h1 v-else>{{ error[index] }}</h1>
    <span class="num">{{ index }}</span>
    <span class="src">{{ item }}</span>
  </div>
</template>
<style scoped>
.imgload {
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.num {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 36px;
}
.src {
  position: absolute;
  top: 36px;
  left: 0;
  font-size: 36px;
}
</style>
