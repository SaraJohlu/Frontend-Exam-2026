<script setup lang="ts">
import { ref } from 'vue';
import type { accordionProps } from '../../props';
import { ChevronDownCircle } from '@lucide/vue';


const { label } = defineProps<Partial<accordionProps>>();

const accordionOpen = ref(false);

</script>

<template>
    <details
      id="accrodion-header"
      class="accordion"
      :open="accordionOpen"
      @toggle="accordionOpen = ($event.target as HTMLDetailsElement).open"
    >
      <summary
      :label="label"
      class="accordion-header">
        {{ label }}
        <ChevronDownCircle :class="['accordion-icon', { 'accordion-open' : accordionOpen }]" />
      </summary>

      <div class="accordion-container">
        <slot name="accordion-list"></slot>
      </div>
    </details>
</template>

<style lang="scss">

.accordion {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0.5rem;
    border: 0.125rem solid rgb(179, 180, 180);
    border-radius: 5px;

    .accordion-header {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        justify-content: space-between;
        list-style: none;
        padding: 0.125rem;
        font-size: medium;
        cursor: pointer;
    }
    .accordion-icon {
      transition: transform 0.3s ease;
    }

    .accordion-open {
      transform: rotate(180deg);
    }

    .accordion-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
  }
}
</style>