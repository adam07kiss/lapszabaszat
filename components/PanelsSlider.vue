<script setup>
import {Carousel, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import VueEasyLightbox from 'vue-easy-lightbox';
import {onIntersect} from "~/composables/onIntersect";


const images = [
  {src: '/img/panels/aranytolgy.jpg', text: 'Aranytölgy'},
  {src: '/img/panels/canyon_tolgy.jpg', text: 'Canyon Tölgy'},
  {src: '/img/panels/cement.jpg', text: 'Cement'},
  {src: '/img/panels/dark.jpg', text: 'Dark'},
  {src: '/img/panels/dio.jpg', text: 'Dió'},
  {src: '/img/panels/feher.jpg', text: 'Fehér'},
  {src: '/img/panels/feher_canyon.jpg', text: 'Fehér Canyon'},
  {src: '/img/panels/fregatt_tolgy.jpg', text: 'Fregatt tölgy'},
  {src: '/img/panels/grafit.jpg', text: 'Grafit'},
  {src: '/img/panels/havas_koris.jpg', text: 'Havas Kőris'},
  {src: '/img/panels/kasmir.jpg', text: 'Kasmír'},
  {src: '/img/panels/kek.jpg', text: 'Kék'},
  {src: '/img/panels/lime.jpg', text: 'Lime'},
  {src: '/img/panels/magasfenyufeher.jpg', text: 'Magasfényű Fehér'},
  {src: '/img/panels/magasfenyuszurke.jpg', text: 'Magasfényű Szürke'},
  {src: '/img/panels/narancs.jpg', text: 'Narancs'},
  {src: '/img/panels/piros.jpg', text: 'Piros'},
  {src: '/img/panels/serwood.jpg', text: 'Serwood'},
  {src: '/img/panels/sonoma_tolgy.jpg', text: 'Sonoma Tölgy'},
  {src: '/img/panels/sotet_sonoma_tolgy.jpg', text: 'Dark Sonoma Tölgy'},
  {src: '/img/panels/szurke.jpg', text: 'Szürke'},
  {src: '/img/panels/tolgy.jpg', text: 'Tölgy'},
  {src: '/img/panels/wenge.jpg', text: 'Wenge'},
  {src: '/img/panels/feher.jpg', text: 'Fehér HDF lemez'}
];

const lightboxVisible = ref(false);
const currentImageIndex = ref(0);
const observer = ref({});
const scrollRef = ref(null);
const imageVisible = ref(false)

function openLightbox(index) {
  currentImageIndex.value = index;
  lightboxVisible.value = true;
}

function closeLightbox() {
  lightboxVisible.value = false;
}

const settings = reactive({
  itemsToShow: 1.5,
  snapAlign: 'center',
})
const breakpoints = reactive({
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4.5,
    snapAlign: 'start',
  },
})

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
      class="h-full w-full flex flex-col px-4 py-20 gap-4
       lg:px-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto justify-center font-poppins overflow-hidden opacity-0 translate-y-[15px] transition-all duration-[1500ms]">
    <div class="font-bold text-[30px] text-center justify-center flex">
      Bútorlapok széles választékban
    </div>
    <div class="font-normal text-h5 justify-center flex text-slider-secondary-text">
      SWISS KRONO & KASTAMONU
    </div>
  </div>
  <div class="flex flex-col lg:flex-row px-4
      pb-20 lg:px-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto font-poppins">

    <carousel v-bind="settings" :breakpoints="breakpoints">
      <slide v-for="(image, index) in images" :key="index">
        <div class="carousel__item hover:text-btn-blue flex flex-col shadow-md">
          <img class="rounded-t-[8px] cursor-pointer" :src="image.src" alt="" @click="openLightbox(index)"/>
          <span class="absolute m-auto bottom-0 py-2.5 w-[calc(100%-10px)] bg-pictogram-gray cursor-pointer">{{
              image.text
            }}</span>
        </div>
      </slide>
    </carousel>

    <vue-easy-lightbox
        :visible="lightboxVisible"
        :imgs="images"
        :index="currentImageIndex"
        @hide="closeLightbox"
    />
  </div>
</template>


<style>
.carousel__slide {
  padding: 0 5px;
}
</style>
