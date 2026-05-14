<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { CircleQuestionMarkIcon, FileXCorner, FilePlusCorner } from '@lucide/vue';
import Input from './input/Input.vue';
import Navbar from './navbar/Navbar.vue';
import MainButton from './buttons/MainButton.vue';
import Modal from './modal/Modal.vue';
import Container from './container/Container.vue';
import Accordion from './accordion/Accordion.vue';
import type { todoItemProps } from '../props';

const refModal = ref<InstanceType<typeof Modal> | null>(null);

const todaysItems = ref<todoItemProps[]>([]);
const todoItems = ref<todoItemProps[]>([]);
const shopItems = ref<todoItemProps[]>([]);

function addTodayItem(item: string) {
    todaysItems.value.push({text: item, done: false});
    localStorage.setItem('today-list', JSON.stringify(todaysItems.value));
}

function addTodoItem(item: string) {
    todoItems.value.push({text: item, done: false});
    localStorage.setItem('todo-list', JSON.stringify(todoItems.value));
}

function addShopItem(item: string) {
    shopItems.value.push({text: item, done: false});
    localStorage.setItem('shop-list', JSON.stringify(shopItems.value));
}

function removeTodayItem(index: number) {
    todaysItems.value.splice(index, 1);
    localStorage.setItem('today-list', JSON.stringify(todaysItems.value));
}

function removeTodoItem(index: number) {
    todoItems.value.splice(index, 1);
    localStorage.setItem('todo-list', JSON.stringify(todoItems.value));
}

function removeShopItem(index: number) {
    shopItems.value.splice(index, 1);
    localStorage.setItem('shop-list', JSON.stringify(shopItems.value));
}

const currentDate = ref(new Date());
let interval: number;

onMounted(() => {
    const storedToday = localStorage.getItem('today-list');
    if(storedToday) todaysItems.value = JSON.parse(storedToday);

    const storedTodo = localStorage.getItem('todo-list');
    if(storedTodo) todoItems.value = JSON.parse(storedTodo);

    const storedShop = localStorage.getItem('shop-list');
    if(storedShop) shopItems.value = JSON.parse(storedShop);

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
                        @click="refModal?.closeModal()"
                    />
                    </template>
            </Modal>

        </header>

        <main>
            <section class="main-information">
                <h2>Applikationens syfte</h2>
                <p>För att visa upp en god tillgänglighet. Och hur man som frontend utvecklare kan utveckla applikationer med bra tillgänglighet och med en bra arbetsprocess</p>
            </section>

            <Container
                direction="column"
                class="list-container"
            >

                <Container
                    class="content-list-container"
                >
                    <Input
                        label="Lägg till uppgift/mål för dagen"
                        input-placeholder="Skriv in text här"
                        aria-label="Lägg till i din lista"
                        class="input-field"
                        @add-item="addTodayItem"
                    >
                        <template #input-btn>
                            <FilePlusCorner />
                        </template>
                    </Input>


                    <Accordion
                        :label="`Dagens (${formatDate}) mål:`"
                        class="accordion"
                    >
                        <template #accordion-list>
                            <ul v-if="todaysItems.length > 0">
                                <li
                                    v-for="(item, index) in todaysItems"
                                    :key="index"
                                >
                                    <input
                                        type="checkbox"
                                        :id="`item-${index}`"
                                        v-model="item.done"
                                        aria-label="Avklarad"
                                    />
                                    <label :for="`item-${index}`"> {{ item.text }} </label>
                                    <MainButton @click="removeTodayItem(index)" aria-label="Ta bort">
                                        <FileXCorner />
                                    </MainButton>
                                </li>
                            </ul>
                            <p v-else>Du har inga uppgifter för dagen</p>
                        </template>
                    </Accordion>
                </Container>

                <Container
                    class="content-list-container"
                >
                    <Input
                        label="Lägg till uppgift/mål"
                        input-placeholder="Skriv in text här"
                        aria-label="Lägg till i din lista"
                        @add-item="addTodoItem"
                    >
                        <template #input-btn>
                            <FilePlusCorner />
                        </template>
                    </Input>


                    <Accordion
                        label="Min to-do lista"
                        class="accordion"
                    >
                        <template #accordion-list>
                            <ul v-if="todoItems.length > 0">
                                <li
                                    v-for="(item, index) in todoItems"
                                    :key="index"
                                >
                                    <input
                                        type="checkbox"
                                        :id="`item-${index}`"
                                        v-model="item.done"
                                        aria-label="Avklarad"
                                    />
                                    <label :for="`item-${index}`"> {{ item.text }} </label>

                                    <MainButton @click="removeTodoItem(index)" aria-label="Ta bort">
                                        <FileXCorner />
                                    </MainButton>
                                    </li>
                                </ul>
                            <p v-else>Du har inga uppgifter för dagen</p>
                        </template>
                    </Accordion>
                </Container>

                <Container
                    class="content-list-container"
                >
                    <Input
                        label="Lägg till vara"
                        input-placeholder="Skriv in text här"
                        aria-label="Lägg till i din lista"
                        @add-item="addShopItem"
                    >
                        <template #input-btn>
                            <FilePlusCorner />
                        </template>
                    </Input>


                    <Accordion
                        label="Inköpslista:"
                    >
                        <template #accordion-list>
                            <ul v-if="shopItems.length > 0">
                                <li
                                    v-for="(item, index) in shopItems"
                                    :key="index"
                                >
                                    <input
                                        type="checkbox"
                                        :id="`item-${index}`"
                                        v-model="item.done"
                                        aria-label="Avklarad"
                                    />
                                    <label :for="`item-${index}`"> {{ item.text }} </label>
                                    <MainButton
                                        @click="removeShopItem(index)"
                                        aria-label="Ta bort">
                                        <FileXCorner />
                                    </MainButton>
                                </li>
                            </ul>
                            <p v-else>Du har inga uppgifter för dagen</p>
                        </template>
                    </Accordion>
                </Container>
            </Container>
        </main>

        <footer>
            <p>©Sara Johnson Lundén, 2026</p>
            <div class="contact-information">
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/sara-johnson-lundén-6a6948325"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Besök min LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/SaraJohlu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Besök min Github
                        </a>
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
    row-gap: 3rem;

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

        .main-information {
            width: 100%;
            text-align: center;
            margin-bottom: 2rem;

            h2 {
                margin:0;
                padding: 0;
            }

            p {
                margin: 0;
                padding: 0;
            }
        }

        .list-container {
            position: relative;
            border-radius: 5px;
            padding: 0.5rem;
            background-color: white;
            row-gap: 2rem;
            width: 95%;

            &::after {
                position: absolute;
                content: '';
                inset: 0;
                border-radius: 5px;
                border: 0.125rem solid rgba(0, 0, 0, 0.462);
                background: linear-gradient(152deg, rgb(110, 0, 110), rgb(138, 215, 215));;
                filter: blur(15px);
                z-index: -1;
                transform: translateY(5px);
                opacity: 1;
            }

            .content-list-container {
                border: none;
                box-shadow: none;
                display: flex;
                align-items: flex-start;
            }

            .input-wrapper {
                display: flex;
                flex-direction: row;
                border-radius: 5px;

                input {
                    position: relative;
                    border:0.125rem solid rgb(158, 157, 157);
                    border-radius: 5px;
                    padding: 0.150rem;
                }

            }


            ul {
                padding: 0.125rem;
                margin: 0;
                width: 100%;

                li {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.125rem 0.5rem;
                    list-style:none;
                    width: 100%;
                }
            }
        }
    }
}

    footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
            margin: 0;
        }
        .contact-information {
            list-style: none;
            width: 100%;


            ul {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 100%;
                list-style: none;
                text-align: center;
                padding: 0;

                li {
                    width: 22%;
                    text-align: center;
                    font-size: smaller;
                }

                a {
                    color: black;
                    text-decoration: none;

                    &:hover  {
                    text-decoration: underline;
                    font-size: small;
                    }
                }

            }

        }
    }

</style>

