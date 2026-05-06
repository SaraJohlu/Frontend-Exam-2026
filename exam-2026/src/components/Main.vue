<script setup lang="ts">
import { ref } from 'vue';
import { CircleQuestionMarkIcon } from '@lucide/vue';
import Input from './input/Input.vue';
import Navbar from './navbar/Navbar.vue';
import MainButton from './buttons/MainButton.vue';
import Modal from './modal/Modal.vue';
import Container from './container/Container.vue';

const refModal = ref<InstanceType<typeof Modal> | null>(null);
</script>
<template>
    <div id="firstSide" class="mainApp">
        <!-- Providing the app with semantic HTML. Header, Main and footer is the 3 main sections of the application. -->
        <header>
            <Navbar>
                <template #navbarSlot>
                    <div class="navbarContent">
                        <MainButton
                        aria-label="Information kring applikationen"
                        aria-controls="information-modal"
                        @click="refModal?.openModal()"
                        >
                            <CircleQuestionMarkIcon class="question"/>
                        </MainButton>
                        <div class="navbarLabel">
                            <h1>Implementering av Accessibility</h1>
                            <p>En arbetsprocess för frontend-utvecklare</p>
                        </div>
                    </div>
                </template>
            </Navbar>
            <Modal
            :prevent-esc="true"
            ref="refModal"
            id="information-modal"
            label="Information om projektet" >
                    <p class="modal-text">
                        Denna applikation skapades i samband med min examen 2026, projketet är kopplat till min rapport som jag har skrivit om Accessibility i from av hur en frontend-utvecklare
                        kan ha en god arbetsprocess i implementering av tillgänglighet och även vid refaktorisering av befintliga komponenter.
                        Alla de komponenter i detta projekt är skapat utifrån att efterlikna mitt arbete under min LIA hos Sysarb AB hösten/Vintern 2025 till och med våren 2026.
                        Det är alltså inte gränssnittet i sig (den visuella bilden) utan mer kodexempel för att kunna referera något till min examensrapport.
                    </p>
                    <template #btn-space>
                    <MainButton
                        label="Stäng"
                        class="modalCloseBtn"
                        @click="refModal?.closeModal"
                    />
                    </template>
            </Modal>

        </header>

        <main>
            <Container class="input-container">
                <p>
                    <strong>Syfte:</strong> Att använda input i denna applikation är ett bra sätt att
                    visa hur jag i min arbetsprocess att implementera tillgänglighet gick till.
                </p>
                <div class="todo-container">
                    <h2 class="todo-label">Skriv in todo-task</h2>
                    <Input />
                </div>
                <div class="shop-container">
                    <h2 class="shop-label">Skriv in todo-task</h2>
                    <Input />
                </div>


            </Container>

            <Container>

            </Container>
        </main>

        <footer>
            <p>©Sara Johnson Lundén, 2026</p>
        </footer>
    </div>

</template>

<style lang="scss">
.mainApp {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    row-gap: 2rem;

    width: 100%;
    height: 100%;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    header {
        width: 100%;
        display: flex;
        flex-direction: row;

        .navbarContent{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: end;
            padding: 0.125rem;

            .question {
                padding:0.150rem;
                scale: 1.1;
                cursor: pointer;
            }

            .navbarLabel {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0.150rem;
                h1 {
                    margin: 0;
                    font-size: small;
                }
                p {
                    margin: 0;
                    font-size:small;
                }
            }
        }
        .modal-text {
            margin: 0;
            padding: 0.125rem;
        }
        .modalCloseBtn {
            margin: 0;
            padding: 0.125rem;
            cursor: pointer;
            background-color: rgb(173, 172, 172);
            justify-content: end;
        }
    }

    main {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        height:auto;
        column-gap: 1rem;

        .input-container {

            p {
                font-size: small;
            }

            .todo-container {
                h2 {
                    font-size: medium;
                    font-weight: 400;
                }
            }

            .shop-container {
                h2 {
                    font-size: medium;
                    font-weight: 400;
                }
            }
        }
    }

}
</style>

