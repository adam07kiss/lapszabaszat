<script setup lang="ts">

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <nav class="transition-all">
    <header>
      <div class="flex top-[90px] justify-start items-start text-primary fixed h-[53vh] font-comfortaa font-[500] w-full text-body bg-white
               ease-in-out duration-[300ms] overflow-auto transition-all z-50 transform lg:hidden px-8 lg:p-0 "
           id="menu"
      >
        <div class="w-full flex flex-col gap-7 py-2 justify-start items-start">
          <a class="hover-effect" href="#home"><span>Főoldal</span></a>
          <a class="hover-effect" href="#technologies"><span>Technológia</span></a>
          <a class="hover-effect" href="#for-carpenters"><span>Asztalosoknak</span></a>
          <a class="hover-effect" href="#for-the-public"><span>Lakosságnak</span></a>
          <a class="hover-effect" href="#panels-slider"><span>Bútorlapok</span></a>
          <a class="hover-effect" href="#prices"><span>Árak</span></a>
          <a class="hover-effect" href="#contact-us"><span>Kapcsolat</span></a>

          <a href="#contact-us" class="bg-btn-blue text-white px-6 py-4 rounded border-2 border-btn-blue transition-all duration-300
          hover:bg-white hover:text-orange-500 hover:border-btn-blue hover:border-2 hover:transition-all hover:duration-300">Megrendelés</a>
        </div>
      </div>
    </header>
  </nav>
</template>

<style scoped lang="scss">

</style>
