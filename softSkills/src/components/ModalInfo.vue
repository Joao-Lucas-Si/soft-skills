<template>
<div >
    <div class="modal">
        <h2 class="titulo">{{ titulo }}</h2>
        <p>{{ textos }}</p>
        <botao-icon @clicar="$emit('fecharModal')" icon="/Vuejs.svg" texto="fechar" />
    </div>
    <span class="fundo"></span>
</div>
</template>

<script lang="ts">
import BotaoIcon from './botaoIcon.vue';

export default {
    emits: ["fecharModal"],
    props: {
        titulo: String,
        textos: String,
    },
    components: { BotaoIcon }
}
</script>

<style lang="scss" scoped>
.fundo {
    width: 100vw;
    height: 100vh;
    background-color: #121212;
    position: fixed;
    top: 0%;
    left: 0%;
    opacity: 0.5;
    z-index: 4;
}

.modal {
    position: fixed;
    width: 70vw;
    min-height: 70vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #232323;
    z-index: 5;
    padding-block: 2.5%;
    padding-inline: 5%;
    border-radius: 15px;
    animation: 1s aparecer;
    box-shadow: 0px 0px 50px $cor-destaque;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

@keyframes aparecer {
    from {
        top: 150%;
    }

    to {
        top: 50%;
    }
}
</style>