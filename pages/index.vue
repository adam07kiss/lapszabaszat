<script setup>

import Navbar from "~/components/Navbar.vue";
import Home from "~/components/Home.vue";
import CountertopsSlider from "~/components/CountertopsSlider.vue";
import Prices from "~/components/Prices.vue";
import ContactUs from "~/components/ContactUs.vue";

const isMenuOpen = ref(false);
watch(isMenuOpen, v => document.body.style.overflow = v ? 'hidden' : 'auto')

useSeoMeta({
  title: 'Lapszabászat | Megfizethetőbútor'
})
</script>

<template>
  <section id="header" :class="{'open': isMenuOpen}">
    <Navbar @open-menu="isMenuOpen = true"
    @close="isMenuOpen = false"
    :is-menu-open="isMenuOpen"
    />
    <MobileMenu :is-open="isMenuOpen"/>
  </section>
  <section id="home">
    <Home/>
  </section>
  <section id="technologies">
    <Technologies/>
  </section>
  <section id="for-carpenters">
    <ForCarpenters/>
  </section>
  <section id="for-the-public">
    <ForThePublic/>
  </section>
  <section id="work-environment">
    <WorkEnvironment/>
  </section>
  <section id="panels-slider">
    <PanelsSlider/>
  </section>
  <section id="countertops-slider">
    <CountertopsSlider/>
  </section>
  <section id="prices">
    <Prices/>
  </section>
  <section id="information">
    <Information/>
  </section>
  <section id="contact-us">
    <ContactUs/>
  </section>
  <section id="footer">
    <Footer/>
  </section>
</template>

<style lang="scss">
@import url('assets/scss/main.scss');
</style>
