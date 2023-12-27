<script setup>
import {Carousel, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import VueEasyLightbox from 'vue-easy-lightbox';
import {onIntersect} from "~/composables/onIntersect";


const images = [
  {src: '/img/countertops/basalt.jpg', text: 'Basalt'},
  {src: '/img/countertops/bezs_marvany_munkalap.jpg', text: 'Bézs Márvány'},
  {src: '/img/countertops/magasf_ny_fekete_munkalap.jpg', text: 'Magasfényű Fekete'},
  {src: '/img/countertops/sonoma_tolgy_munkalap.jpg', text: 'Sonoma Tölgy'}
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
      class="h-full w-full flex flex-col px-4 pb-20
       lg:px-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto justify-center font-poppins overflow-hidden opacity-0 translate-y-[15px] transition-all duration-[1500ms]">
    <div class="font-bold text-[30px] text-center justify-center flex">
      Munkalapok
    </div>
  </div>
  <div class="flex flex-col lg:flex-row px-4
      pb-10 lg:px-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto font-poppins">

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
