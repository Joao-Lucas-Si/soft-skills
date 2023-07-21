<script lang="ts">

export default {
    props: {
        texto: String,
        habilitado: {
            type:Boolean,
            default: true,
        }
    }
}
</script>

<template>
<button :class="(!habilitado) ? 'desabilitado': ''" @click="(habilitado) ? $emit('clicado') : ''">{{texto}}</button>
</template>


<style lang="scss" scoped>
button {
    background-color: $cor-destaque;
    padding: 10px 20px;
    border: solid #000 3px;
    border-radius: 15px;

    &.desabilitado {
        background-color: #c0c0c0;
    }
}


</style>