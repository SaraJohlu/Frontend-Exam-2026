<script setup lang="ts">
import { computed, ref } from 'vue';
import MainBtn from './MainBtn.vue'
import { Sun, Moon } from '@lucide/vue';

const isDark = ref(false);
const darkmode = computed(() => isDark.value ? 'dark' : 'light');


function toggleThemeMode(){
    isDark.value = !isDark.value;
    document.documentElement.setAttribute('theme', darkmode.value)
}
</script>

<template>

    <MainBtn class="themeBtn" @click="toggleThemeMode">
        <Sun class="light" color="white"/>
        <div>

        </div>
        <Moon class="dark" color="white"/>
    </MainBtn>

</template>

<style>
.themeBtn {
    background: var(--primary-btn-color);
    border: 0.125rem solid silver;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 5px 2px rgb(156, 156, 156);
}
</style>