<script setup lang="ts">
import type { inputProps } from '../../props';
import MainButton from '../buttons/MainButton.vue';


const {label, inputId, ariaLabel, req = true, btnText} = defineProps<Partial<inputProps>>();
</script>

<template>
    <form>
        <label
            :for="inputId"
        >
        {{ label }}
        </label>
        <input
            type="text"
            :aria-required="req"
            :id="inputId"
            :aria-label="ariaLabel"
        />

        <MainButton
            type="submit"
        >
           {{ btnText }}
        </MainButton>
    </form>
</template>