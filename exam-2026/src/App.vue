<script setup lang="ts">
import Main from './components/Main.vue'
</script>

<template>
  <Main />
</template>

<style lang="scss">
:root {
  width: 100vw;
  height: auto;
  background-color: white;

  body {
    box-sizing: border-box;
    padding: 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    #app {
      width: 100%;
    }
  }
}
</style>