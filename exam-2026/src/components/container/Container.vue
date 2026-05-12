<script setup lang="ts">
import type { containerProps } from '../../props';
import { computed } from 'vue';

const { direction = 'row' } = defineProps<containerProps>();
const _direction = computed(() => direction === 'column' ? 'container-column' : 'container-row');

</script>

<template>
    <section
        :class="['container', _direction]"
    >
        <slot></slot>
    </section>
</template>

<style>
.container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
    column-gap: 1rem;

    padding: 0.125rem;
    border: 1px solid rgb(159, 159, 159);
    border-radius: 5px;
    box-shadow: 0px 3px 3px 1px rgb(176, 176, 176);
}
.container-row {
    flex-direction: row;
    padding: 0.5rem;
}

.container-column {
    flex-direction: column;
    padding: 0.5rem;
}
</style>