<script setup lang="ts">
import ThemeModeBtn  from './buttons/ThemeModeBtn.vue';
import Navbar from './nav/Navbar.vue';
import Logo from './logo/Logo.vue';

</script>
<template>
    <!-- // Using semantisk HTML -->
    <div class="mainApp">
        <header>
            <Navbar>
                <Logo />
                <ThemeModeBtn />
            </Navbar>
        </header>
        <main>

        </main>
        <footer>

        </footer>
    </div>

</template>

