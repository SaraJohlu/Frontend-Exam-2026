<script setup lang="ts">

</script>

<template>
    <section
        class="accordion-item-container"
    >
        <slot></slot>

    </section>
</template>

<style lang="scss">
    .accordion-item-container {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
</style>