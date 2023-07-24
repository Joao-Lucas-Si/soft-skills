<template>
<div :class="`noticia ${ direcao } ${(posicao == noticiaAtual) ? ' atual': '' }`">
    <a target="_blank" class="fundo" :href="url">
        <img :src="img" alt="">
    </a>
    <div class="canto">
        <a target="_blank" :href="fonteUrl">
            <img :src="fonteLogo" alt="">
        </a>
        <h2>{{ titulo }}</h2>
    </div>
</div>
</template>

<script lang="ts">
export default {
    props: {
        url: String,
        img: String,
        posicao: Number,
        fonteUrl: String,
        fonteLogo: String,
        noticiaAtual: Number,
        titulo: String,
        cor: String,
        direcao: String
    }, 
    
}
</script>

<style lang="scss" scoped>
.noticia {
    width: 100%;
    height: 70vh;
    position: relative;
    overflow: hidden;
    width: 0;
    left: 200%;
    display: flex;
    transition: left 1s ;

    &.atual { 
        width:100%;
        left: 0%;
    }

    > .fundo {
        width: 100%;
        height: 100%;

        > img {
            width: 100%;
            height: 100%;
        }
    }

    > .canto {
        display: flex;
        position: absolute;
        left: 0%;
        bottom: 0%;
        height: 30%;
        width: 70%;
        gap: 20px;
        border-start-end-radius: 700px;
        align-items: center;
        background-color: v-bind(cor);
        padding-right: 10%;

        a {
            height: 100%;
        }

        h2 {
            text-align: center;
        }

        img {
            height: 100%;
            width: 15rem;
        }
    }
}
</style>