<script setup>
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
  <div class="bg-tertiary" ref="scrollRef">

    <div
        class=" h-full w-screen flex flex-col lg:flex-row px-4
      pt-10 pb-20 lg:px-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto justify-between transition-all z-3 gap-5 basis-1/2 font-poppins  "
    >

      <div class="pt-10">
        <div
            :class="{'visible': imageVisible}"
            class=" flex basis-1/2 h-full lg:h-[500px] w-full lg:w-[500px] lg:pr-18 opacity-0 -translate-x-[15px] transition-all duration-[1500ms]">
          <img src="../assets/img/pages-img/technologia2.jpg">
        </div>
      </div>

      <div
          :class="{'visible': imageVisible}"
          class="flex flex-col basis-1/2 pt-10 lg:pl-[90px] text-white opacity-0 translate-x-[15px] transition-all duration-[1500ms]">
        <div>
          <div class="text-[32px] font-bold leading-[44px] mb-5">Lapszabászat Asztalosoknak</div>
        </div>
        <div class="text-h5 font-normal flex flex-col gap-10">
          <div>
            Az asztalosokra különleges figyelmet fordítunk, ezért olyan szolgáltatási minőséget kínálunk, amely
            megkönnyíti és támogatja a kreatív munkákat. Elsődleges szempontok között szerepel a hatékonyság és a
            professzionális minőség.
          </div>
          <div>
            Az általunk alkalmazott modern technológia pontos és precíz eredményeket biztosít, amely lehetővé teszi az
            asztalosok számára, hogy pontosan megtervezett és kivitelezett bútorokat hozzanak létre. Legyen szó egyedi
            projektekről vagy nagyobb mennyiségű bútorlapokról, elkötelezettek vagyunk az asztalosok támogatásában.
          </div>
        </div>
        <div class="pt-16">
          <a href="#contact-us" class="bg-white text-btn-blue px-6 py-4 rounded border-2 border-btn-blue transition-all duration-300 shadow-md w-max
          hover:bg-btn-blue hover:text-white hover:border-white hover:border-2 hover:transition-all hover:duration-300">
            Megrendelés
          </a>
        </div>
      </div>
    </div>
  </div>

</template>
