<script lang="ts">

import Input from './Input.vue';

import TextArea from './TextArea.vue';
import Radios from './Radios.vue';

import BotaoSimples from './BotaoSimples.vue';
export default {
    data() {
        return {
            validos: [false, false, false, false],
        }
    },
    computed: {
        progresso() {
            
            return this.validos.reduce((acumulado, atual)=> {
                if (atual == true) {
                    return acumulado + 25;
                }
                return acumulado
            }, 0) + "%"
        },
        enviar() {
            return this.validos.reduce((acumulado, atual)=> {
                if (atual == true) {
                    return acumulado + 1;
                }
                return acumulado
            }, 0) == this.validos.length   
        }
    },
    methods: {
        validar(valido : boolean, indice: number): void {
            this.validos[indice] = valido
        },
        
        submit() {
            return true
        }
    },
    components: { Input, Radios, TextArea, BotaoSimples }
}
</script>

<template>
<form @submit.prevent="submit()" action="mailto:" method="post" novalidate>
    <h2 class="titulo">entre em contato</h2>
    <div class="barra">
        <div class="progresso" :style="`width: ${progresso};`"></div>
    </div>
    <div class="conteudo">
        <div class="imagem">
            <img src="/contato.svg" alt="">
        </div>
        <div class="formulario">
            <Input :indice="0" @validado="validar" tipo="text" nome="nome"/>
            <Input :indice="1" @validado="validar" tipo="email" nome="email"/>
            
            <Radios :indice="2" @validado="validar"  titulo="assunto" nome="assunto" :radios="['bug', 'critica', 'dúvida', 'sugestão']"/>
            <TextArea @validado="validar" :indice="3" />
            <div class="botoes">
                <BotaoSimples @clicado="submit()" :habilitado="enviar" tipo="submit" texto="enviar" />
               
            </div>
            
        </div>
    </div>
</form>
</template>


<style lang="scss" scoped>
.formulario {
    padding-block: 50px;
    background-color: $bg-cor3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
    width: 100%;
    
   
}

form {
    
    background-color: $bg-cor2;
    width: 70%;
    margin: auto;
    margin-block: 5%;
    border-radius: 30px;
    overflow: hidden;
}

.barra {
    justify-self: flex-start;
    background-color: #c0c0c0;
    width: 100%;
    height: 2ch;

    .progresso {
        transition: all 1s ease-in-out;
        background-color: $cor-destaque;
        height: 100%;
    }
}
.imagem {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
        width: 95%;
        height: 90%;

    }
}
.conteudo {
    height: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    
    align-items: center;
}
</style>
