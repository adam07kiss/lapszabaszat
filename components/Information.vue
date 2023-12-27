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
        class="flex flex-col lg:flex-row px-4
      pt-10 pb-20 lg:px-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto items-center justify-center transition-all font-poppins"
    >

      <div
          class="flex flex-col pt-10 text-white text-center">
        <div>
          <div class="text-[32px] font-bold leading-[44px] mb-5">Tudnivalók a megrendelés leadása előtt</div>
        </div>
        <div class="text-h5 font-normal text-center pt-10 opacity-0 translate-x-[-15px] transition-all duration-[1500ms]"
             :class="{'visible': imageVisible}">
          <p>Nálunk nincsen minimális rendelési mennyiség, így akár egyetlen darab bútorlap esetén is számolhat
            velünk.</p>
          <p> Tudjuk, hogy az idő gyakran kritikus tényező, ezért vállaljuk, hogy a megrendelt bútorlapokat egy hetes
            határidőn belül elkészítjük ügyfeleink számára. Továbbá hozott bútorlapok feldolgozásával is foglalkozik
            lapszabászatunk, amennyiben azok teljesen új állapotúak.</p>
          <p>A minimális méretkorlát 200*80mm.</p>
        </div>
        <div class="pt-16 flex justify-center opacity-0 translate-x-[15px] transition-all duration-[1500ms]"
             :class="{'visible': imageVisible}">
          <a href="#contact-us" class="bg-white text-btn-blue px-6 py-4 rounded border-2 border-btn-blue transition-all duration-300 shadow-md w-max
          hover:bg-btn-blue hover:text-white hover:border-2 hover:border-white hover:transition-all hover:duration-300">
            Megrendelés leadása
          </a>
        </div>
      </div>
    </div>
  </div>

</template>
