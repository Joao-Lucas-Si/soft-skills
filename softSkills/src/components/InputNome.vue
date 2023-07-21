<template>
<div>
    <div class="in">
        <input v-model="valor" @input="validar()" name="" id="nome">
        <label for="nome">nome</label>
    </div>
    <p class="mensagem">{{ mensagemErro }}</p>
</div>
</template>

<script lang="ts">
import { useNomeStore } from '@/stores/nome'

export default {
    data() {
        return {
            valido: false,
            valor: "",
            mensagemErro: "" 
        }
    },
    
    methods: {
        validar(): void {
            const inicio = `senhor(a), por favor, `
            let mensagem

            if (this.valor == "") {
                mensagem = "informe seu nome"
            }

            else if (this.valor.trim() == "") {
                mensagem = "preencha corretamente seu nome, espaços em bancos não são validos"
            }

            else if (isNaN(parseFloat(this.valor)) == false ) {
                mensagem = "digite um nome valido, não números"
            }

            else if (this.valor.length < 3) {
                mensagem = "digite um nome com no mínimo 3 letras"
            }

            else {
                const nomeStore = useNomeStore()
                this.mensagemErro = "valido"
                this.valido = true
                nomeStore.nome = this.valor            
            }

            if (this.mensagemErro != "valido") {
                this.mensagemErro = inicio + mensagem
                this.valido = false
            }
            
        },
    },
    
    watch: {
        valido() {
            this.$emit("validado", this.valido)
        } 
    }
    
}
</script>

<style lang="scss" scoped>
</style>