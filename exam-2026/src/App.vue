<script setup lang="ts">
import MainApplication from './components/MainApplication.vue'
</script>

<template>
  <MainApplication />
</template>

<style lang="scss">
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  width: 100%;
  height: auto;

  #app {
    width: 100%;
  }
}
</style>