<template>
<div :class="`noticia ${(posicao == noticiaAtual) ? ' atual': '' }`">
    <a class="fundo" :href="url">
        <img :src="img" alt="">
    </a>
    <div class="canto">
        <a :href="fonteUrl">
            <img :src="fonteLogo" alt="">
        </a>
        <h2>{{ titulo }}</h2>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
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
    }, 
    computed: {
        cssVars() {
            return {
                '--noticia-cor': this.cor
            }
        }
    }
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
        
        align-items: center;
        background-color: v-bind(cor);

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