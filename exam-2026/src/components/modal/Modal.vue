<script setup lang="ts">
import { ref } from 'vue';
import type { modalProps } from '../../props';

const {id, ariaLabelledby} = defineProps<Partial<modalProps>>();

/* declare dialog element in DOM tree as refModal */
const refModal = ref<HTMLDialogElement | null>(null);

/* Functions for opening and closing, passing on with the component*/
function openModal() {
    refModal.value?.showModal()
}

function closeModal() {
    refModal.value?.close()
}

defineExpose({openModal, closeModal});

</script>

<template>
    <dialog
    :id="id"
    :aria-labelledby="ariaLabelledby"
    ref="refModal"
    class="informationModal"
    >
        <h2 :id="id"> {{ label }}</h2>
        <div class="slot-wrapper">
            <div class="information">
                <slot></slot>
            </div>
            <slot name="btn-space"></slot>
        </div>
    </dialog>
</template>

<style lang="scss">
.informationModal {
    width: 80%;
    height: 10rem;
    border: none;
    border-radius: 5px;

    h2 {
        margin: 0;
    }

    .slot-wrapper {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        margin: 0;
    }

    &::backdrop {
        background-color: rgb(157, 157, 157);
        opacity: 0.5;
    }
}
</style>