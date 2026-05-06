<script setup lang="ts">
import { ref } from 'vue';
import type { modalProps } from '../../props';

const {id, ariaLabelledby, preventEsc = false} = defineProps<Partial<modalProps>>();

/* declare dialog element in DOM tree as refModal */
const refModal = ref<HTMLDialogElement | null>(null);

function disableEsc (event: KeyboardEvent) {
    if (event.key === 'Escape') {
        event.preventDefault();
    }
}
/* Functions for opening and closing, passing on with the component*/
function openModal() {
    refModal.value?.showModal();
    if (preventEsc) {
        refModal.value?.addEventListener('keydown', disableEsc);
    }
}

function closeModal() {
    refModal.value?.close();
    if(preventEsc) {
        refModal.value?.removeEventListener('keydown', disableEsc);
    }
}

defineExpose({openModal, closeModal});

</script>

<template>
    <dialog
    :id="id"
    :aria-labelledby="ariaLabelledby"
    closedby="any"
    ref="refModal"
    preventEsc
    class="informationModal"
    >
        <h2 :id="id"> {{ label }} </h2>
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
        font-size: large;
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