<script setup lang="ts">

</script>

<template>
    <section class="container">
        <slot></slot>
    </section>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;

    padding: 1rem;
    border: 1px solid rgb(159, 159, 159);
    border-radius: 5px;
    box-shadow: 0px 3px 3px 1px rgb(176, 176, 176);

}
</style>