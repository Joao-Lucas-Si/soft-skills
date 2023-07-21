<template>
<div>
    <div class="in">
        <input v-model="valor"  @input="validar()" name="" id="email">
        <label for="email">email</label>
    </div>
    <p class="mensagem">{{ mensagemErro }}</p>
</div>
</template>

<script lang="ts">
import { useNomeStore } from "../stores/nome"
export default {
    data() {
        return {
            valido: false,
            valor: "",
            mensagemErro: "" 
        }
    },
    
    methods: {
        validar(): void{
            const nomeStore = useNomeStore()
            const inicio = `senhor(a)${(nomeStore.nome != "") ? " " + nomeStore.nome.trim() : "" }, por favor, `
            let mensagem

            const invalidos: string[] = [
                "!",
                "?",
                "*",
                "$",
                "#",
                "[",
                "]",
                "{",
                "}",
                "(",
                ")",
                "/",
                "\\",
                "|",
                "+",
                "%",
                "º",
                "ª",
                "´",
                "~",
                "^",
                '"',
                "'"
            ]
            let invalidoEncontrado = ""
            

            for (const invalido of invalidos) {
                if (this.valor.includes(invalido)) {
                invalidoEncontrado = invalido
                break;
                }
                continue
            }

            if (this.valor == "") {
                mensagem = "informe seu email"
            }

            else if (this.valor.trim() == "") {
                mensagem = "preencha corretamente seu email, espaços em brancos não são validos"
            }

            else if (this.valor.indexOf("@") == -1) {
                mensagem = "coloque o arroba"
            }

            else if (this.valor.indexOf("@") == 0) {
                mensagem = "informe o nome de seu email"
            }

            else if (this.valor.indexOf("@") == this.valor.length - 1) {
                mensagem = "especifique o seu domínio de email"
            }

            else if (this.valor.indexOf("@.") != -1) {
                mensagem = "escreva corretamente o domínio de seu email"
            }

            else if (this.valor.indexOf(".") == this.valor.length - 1) {
                mensagem = "termine de especificar o seu domínio de email"
            }

            else if (invalidoEncontrado != "") {
                mensagem = "remova o caractere invalido, " + invalidoEncontrado
            }

            else {
                this.mensagemErro = "valido"
                this.valido  = true
                
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