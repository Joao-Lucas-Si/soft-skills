<script lang="ts">

export default {
    props: {
        texto: String,
        habilitado: {
            type:Boolean,
            default: true,
        },
        tipo: {
            type: String,
            default: "button",
            validator(valor: string): boolean {
                const tipos = [
                    "button",
                    "submit",
                    "reset"
                ]
                if (tipos.includes(valor) ) {
                    return true
                }
                
                return false
            }
        }
    },
    

}
</script>

<template>
<button :type="tipo" :class="(!habilitado) ? 'desabilitado': ''" @click="(habilitado) ? $emit('clicado') : ''">{{texto}}</button>
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