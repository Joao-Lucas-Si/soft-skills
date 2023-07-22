<template>
<div class="text-area">
    <div class="in">
        <label @click="abrirInput()" for="mensagem">mensagem <IconValido style="height: 100%; width: 3ch;" :estado="iconEstado"/></label>
        <textarea v-model="valor" rows="10" re :class="aberto ? 'aberto' : ''" @input="validar()" id="mensagem"></textarea>
    </div>
    <p class="mensagem">{{ mensagemErro }}</p>
</div>
</template>

<script lang="ts">
import { useNomeStore } from '@/stores/nome'
import IconValido from './icons/IconValido.vue'

export default {
    props: {
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
        validar(): void {
            const nomeStore = useNomeStore();
            const inicio = `senhor(a)${(nomeStore.nome != "") ? " " + nomeStore.nome.trim() : ""}, por favor, `;
            let mensagem = "";
            if (this.valor == "") {
                mensagem = "informe sua mensagem";
            }
            else if (this.valor.trim() == "") {
                mensagem = "preencha corretamente seu nome, espaços em brancos não são validos";
            }
            else if (this.valor.length < 5) {
                mensagem = "sua mensagem deve ter no mínimo 5 caracteres";
            }
            else {
                this.mensagemErro = "valido";
                this.valido = true;
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
        corValido() {
            if (this.mensagemErro == "") {
                return "#c0c0c0";
            }
            else if (this.mensagemErro == "valido") {
                return "#80FF80";
            }
            else {
                return "#FF8080";
            }
        },
        iconEstado() {
            if (this.mensagemErro == "") {
                return undefined;
            }
            else if (this.mensagemErro == "valido") {
                return true;
            }
            else {
                return false;
            }
        },
    },
    components: { IconValido }
}
</script>

<style lang="scss" scoped>
.text-area {
    width: 80%;
    margin: auto;
}
.in {
    display: flex;
    border: solid 2px v-bind(corValido);
    flex-direction: column;
    
    border-radius: 10px;
    overflow: hidden;
}
label {
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: v-bind(corValido);
    color: #000;
}

.mensagem {
    text-align: center;
    color: v-bind(corValido);
}

textarea {
    height: 0px;
    background-color: transparent;
    border: none;
    outline: none;
    resize: none;
    color: #fff;

    &:focus {
        background-color: $bg-cor1;
    }
    &.aberto{
        padding: 5px;
        height: 100%;
    }
}

</style>