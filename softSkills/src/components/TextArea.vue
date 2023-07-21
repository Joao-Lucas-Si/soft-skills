<template>
<div>
    <div class="in">
        <textarea v-model="valor" @input="validar()" name="" id="mensagem"></textarea>
        <label for="mensagem">mensagem</label>
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
            const nomeStore = useNomeStore()
            const inicio = `senhor(a)${(nomeStore.nome != "") ? " " + nomeStore.nome.trim() : "" }, por favor, `
            let mensagem

            if (this.valor == "") {
                mensagem = "informe sua mensagem"
            }

            else if (this.valor.trim() == "") {
                mensagem = "preencha corretamente seu nome, espaços em brancos não são validos"
            }

            else if (this.valor.length < 5) {
                mensagem = "sua mensagem deve ter no mínimo 5 caracteres"
            }

            else {
                this.mensagemErro = "valido"
                this.valido = true
            }

            if (mensagem != "valido") {
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