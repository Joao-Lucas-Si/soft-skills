<template>
<div class="pilar">
    <img @click="clicado = !clicado" :src="imagem" alt="">
    <h4>{{ titulo }}</h4>
    <span></span>
    <Modal-info @fechar-modal="clicado = !clicado" :textos="textos" :titulo="titulo"  v-if="clicado" />
</div>
</template>

<script lang="ts">
import ModalInfo from './ModalInfo.vue';


export default {
    data() {
        return {
            clicado: false,
        }
    },
    props: {
        imagem: String,
        textos: String,
        titulo: String,
    },
    components: { ModalInfo }
}
</script>

<style lang="scss">
@keyframes flutuando {
    from {
        top: -40%;
    }
    to {
        top: -45%;
    }
}


.pilar {
    height: 65vh;
    width: 10%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-top: 15%;

    > h4 {
        position: absolute;
        top: -7%;
    }

    > img {
        position: absolute;
        top: -50%;
        width: 110%;
        height: 35%;
        animation: 2s flutuando infinite alternate linear;
        cursor: pointer;

        &::after {
            width: 200%;
            height: 100%;
            background-color: #f00;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    span {
        position: absolute;
        top: 0%;
        width: 120%;
        height: 10%;
        background-color: #fff;
    }
}
</style>