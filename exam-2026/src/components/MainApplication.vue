<script setup lang="ts">
import ThemeModeBtn  from './buttons/ThemeModeBtn.vue';
import Navbar from './nav/Navbar.vue';
import Btn from './buttons/Btn.vue';

</script>
<template>
    <!-- // Using semantisk HTML -->
    <header>
        <Navbar></Navbar>
        <Btn />
        <ThemeModeBtn />
    </header>
    <main>

    </main>
    <footer>

    </footer>

</template>

<style>
:root {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 100vh;

    font-family: Arial, Helvetica, sans-serif;
}

:root[theme="dark"] {
    background-color:var(--darkMode);
    color: var(--dark-color);
}

</style>
