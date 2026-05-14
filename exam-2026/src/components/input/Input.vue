<script setup lang="ts">
import type { inputProps } from '../../props';
import MainButton from '../buttons/MainButton.vue';
import {ref} from 'vue'


const {label, inputId, ariaLabel, req = true, inputPlaceholder} = defineProps<Partial<inputProps>>();

const emit = defineEmits<{ addItem: [item: string] }>();
const inputValue = ref('');

function handleInputSubmit() {
    if(inputValue.value.trim() === '') return;
    emit('addItem', inputValue.value);
    inputValue.value = '';
}
</script>

<template>
    <form @submit.prevent="handleInputSubmit">
        <label
            :for="inputId"
        >
        {{ label }}
        </label>

        <div class="input-wrapper">
            <input
                type="text"
                v-model="inputValue"
                :placeholder="inputPlaceholder"
                :aria-required="req"
                :id="inputId"
            />

            <MainButton
                type="submit"
                :aria-label="ariaLabel"
            >
                <slot name="input-btn"></slot>
            </MainButton>
        </div>
    </form>
</template>

<style lang="scss">
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    width: 60%;

    label {
        font-size: 15px;
        font-weight: 450;
        margin-bottom: 0.5rem;
        justify-self: flex-start;
    }
}
</style>