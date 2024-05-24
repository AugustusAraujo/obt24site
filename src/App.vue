<script setup>
import FooterComponent from "@/components/Footer.vue"
</script>

<template>
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