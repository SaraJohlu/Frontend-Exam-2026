<script setup lang="ts">
import type { btnProps } from '../../props';

const {label, ariaLabel, ariaDescribed, ariaDisabled, ariaExpanded, ariaLabelBy, gap="4", variant } = defineProps<Partial<btnProps>>();

</script>

<template>
    <button
    :label="label"
    :gap
    :variant
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelBy"
    :aria-describedby="ariaDescribed"
    :aria-expanded="ariaExpanded"
    :aria-disabled="ariaDisabled"
    class="btn"
    >
        <slot></slot>
    </button>
</template>

<style lang="scss">
@use './../../styles/component/Btn'
</style>
