<script setup>

import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, EffectFade,} from 'swiper/modules';
import {onIntersect} from "~/composables/onIntersect";

import 'swiper/css';
import 'swiper/css/effect-fade';

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
  <div id="app">
    <div class="bg-home-bg z-1">
      <div class="flex items-center justify-center w-full h-screen absolute">

        <div
            ref="scrollRef"
            class=" z-10 flex flex-col items-center justify-center h-screen w-screen text-white font-poppins pt-20 px-4">
          <div class="text-center uppercase text-body pb-2 mx-3 font-[500] tracking-[4px]">Megfizethető Bútor</div>
          <div class="text-center text-[30px] sm:text-[40px] md:text-[50px] font-normal">Lapszabászat Mesterfokon</div>
          <div class="text-center uppercase text-body pt-2 mb-10 font-[500] tracking-[4px]">
            Tökéletes bútorhoz tökéletes bútorlap.
          </div>
          <a href="#contact-us"
             :class="{'visible': imageVisible}"
             class="bg-btn-orange text-body text-white px-10 py-3 rounded-[6px] border-2 border-btn-orange
                        transition-all duration-[750ms] hover:bg-transparent hover:border-white hover:border-2
                        hover:transition-all hover:duration-[750ms] opacity-0 translate-x-[-50px]">Megrendelés</a>
        </div>
      </div>
      <swiper
          :effect="'fade'"
          :loop="true"
          :modules="[EffectFade, Autoplay]"
          class="bg-cover opacity-30 "
          :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
      >
        <swiper-slide>
          <nuxt-img class="h-screen object-cover w-full overflow-hidden" format="webp" src="/img/home-slider-img/cta-1.jpg" alt=""/>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img class="h-screen object-cover w-full overflow-hidden" format="webp" src="/img/home-slider-img/cta-2.jpg" alt=""/>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img class="h-screen object-cover w-full overflow-hidden" format="webp" src="/img/home-slider-img/cta-3.jpg" alt=""/>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img class="h-screen object-cover w-full overflow-hidden" format="webp" src="/img/home-slider-img/cta-4.jpg" alt=""/>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
  background-color: #1a1a3a;
  z-index: 10; /* Adjust this value as needed */
}

.fade-enter-from, .fade-leave-to {
  opacity: 0.95;
}
</style>
