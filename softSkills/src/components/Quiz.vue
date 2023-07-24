<template>
<div class="quiz">
    <div :class="`etapa ${(etapa == 1)? 'atual': ''}`">

        <h3 class="titulo">{{ nome }}</h3>
        <Paragrafos :texto="textoInicio" />
        <BotaoSimples @clicado="passarEtapa()" texto="começar" />
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
            
            <BotaoSimples :habilitado="alternativaSelecionada !=''" @clicado="verificarResposta()" texto="responder" />
        </div>
    </div>
    <div :class="`etapa ${(etapa == 3)? 'atual': ''}`" >
        <h3 class="titulo">você acertou {{ acertos.length }} de {{ questoes?.length }}</h3>
        <p>{{ mensagemFinal }}</p>
        <div class="opcoes-finais">
            <BotaoSimples @clicado="resetar()" texto="fazer de novo" />
            <BotaoSimples @clicado="passarEtapa()" texto="ver respostas" />
        </div>
    </div>
    <div :class="`etapa respostas ${(etapa == 4)? 'atual': ''}`" >
        <h3 class="titulo">respostas</h3>
        <Resposta v-for="questao in questoes"
            :resposta-certa="questao.resposta" 
            :resposta-selecionada="respostas[questao.index - 1]" 
            :pergunta="questao.pergunta" 
            :acertos="acertos" 
            :indice="questao.index" 
            :resposta-certa-texto="String(questao.alternativas.find(alternativa => {
                if (alternativa.indice == questao.resposta){
                    return alternativa
                }
            })?.texto)" 
            :resposta-selecionada-texto="String(questao.alternativas.find(alternativa => {
                if (alternativa.indice ==respostas[questao.index - 1]){
                    return alternativa
                }
            })?.texto)" />
    </div>
</div>
</template>

<script lang="ts">
import Resposta from './Resposta.vue'
import BotaoSimples from './BotaoSimples.vue';
import Paragrafos from './Paragrafos.vue';
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
    mensagensFinais: string[]
}

export default {
    data(): data {
        return {
            acertos: [],
            respostas: [],
            etapa: 1,
            questaoAtual: 1,
            alternativaSelecionada: "",
            mensagensFinais: [
                "isso não é algo ruim, sempre há outra change",
                "tudo tem um começo, tente ir melhor na próxima",
                "quase lá",
                "você foi excelente"
            ] 
        };
    },
    props: {
        nome: String,
        textoInicio: String,
        questoes: {
            type: Object as () => questao[],
            required: true
        }
    },
    computed: {
        mensagemFinal() {
            switch(this.acertos.length)  {
                case 0:
                    return this.mensagensFinais[0]
                    break 
                case this.questoes?.length:
                    return this.mensagensFinais[3]
                    break 
                case this.questoes?.length - 1:
                    return this.mensagensFinais[2]
                    break 
                default:
                    return this.mensagensFinais[1]
                    break
            }
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
    components: { Resposta, BotaoSimples, Paragrafos }
}
</script>

<style lang="scss" scoped>

.opcoes-finais {
    display: flex;
    gap: 10px;
}
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
            gap: 10px;
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
