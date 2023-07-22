<script lang="ts">

import IconValido from './icons/IconValido.vue';
export default {
    data() {
        return {
            aberto: false, 
            valor: "",
        }
    },
    props: {
        titulo: {
            type: String,
            required: true
        },
        nome: {
            type: String,
            required: true
        },
        radios: {
            type: Array<String>,
            required: true
        },
        indice: Number,
    },
    methods: {
        id(radio: String): string {
            return radio.replaceAll(" ", "-");
        },
        abrirRadios() {
            this.aberto = !this.aberto;
        },
    },
    computed: {
        iconEstado() {
            return (this.valor != "") ? true : undefined  
        } ,
        corValido() {
            return (this.valor != "" ) ? '#80FF80': "#c0c0c0"
        }
    },
    watch: {
        valor() {
            this.$emit("validado", this.valor != "", this.indice )
        }
    },
    components: { IconValido }
}
</script>

<template>
<div class="radios">
    <h4 @click="abrirRadios()">{{ titulo }} <IconValido style="height: 100%; width: 3ch;" :estado="iconEstado"/> </h4>
    <div :class="`lista-radios ${aberto ?  'aberto': '' }`">
        <label class="in" :for="id(radio)" v-for="radio in radios"><input :value="radio" v-model="valor" type="radio" :name="nome" :id="id(radio)"> {{ radio }}</label>
    </div>
</div>
</template>

<style lang="scss" scoped>
.radios {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    width: 70%;
    border: solid 3px v-bind(corValido);
}

h4 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: normal;
    background-color: v-bind(corValido);
    color: #000;
}

.lista-radios {
    
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    background-color: $bg-cor2;

    height: 0;

    &.aberto {
        padding: 10px;
        height: 100%;
    }
}

.in {
    display: flex;
    align-items: center;
    gap: 5px;
}

input {
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border: solid 2px $cor-destaque;
    border-radius: 100%;
    text-align: center;
    transition: background-color .25s ease-in-out;

    &:checked {
        background-color: $cor-destaque;
    }
}

</style>