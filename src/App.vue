<script setup>
import HeaderComponent from "@/components/Header.vue"
import FooterComponent from "@/components/Footer.vue"
</script>

<template>
  <HeaderComponent />
  <main id="main">
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style lang="scss" scoped>
#main {
  width: 90%;
  margin: auto;
}
</style>