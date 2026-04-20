<script setup lang="ts">

</script>

<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style>
.btn{
    display: grid;
    grid-template-columns:auto auto auto;
    column-gap: 5rem;

    padding: 0.5rem;
}

</style>