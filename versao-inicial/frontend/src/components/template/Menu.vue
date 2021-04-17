<template>
    <!-- Por ter mapeado em mapState ismenuvisible fica disponivel para uso aqui. -->
    <aside class="menu" v-show="isMenuVisible" ></aside>
</template>

<script>

// responsavel por mapear um atributo da store dentro do meu componente.
import { mapState } from 'vuex'


export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible'])
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526,#414343);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>