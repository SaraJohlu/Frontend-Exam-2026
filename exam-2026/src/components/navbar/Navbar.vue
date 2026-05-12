<script setup lang="ts">

</script>

<template>
    <nav class="navbar">
        <a href="#firstSide">
            <img
               src="./../../assets/logotype.png"
               alt="Logotype image working as an anchor link"
               class="logo"
            />
            <span class="tooltip-logo" aria-hidden="true">Start</span>
        </a>
        <slot name="navbarSlot"></slot>
    </nav>
</template>

<style lang="scss">
.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    column-gap: 1rem;

    width: 100%;
    background: linear-gradient(152deg, rgb(110, 0, 110), rgb(138, 215, 215));
    border-radius: 5px;
    box-shadow: 0px 2px 5px 2px rgb(51, 51, 51);

    a {
        position: relative;
        padding: 0.150rem;

        .logo {
            width: 100px;
            border-radius: 50%;
            box-shadow: 0px 2px 5px 2px rgb(51, 51, 51);
        }

            .tooltip-logo {
                position: absolute;
                right: -3.5rem;
                transform: translateX(-25%);
                white-space: nowrap;
                padding: 0.125rem;
                color: white;
                font-size: smaller;
                opacity: 0;
                transition: opacity 0.2s;
            }

            &:focus .tooltip-logo {
                opacity: 1;
                border: 0.125rem solid white;
                border-radius: 5px;
            }
    }
}

</style>