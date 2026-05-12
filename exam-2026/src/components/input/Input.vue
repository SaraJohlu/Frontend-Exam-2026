<script setup lang="ts">
import type { inputProps } from '../../props';
import MainButton from '../buttons/MainButton.vue';


const {label, inputId, ariaLabel, req = true, btnText, inputPlaceholder} = defineProps<Partial<inputProps>>();
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
            :placeholder="inputPlaceholder"
            :aria-required="req"
            :id="inputId"
        />

        <MainButton
            type="submit"
            :aria-label="ariaLabel"

        >
            {{ btnText }}
        </MainButton>
    </form>
</template>