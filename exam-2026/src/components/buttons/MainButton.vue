<script setup lang="ts">
import type { btnProps } from '../../props';

const {label, ariaLabel, ariaDescribed, ariaDisabled, ariaExpanded, ariaLabelBy, ariaControls, gap="4", variant, type } = defineProps<Partial<btnProps>>();

</script>

<template>
    <button
    :label="label"
    :type="type"
    :gap
    :variant
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelBy"
    :aria-describedby="ariaDescribed"
    :aria-controls="ariaControls"
    :aria-expanded="ariaExpanded"
    :aria-disabled="ariaDisabled"
    class="btn"
    >
        {{ label }}
        <slot>
        </slot>
    </button>
</template>

<style lang="scss">
.btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 5px;

    h2 {
        font-size: small;
        margin: 0;
        padding: 0.125rem;
    }
}
</style>
