<script setup lang="ts">
import {onIntersect} from "~/composables/onIntersect";

const observer = ref({});
const scrollRef = ref(null);
const imageVisible = ref(false)

const onEnter = () => {
  imageVisible.value = true
};
const onExit = () => {
};
onMounted(() => {

  observer.value = onIntersect(scrollRef.value, onEnter, onExit, false, {
    threshold: 0.2,
  });
});

</script>

<template>
  <div
      ref="scrollRef"
      :class="{'visible': imageVisible}"
      class="h-full w-full flex flex-col px-4 py-10 gap-4
       lg:px-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto justify-center font-poppins overflow-hidden opacity-0 translate-y-[15px] transition-all duration-[1500ms]">
    <div class="font-[600] text-[30px] text-center justify-center flex">
      Árak
    </div>
  </div>

  <div
      class="h-full w-full flex flex-col lg:flex-row px-5 py-10 gap-6 lg:w-[960px]
             xl:w-[1140px] lg:my-0 mx-auto justify-center font-poppins  ">

    <div class="basis-1/3 shadow-all-around hover:scale-105 transition-all duration-500 rounded-lg flex flex-col items-center gap-3 py-6 text-prices-color cursor-pointer">
      <img src="../assets/img/icons/marketservices_cutting_service.png" width="70px" height="70px" alt="Szabászat">
      <span class="text-[18px] font-[500]">SZABÁSZAT</span>
      <span><s>300</s> 150.- Ft/db</span>
    </div>
    <div class="basis-1/3 shadow-all-around hover:scale-105 transition-all duration-500 rounded-lg flex flex-col items-center gap-3 py-6 text-prices-color cursor-pointer">
      <img src="../assets/img/icons/elzaras.png" width="50px" height="50px" alt="Élzárás">
      <span class="text-[18px] font-[500]">ÉLZÁRÁS <small>(0.4 mm)</small></span>
      <span><s>480</s> 240.- Ft/fm</span>
    </div>
    <div class="basis-1/3 shadow-all-around hover:scale-105 transition-all duration-500 rounded-lg flex flex-col items-center gap-3 py-6 text-prices-color cursor-pointer">
      <img src="../assets/img/icons/duplung.png" width="50px" height="50px" alt="Duplungolás">
      <span class="text-[18px] font-[500]">DUPLUNGOLÁS</span>
      <span><s>3000</s> 1500.- Ft/m2</span>
    </div>
  </div>

</template>
