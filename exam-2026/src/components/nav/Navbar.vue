<script setup lang="ts">
import type { navbarProps } from '../../props';

const {vertical, horizontal} = defineProps<Partial<navbarProps>>();
</script>

<template>
    <nav :vertical :horizontal>
        <slot></slot>
    </nav>
</template>