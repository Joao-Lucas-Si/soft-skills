<template>
<div class="quiz">
    <div :class="`etapa ${(etapa == 1)? 'atual': ''}`">
        <h3 class="titulo">{{ nome }}</h3>
        <button @click="passarEtapa()">começar</button>
    </div>
    <div :class="`etapa ${(etapa == 2)? 'atual': ''}`">
        <div class="questao" v-for="questao in questoes" :key="questao.index" :class="(questao.index == questaoAtual) ? 'atual' : ''">
            <h3 class="titulo">{{ questao.pergunta }}</h3>

            <ol class="alternativas">
                <li class="alternativa" v-for="alternativa in questao.alternativas">
                    <button @click="alternativaSelecionada = alternativa.indice"  :class="`botao ${(alternativaSelecionada == alternativa.indice) ? 'selecionada': ''}`">
                        {{ alternativa.indice }}
                    </button>
                    <span>{{ alternativa.texto }}</span>
                </li>
            </ol>
            <button class="responder" @click="verificarResposta()">responder</button>
        </div>
    </div>
    <div :class="`etapa ${(etapa == 3)? 'atual': ''}`" >
        <h3 class="titulo">você acertou {{ acertos.length }} de {{ questoes?.length }}</h3>

        <button @click="resetar()">fazer de novo</button>
        <button @click="passarEtapa()">ver respostas</button>
    </div>
    <div :class="`etapa respostas ${(etapa == 4)? 'atual': ''}`" >
        <h3 class="titulo">respostas</h3>
        <Resposta v-for="questao in questoes"
            :resposta-certa="questao.resposta" 
            :resposta-selecionada="respostas[questao.index - 1]" 
            :pergunta="questao.pergunta" 
            :acertos="acertos" 
            :indice="questao.index" 
            :resposta-certa-texto="questao.alternativas.find(alternativa => {
                if (alternativa.indice == questao.resposta){
                    return alternativa
                }
            })?.texto" 
            :resposta-selecionada-texto="questao.alternativas.find(alternativa => {
                if (alternativa.indice ==respostas[questao.index - 1]){
                    return alternativa
                }
            })?.texto" />
    </div>
</div>
</template>

<script lang="ts">
import Resposta from './Resposta.vue'
interface alternativa {
    indice: string, 
    texto: string
}

interface questao {
    index: number,
    pergunta: string,
    alternativas: alternativa[],
    resposta: string
}

interface data {
    acertos: number[],
    respostas: string[],
    etapa: number,
    questaoAtual: number,
    alternativaSelecionada: string,
}

export default {
    data(): data {
        return {
            acertos: [],
            respostas: [],
            etapa: 1,
            questaoAtual: 1,
            alternativaSelecionada: ""
        };
    },
    props: {
        nome: String,
        questoes: {
            type: Object as () => questao[],
            required: true
        }
    },
    methods: {
        verificarResposta() {
            if (this.alternativaSelecionada == this.questoes[this.questaoAtual - 1].resposta) {
                this.acertos.push(this.questaoAtual);
            }
            this.respostas.push(this.alternativaSelecionada);
            this.alternativaSelecionada = ""
            this.passarEtapa();
        },
        passarEtapa() {
            (this.etapa == 2 && this.questaoAtual != this.questoes?.length) ? this.questaoAtual += 1 : this.etapa += 1;
            console.log(this.etapa);
        },
        resetar() {
            this.etapa = 1;
            this.questaoAtual = 1;
            this.alternativaSelecionada = "";
            this.acertos = [];
            this.respostas = [];
        },
    },
    components: { Resposta }
}
</script>

<style lang="scss" scoped>
.quiz {
    width: 75%;
    min-height: 50vh;
    background-color: var(--color-background-mute);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
    padding: 5%;
    margin-block: 40px;
    border: 10px groove $cor-destaque;
}

.etapa {
   
    & ,.questao {
        display: none;

        &.atual {
            display: flex;
            justify-content: center;
            align-items: center;
            
            flex-direction: column;
        }
    }
}

.respostas {
        gap: 5vh;
    
}

.alternativas {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2ch;
    width: 100%;

    .alternativa {
        display: grid;
        grid-template-columns: 10% 90%;
        overflow: hidden;
        width: 100%;
        align-items: center;
        border: solid 3px $cor-destaque;
        border-radius: 10px;

        .botao {
            position: relative;
            height: 100%;
            text-align: center;
            border: none;
            margin-right: 5px;
            outline: none;
            
            &.selecionada {
                background-color: $cor-destaque;
            }
        }

        
    }
}
</style>
