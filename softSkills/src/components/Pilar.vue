<template>
<div class="pilar">
    <span class="parte"></span><span class="parte"></span><span class="parte"></span><span class="parte"></span><span class="parte"></span>
    <span class="triangulo"></span>
    <img @click="clicado = !clicado" :src="imagem" alt="">
    <h4>{{ titulo }}</h4>
    <span class="topo"></span>
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

@keyframes aumentando {
    to {
        transform: scale(2);
    }
}


.pilar {
    height: 65vh;
    width: 10%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15%;

    .triangulo {
        position: absolute;
        top: 10%;
        background-color: #ccc;
        width: 100%;
        height: 5%;
        border-end-start-radius: 20px;
        border-end-end-radius: 20px;
    }

    .parte {
        display: block;
        height: 100%;
        width: 20%;
        background-color: #fff;
    }
    .parte:nth-of-type(even) {
        background-color: #ccc;
    }

    > h4 {
        position: absolute;
        font-size: .9rem;
        top: -7%;
    }

    /* &::after {
        content: " ";
        position: absolute;
        top: -50%;
        transform: translateY(100%);
        width: 100px;
        height: 100px;
        border-radius: 100%;
        animation: aumentando 1s infinite linear;
        border: solid 5px $cor-destaque;
    }
    */

    > img {
        position: absolute;
        top: -50%;
        z-index: 2;
        width: 110%;
        height: 35%;
        animation: 2s flutuando infinite alternate linear;
        cursor: pointer;

       
    }

    .topo {
        position: absolute;
        top: 0%;
        width: 120%;
        height: 10%;
        background-color: #fff;
        border-radius: 10px;
    }
}
</style>