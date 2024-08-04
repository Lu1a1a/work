<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isShow = ref(false);

const toggleShow = () => {
  isShow.value = !isShow.value;
};

const closePopup = () => {
  isShow.value = false;
};

const handleKeyUp = (e) => {
  if (e.code === "Escape") {
    closePopup();
  }
};

onMounted(() => {
  window.addEventListener("keyup", handleKeyUp);
});

onUnmounted(() => {
  window.removeEventListener("keyup", handleKeyUp);
});
</script>
<template>
  <div class="content flex-center">
    <img id="small" src="../assets/images/show.png" alt="" @click="toggleShow" />

    <div v-show="isShow" class="popup flex-center">
      <div class="img_content">
        <img id="big" src="../assets/images/show.png" alt="" />
        <a class="close" @click="toggleShow">
          <img src="../assets/images/close.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../assets/images/bg.jpg");
  background-size: cover;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.664);
}
#small {
  cursor: pointer;
  width: 300px;
}
#big {
  width: 1000px;
}
.img_content {
  position: relative;
}
.close {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
}
.close > img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
