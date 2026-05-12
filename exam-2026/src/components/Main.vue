<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { CircleQuestionMarkIcon } from '@lucide/vue';
import Input from './input/Input.vue';
import Navbar from './navbar/Navbar.vue';
import MainButton from './buttons/MainButton.vue';
import Modal from './modal/Modal.vue';
import Container from './container/Container.vue';
import Accordion from './accordion/Accordion.vue';
import AccordionItem from './accordion/AccordionItem.vue';


const refModal = ref<InstanceType<typeof Modal> | null>(null);
const items = ref<string[]>([]);

function addItem(item: string) {
    items.value.push(item)
    localStorage.setItem('todo-list', JSON.stringify(items.value));
}

const currentDate = ref(new Date());
let interval: number;

onMounted(() => {
    interval = setInterval(() => {
        currentDate.value = new Date();
    }, 1000)
});

onUnmounted(() => {
    clearInterval(interval);
});

const formatDate = computed(() =>
    currentDate.value.toLocaleDateString('sv-SE')
)
</script>
<template>
    <div id="first-side" class="main-app">
        <!-- Providing the app with semantic HTML. Header, Main and footer is the 3 main sections of the application. -->
        <header>
            <Navbar>
                <template #navbarSlot>
                    <div class="navbar-content">
                        <div class="navbar-btn-wrapper">
                            <MainButton
                            aria-label="Information om applikationen"
                            aria-controls="information-modal"
                            @click="refModal?.openModal()"
                            >
                                <CircleQuestionMarkIcon class="question"/>
                            </MainButton>
                            <span class="tooltip" aria-hidden="true">Information om applikationen</span>
                        </div>
                        <div class="navbar-label">
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
                        class="modal-close-btn"
                        @click="refModal?.closeModal"
                    />
                    </template>
            </Modal>

        </header>

        <main>
            <section>
                <h2>Applikationens syfte</h2>
                <p>För att visa upp en god tillgänglighet</p>
            </section>

            <Container
                direction="row"
            >
                <Input
                    label="Lägg till task för dagen"
                    input-placeholder="Skriv in text här"
                />


                <Accordion
                    :label="`Att göra idag ${formatDate}:`"
                    class="accordion"
                >
                    <template #accordion-item>
                        <AccordionItem>
                            <ul v-if="items.length > 0">
                                <li
                                    v-for="item in items"
                                    :key="item"
                                    class="list"
                                >
                                    {{ item }}
                                </li>
                            </ul>
                            <p v-else>Du har inga uppgifter för dagen</p>
                        </AccordionItem>
                    </template>
                </Accordion>
            </Container>

            <Container>
                <div class="shop-container">
                    <h2 class="shop-label">Skriv in todo-task</h2>
                    <Input />
                </div>


            <div class="list-container">


                <Accordion label="Att göra">
                    <template #accordion-item>
                        <AccordionItem>
                            <p>Din todo lista</p>
                        </AccordionItem>
                    </template>
                </Accordion>
            </div>

            </Container>

            <Container>

            </Container>
        </main>

        <footer>
            <p>©Sara Johnson Lundén, 2026</p>
            <div class="contact-information">
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/sara-johnson-lund%C3%A9n-6a6948325/"
                            target="_blank"
                            rel="noopener norefferer"
                        >
                            Besök min LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>

</template>

<style lang="scss">
.main-app {
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

        .navbar-content{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: end;
            padding: 0.125rem;

            .navbar-btn-wrapper {
                position: relative;
//Tooltip, small text popup that will accure during focus navigation with tab.
                .tooltip {
                    position: absolute;
                    bottom: 0.5rem;
                    right: 0.125rem;
                    transform: translateX(-25%);
                    white-space: nowrap;
                    padding: 0.125rem;
                    color: white;
                    border: 0.125rem solid white;
                    border-radius: 5px;
                    font-size: smaller;
                    opacity: 0;
                    transition: opacity 0.2s;
                }

                &:has(button:focus) .tooltip {
                    opacity: 1;
                }

                &:focus-visible
                .question {
                    padding:0.150rem;
                    scale: 1.1;
                    cursor: pointer;
                }
            }

            .navbar-label {
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
        .modal-close-btn {
            margin: 0;
            padding: 0.125rem;
            cursor: pointer;
            background-color: rgb(173, 172, 172);
            justify-content: end;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height:auto;
        row-gap: 1rem;
        padding: 0.125rem;

        .input-section {
                h2 {
                    font-size: 400;
                }
            .list {

            }
        }

        .accordion-header {
            font-size: medium;
            font-weight: 500;
        }
    }

    footer{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .contact-information {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            list-style: none;
            width: 100%;

            ul {
                list-style: none;
                text-align: center;
                padding: 0;

                a {
                    color: black;
                }
            }
        }
    }

}
</style>

