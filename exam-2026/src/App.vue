<script setup lang="ts">
import Main from './components/Main.vue'
</script>

<template>
  <Main />
</template>

<style lang="scss">
:root {
  background-color: white;

  body {
    box-sizing: border-box;
    padding: 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    #app {
      width: 100%;
      height: 100%;
    }
  }
}
</style>