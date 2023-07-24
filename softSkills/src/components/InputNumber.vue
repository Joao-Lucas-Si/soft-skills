<script lang="ts">
export default {
    data() {
        return {
            valor: this.min,
            
        }
    },
    props: {
        titulo: String,
        max: Number,
        min: Number,
    },
    methods: {
        inclementar() {
            if (this.valor != undefined) {
                this.valor +=  (this.valor != this.max) ? 1: 0 
            }
        },
        declementar() {
            if (this.valor != undefined) {
                this.valor -=  (this.valor != this.max) ? 1: 0 
            }
            
        }, 
        validar() {
            if (this.max != undefined && this.valor !=undefined && this.valor > this.max) {
                this.valor = this.max
            }
            else if (this.min != undefined && this.valor !=undefined && this.valor < this.min) {
                this.valor = this.min
            }
        }
    },
    watch: {
        valor() {
            this.$emit("mudou", this.valor)
        }
    }
    
}
</script>

<template>
<div class="input-number">
    <label class="titulo" for="id(titulo)">{{ titulo }}</label>
    <div class="input">
        <button @click="declementar">-</button>
        <input @blur="validar()" :min="min" :max="max" id="id(titulo)" v-model="valor" type="number" >
        <button @click="inclementar">+</button>
    </div>
</div>
</template>

<style lang="scss" scoped>
label {
    display: block;
}

.input {
    display: grid;
    grid-template-columns: 20% 60% 20% ;
}
.input-number {
    max-width: 20vw;
    background-color: $bg-cor3;
    border: double 15px $cor-destaque;
    border-radius: 15px;
    overflow: hidden;
}


input, button {
    background-color: transparent;
    display: inline-block;
    color: $cor-destaque;
    border: none;
    border-top: solid 5px $cor-destaque;
    font-size: 2rem;
    outline: none;
    text-align: center;
    padding: 10px;
    height: 100%;
}

input {
    border-inline: solid 5px $cor-destaque;
}
</style>