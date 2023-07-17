<template>
<div class="card-info">
    <div class="etapas" >
        <div :class="`etapa ${(etapaAtual == etapa.indice) ? 'atual' : ''}`"  v-for="etapa in etapas" :key="etapa.indice">
            <h3 class="titulo">{{ etapa.titulo }}</h3>
            <slot :name="etapa.indice"></slot>
        </div>
    </div>
    

    <div class="navegacao" >
        <button :class="`botao-etapa ${(etapaAtual == etapa.indice) ? 'atual' : ''}`" 
            v-for="etapa in etapas"
            :key="etapa.indice" 
            @click="mudarEtapa(etapa.indice)"
        >{{ etapa.titulo }}</button>
    </div>
</div>
</template>

<script lang="ts">
interface scriptProp {
    [funcaoNome: string]: Function
}

interface etapa {
    indice: number,
    titulo: string,
    scripts?: scriptProp
}

export default {
    data() {
        return {
            etapaAtual: 1
        }
    },
    methods: {
        mudarEtapa(etapa: number) {
            this.etapaAtual = etapa
        }
    },
    props: {
        etapas: {
            type: Object as ()=> etapa[],
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>

.navegacao {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-info {
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-background-mute);
    padding: 4%;
    border: $cor-destaque 10px outset;
    border-radius: 20px;
    padding-bottom: 0%;
    max-height: 100vh;

}

.botao-etapa {
    background-color: var(--color-text);
    color: #000;
    padding: 20px 5px;
    outline: none;
    cursor: pointer;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    &.atual {
        background-color: $cor-destaque;
    }
}

.etapa {
    display: none;

    &.atual {
        display: block;
    }
}
</style>