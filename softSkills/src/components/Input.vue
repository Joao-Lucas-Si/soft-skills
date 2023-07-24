

<script lang="ts">
import IconValido from './icons/IconValido.vue'
import { useNomeStore } from '@/stores/nome'

export default {
    props: {
        tipo: String,
        nome: String ,
        indice: Number
    },
    data() {
        return {
            valido: false,
            valor: "",
            mensagemErro: "",
            aberto: false,
            
        };
    },
    methods: {
        abrirInput() {
            this.aberto = !this.aberto;
        },
        validar() {
            (this.nome == "nome") ? this.validarNome() : this.validarEmail()
        },
        validarEmail(): void{
            const nomeStore = useNomeStore()
            const inicio = `senhor(a)${(nomeStore.nome != "") ? " " + nomeStore.nome.trim() : "" }, por favor, `
            let mensagem = ""

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
                this.mensagemErro = "válido"
                this.valido  = true
                
            }

            if (mensagem != "") {
                this.mensagemErro = inicio + mensagem
                this.valido = false
            }
        },
        validarNome(): void {
            const inicio = `senhor(a), por favor, `;
            let mensagem = "";
            if (this.valor == "") {
                mensagem = "informe seu nome";
            }
            else if (this.valor.trim() == "") {
                mensagem = "preencha corretamente seu nome, espaços em bancos não são validos";
            }
            else if (isNaN(parseFloat(this.valor)) == false) {
                mensagem = "digite um nome valido, não números";
            }
            else if (this.valor.length < 3) {
                mensagem = "digite um nome com no mínimo 3 letras";
            }
            else {
                const nomeStore = useNomeStore();
                this.mensagemErro = "válido";
                this.valido = true;
                nomeStore.nome = this.valor;
            }
            if (mensagem != "") {
                this.mensagemErro = inicio + mensagem;
                this.valido = false;
            }
        },
    },
    watch: {
        valido() {
            this.$emit("validado", this.valido, this.indice);
        }
    },
    computed: {
        iconValido() {
            if (this.mensagemErro == "") {
                return undefined;
            }
            else if (this.mensagemErro == "válido") {
                return true;
            }
            else {
                return false;
            }
        }, 
        corValido() {
            if (this.mensagemErro == "") {
                return "#c0c0c0";
            }
            else if (this.mensagemErro == "válido") {
                return "#80FF80";
            }
            else {
                return "#FF8080";
            }
        }
    },
    components: { IconValido }
}
</script>

<template>
<div class="input-nome">
    <div :class="`in ${(aberto) ? 'aberto' : ''}`">
        <label @click="abrirInput()" :for="nome">{{nome}} <IconValido :estado="iconValido" style="width: 3ch; height: 90%;"/></label>
        <input :type="tipo" v-model="valor" @input="validar()" :id="nome">
     
    </div>
    <p class="mensagem">{{ mensagemErro }}</p>
</div>
</template>

<style lang="scss" scoped>
.input-nome {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    
    flex-direction: column;
    justify-content: center;
}
.in {
    color: #000;
    width: fit-content;
    display: flex;
    
    border-radius: 10px;
    height: 2rem;
    background-color: $bg-cor2;
    overflow: hidden;
    border: solid 2px v-bind(corValido);
}


label {
    display: inline-block;
    height: 100%;
    background-color:v-bind(corValido);
    padding-inline: 10px;
    display: flex;
    justify-content: center;
} 

.aberto {
    input {
        width: 100%;
        padding-inline: 5px;
    }
}  

input {
    display: block;
    background-color: transparent;
    border: none;
    outline: none;
    width: 0;
    
    color: #fff;

    &:focus {
        background-color: $bg-cor1;
    }

}

.mensagem {
    text-align: center;
    color: v-bind(corValido);
}
</style>