import { ref, watch } from "vue";
const tempArr = ref([]); //暫存arr
const images = ref([]);
const error = ref([]);
const isLoad = ref(true);
const imagesError = ref([]);
const loadNum = ref(0); //驗證載入的照片數
const loadImage = (item) => {
  const img = new Image();
  img.src = item;
  img.onload = () => {
    images.value.push(item);
    error.value.push("");
    loadNum.value += 1;
  };
  img.onerror = () => {
    images.value.push("lose");
    imagesError.value.push(item);
    error.value.push("圖片載入失敗");
    loadNum.value += 1;
  };
};
export const useImgLoad = (imgSrc) => {
  tempArr.value = [];
  images.value = [];
  error.value = [];
  imagesError.value = [];
  isLoad.value = true;
  loadNum.value = 0;
  //驗證並處理
  if (typeof imgSrc === "string") tempArr.value.push(imgSrc);
  if (Array.isArray(imgSrc)) tempArr.value.push(...imgSrc);
  watch(
    loadNum,
    () => {
      if (loadNum.value >= tempArr.value.length) {
        isLoad.value = false;
        return;
      }
      loadImage(tempArr.value[loadNum.value]);
    },
    {
      immediate: true,
    },
  );
  return {
    images,
    error,
    imagesError,
    isLoad,
  };
};
