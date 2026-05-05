<script setup lang="ts">
import { computed, ref } from 'vue';
import Btn from './MainButton.vue'
import { Sun, Moon } from '@lucide/vue';

const isDark = ref(false);
const darkmode = computed(() => isDark.value ? 'dark' : 'light');


function toggleThemeMode(){
    isDark.value = !isDark.value;
    document.documentElement.setAttribute('theme', darkmode.value)
}
</script>

<template>

    <Btn class="themeBtn" @click="toggleThemeMode" label="Hejsan">
        <Sun class="light" color="white"/>
        <Moon class="dark" color="white"/>
    </Btn>

</template>

<style lang="scss">
.themeBtn {
    background: var(--primary-btn-color);
    border: 0.125rem solid silver;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 5px 2px rgb(156, 156, 156);

    color: black;
}
</style>