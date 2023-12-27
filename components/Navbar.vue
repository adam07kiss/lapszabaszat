<script setup>
const isSticky = ref(false)

defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false
  }
})


const scroll = function () {
  isSticky.value = window.pageYOffset > 0
}

onMounted(() => {
  window.addEventListener('scroll', scroll)
  const navbarHeight = document.querySelector('nav').offsetHeight;

  const links = document.querySelectorAll('#header a, #home a, #footer a, #for-carpenters a, #for-the-public a, #information a');
  links.forEach(function (link) {

    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const targetOffset = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });

      // Change the URL without causing a page refresh
      history.pushState(null, '', targetId);
    });
  });
})

const emits = defineEmits(['openMenu', 'close'])

</script>

<template>
  <nav
      id="navbar"
      class="h-[90px] bg-white text-primary font-[500] text-body font-poppins fixed z-[60] w-full drop-shadow-md transition-all"
      :class="isSticky">
    <header id="navbarMenu"
            class="flex justify-between items-center py-4 lg:py-3.5 lg:p-0 lg:w-[960px] xl:w-[1140px] lg:my-0 mx-auto transition-all h-full">
      <a href="#home" class="h-full pl-8 lg:pl-0" aria-label="nav-logo">
        <img class="h-full" src="../assets/img/pages-img/megfizethetobutor-logo.webp" alt="megfizethetobutor-logo">
      </a>

      <button v-if="!isMenuOpen" id="hamburger-button" class="pr-8" aria-label="hamburger" @click="emits('openMenu')">
        <img class="lg:hidden cursor-pointer" src="../assets/svg/icons/hamburger-menu.svg" alt="hamburger-menu">
      </button>

      <button v-else id="hamburger-close" class="pr-8" aria-label="hamburger-close" @click="emits('close')">
        <img class="lg:hidden cursor-pointer" src="../assets/svg/icons/hamburger-close.svg" alt="hamburger-close">
      </button>

      <div class="
           flex-row justify-end items-center hidden xl:gap-10 lg:gap-4
           lg:flex md:bg-transparent"
      >
        <a class="hover-effect" href="#home"><span>Főoldal</span></a>
        <a class="hover-effect" href="#technologies"><span>Technológia</span></a>
        <a class="hover-effect" href="#for-carpenters"><span>Asztalosoknak</span></a>
        <a class="hover-effect" href="#for-the-public"><span>Lakosságnak</span></a>
        <a class="hover-effect" href="#panels-slider"><span>Bútorlapok</span></a>
        <a class="hover-effect" href="#prices"><span>Árak</span></a>
        <a class="hover-effect" href="#contact-us"><span>Kapcsolat</span></a>
        <div>
          <OrderButton/>
        </div>
      </div>
    </header>
  </nav>
  <div v-if="isMenuOpen" class="fixed w-full h-screen inset-0 bg-black z-20" @click="emits('close')"></div>
</template>
