<script lang="ts">
interface etapa {
    titulo: string,
    texto: string

}



import InputNumber from './InputNumber.vue';
import Paragrafos from './Paragrafos.vue';


export default {
    data() {
        return {
            etapaAtual: 0,        };
    },
    props: {
        etapas: {
            type: Object as ()=> etapa[],
            required: true,
        }
    },
    methods: {
       
    },
    components: { InputNumber, Paragrafos }
}
</script>
<template>
<div class="card-etapa">
    <div class="etapas">
        <div class="tapa" v-for="etapa in etapas.length" :class="`etapa ${(etapa == etapaAtual) ? 'atual': ''} `">
            <h3 class="titulo">{{ etapas[etapa - 1].titulo }}</h3>
            <Paragrafos :texto="etapas[etapa - 1].texto" />
        </div>
    </div>
    <InputNumber @mudou="(etapa:number)=> etapaAtual = etapa" :min="0" :max="etapas.length"  titulo="etapa atual" />
</div>
</template>
<style lang="scss">
.card-etapa {
    width: 80%;
    margin: auto;
    background-color: $bg-cor2;
    border: double 15px $cor-destaque;
    position: relative;
    padding: 2rem;
    padding-bottom: 5rem;
    border-radius: 15px;
    margin-bottom: 4rem;
}

.etapa {
    display: none;

    &.atual {
        display: block;
    }
}

.input-number {
    position: absolute;
    left: 50%;
    bottom: -4.2rem;
    transform: translate(-50%)
}
</style>