<script setup lang="ts">
import { ref } from 'vue';
import type { accordionProps } from '../../props';
import { ChevronDownCircle } from '@lucide/vue';

const { label, date } = defineProps<Partial<accordionProps>>();

const accordionOpen = ref(false);

</script>

<template>
    <details
      id="accrodion-header"
      class="accordion"
      @toggle="accordionOpen = ($event.target as HTMLDetailsElement).open"
    >
      <summary
      :label="label"
      class="accordion-header">
        {{ label }}
        <ChevronDownCircle :class="['accordion-icon', { 'accordion-open' : accordionOpen }]" />
      </summary>
      <div name="accordion-item" class="accordion-item">
        <slot name="accordion-item"></slot>
      </div>
    </details>
</template>

<style lang="scss">

.accordion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 80%;
    padding: 0.5rem;

    border: 0.125rem solid rgb(179, 180, 180);
    border-radius: 5px;

    &[open] .accordion-item {
        animation: slideDown 0.3s ease;
    }

    .accordion-header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        list-style: none;
        padding: 0.125rem;
        font-size: medium;
    }

     &[open] .accordion-header::after{
            rotate: 45%;
    }

    .accordion-icon {
      transition: transform 0.3s ease;
    }

    .accordion-open {
      transform: rotate(180deg);
    }
}
</style>