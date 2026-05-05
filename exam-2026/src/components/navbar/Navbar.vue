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

    width: 100%;
    background: linear-gradient(152deg, rgb(110, 0, 110), rgb(138, 215, 215));
    border-radius: 5px;
    box-shadow: 0px 2px 5px 2px rgb(51, 51, 51);

    a {
        padding: 0.150rem;

        .logo {
            width: 125px;
            border-radius: 50%;
            box-shadow: 0px 2px 5px 2px rgb(51, 51, 51);
        }
    }
}

</style>