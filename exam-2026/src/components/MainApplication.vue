<script setup lang="ts">
import LightDarkModeBtn from './buttons/LightDarkModeBtn.vue';
import { Sun } from '@lucide/vue';

</script>
<template>
    <!-- // Using semantisk HTML -->
    <header>
        <LightDarkModeBtn>
        </LightDarkModeBtn>
    </header>

</template>

<style>
:root {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    font-family: Arial, Helvetica, sans-serif;
}

:root[theme="dark"] {
    background-color:var(--darkMode);
    color: var(--dark-color);
}

:root[theme="dark"] .themeBtn {
    background-color: var(--secondary-btn-color);
    color: var(--light-color);
}

</style>
