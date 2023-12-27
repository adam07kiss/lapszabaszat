<script setup>

const images = ref([
  '/img/gallery/asztalos.jpg',
  '/img/gallery/kep1.jpg',
  '/img/gallery/kep2.jpg',
  '/img/gallery/szallitas.jpg',
]);

const index = ref(null);
</script>
<template>
  <div class="flex flex-row bg-home-bg">
    <div
        class="flex flex-wrap md:flex-nowrap md:basis-1/4 w-full h-full">
      <nuxt-img
          alt="gallery-img"
          format="webp"
          loading="lazy"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          :src="image"
          class="image flex cursor-pointer opacity-100 hover:opacity-40 bg-home-bg bg-blend-multiply hover:transition-all transition-all duration-500 hover:duration-500"
          @click="() => index = imageIndex"
      />
      <gallery :images="images" :index="index" @close="() => index = null"></gallery>
    </div>
  </div>
</template>

