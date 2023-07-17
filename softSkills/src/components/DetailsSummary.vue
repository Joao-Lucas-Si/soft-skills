<template>
<div>
    <div class="details">
        <button @click="alternarVisibilidade()"><img :src="icon"></button> 
        <h3 class="titulo">{{ titulo }}</h3>
    </div>
    <div :class="`summary ${(aberto) ? 'aberto' : ''}`">
        <paragrafos :texto="texto" />
    </div>
</div>
</template>

<script lang="ts">
import Paragrafos from './Paragrafos.vue';
export default {
    data() {
        return {
            aberto: false,
        }
    },
    methods: {
        alternarVisibilidade() {
            this.aberto = ! this.aberto
        }
    },
    computed: {
        ativo() {
            return (this.aberto) ? '-90deg' : "0deg"
        }
    },
    props: {
        titulo: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: "/seta-baixo.svg"
        },
    },
    components: { Paragrafos }
}
</script>

<style lang="scss" scoped>

.details {
    display: inline-flex;
    gap: 10px;
    align-items: center;

    button {
        width: 1.25rem;
        height: 1.25rem;
        background-color: transparent;
        border: none;
        outline: none;

        img {
            width: 100%;
            height: 100%; 
            transition: all 0.5s ;
            transform: rotate(v-bind(ativo));
        }
    }
}

.summary {
    margin-left: 5%;
    border-left: solid 5px $cor-destaque;
    max-height: 0px;
    transition: max-height .5s ease-in-out;
    overflow: hidden;

    &.aberto {
        max-height: 1000px;
    }

    .textos {
        padding-left: 40px;
    }
}
</style>