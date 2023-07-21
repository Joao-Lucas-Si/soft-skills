<template>
<div :class="`resposta `" >
    <div>
        <button @click="mostrarRespostas()">{{ (acertos?.includes(indice)) ? 'V' : 'X' }}</button>
        <p>{{ pergunta }}</p>
    </div>
    <dl :class="(respostaVisivel) ? 'visivel': ''">
        <div class="certa">
            <dt>resposta certa</dt>
            <dd>
                {{ respostaCerta }}
                <div>{{ respostaCertaTexto }}</div>
            </dd>
        </div>
        <div>
            <dt>sua resposta</dt>
            <dd>
                {{ respostaSelecionada }}
                <div>{{ respostaSelecionadaTexto }}</div>
            </dd>
        </div>
    </dl>
</div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            respostaVisivel: false
        }
    },
    props: {
        pergunta: {
            type: String,
            required: true
        },
        respostaCerta:  {
            type: String,
            required: true
        },
        respostaCertaTexto:  {
            type: String,
            required: true
        },
        respostaSelecionada:  {
            type: String,
            required: true
        },
        respostaSelecionadaTexto: {
            type: String,
            required: true
        },
        acertos:  {
            type: Array<Number>,
            required: true
        }, 
        indice: {
            type: Number,
            required: true
        }
    },
    methods: {
        mostrarRespostas() {
            this.respostaVisivel = !this.respostaVisivel
        }
    },
    computed: {
        corAcerto() {
            return (this.acertos?.includes(this.indice)) ? 'var(--cor-destaque)' : '#f00' 
        }
    }
}
</script>

<style lang="scss" scoped>

.resposta {
    --cor-acerto: v-bind(corAcerto);
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px var(--cor-acerto) solid;
    border-radius: 5px;
    overflow: hidden;

    > div {
        background-color: var(--color-background-soft);
        display: flex;

        button {
            padding-block: 10px;
            background-color: var(--cor-acerto);
            color: #000;
            border: none;
            padding-inline: 20px;
            cursor: pointer;
            outline: none;
        }

        p {
            padding-left: 20px;
        }
    }

    dl {
        display: none;
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 10%;
        padding-inline: 10%;
        width: inherit;
        background-color: var(--color-background);

        &.visivel {
            display: flex;
        }

        .certa {
            dt, dd {
                background-color: var(--cor-destaque);
            }
        }

        dt {
            background-color: var(--cor-acerto);
            color: #000;
            width: 100%;
            padding-inline: 20px;
            font-size: 1.25rem;
        }

        dd {
            background-color: var(--cor-acerto);
            padding-inline: 20px;
            width: 100%;
            color: #fff;
        }

        > div {
            max-width: 40%;
            height: 100%;
        }
    }
}
</style>