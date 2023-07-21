<script lang="ts">

import InputNome from './InputNome.vue';
import InputEmail from './InputEmail.vue';

import TextArea from './TextArea.vue';
import InputRadios from './InputRadios.vue';

export default {
    methods: {
        validarAssunto(): boolean {
            return true;
        },
        validarTodos(): boolean {
            let validacao: number = Number(this.validarAssunto());
            console.log(validacao);
            if (validacao == 5) {
                return true;
            }
            else {
                return false;
            }
        },
        submit() {
            if (this.validarTodos()) {
                this.$emit("submit");
            }
        }
    },
    components: { InputNome, InputEmail, InputRadios, TextArea }
}
</script>

<template>
<form @submit.prevent="submit()" action="mailto:" method="post" novalidate>
    <h2 class="titulo">entre em contato</h2>
    <img src="/contato.svg" alt="">
    <div class="barra">
        <div class="progresso"></div>
    </div>
    <InputNome />
    <InputEmail />
    <InputRadios titulo="assunto" nome="assunto" :radios="['bug', 'critica']"/>
    <TextArea />
    <button type="submit">enviar</button>
</form>
</template>


<style lang="scss">
</style>
