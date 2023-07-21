<template>
<div class="player-video">
        
    <video preload="auto" @timeupdate="carregarBarra()" ref="player" :poster="video.capa" :src="video.video"></video>
    <div class="opcoes">
        <h3 class="titulo">{{ video.titulo }}</h3>
        <div>
            <div class="controles">
                <div>
                    <button class="skip antes" @click="skip(-15)">-</button>
                    <button class="pause-play" @click="pausarRodarVideo()"><IconPause  v-if="rodando" /><icon-play v-else/></button>
                    <button class="skip depois" @click="skip(15)">+</button>
                </div>
                <div>
                    <div class="som">
                        <icon-volume :nivel="volume" />
                        <input type="range" v-model="volume" name="" step="0.01" min="0" max="1" id="" @input="player.volume = volume">
                    </div>
                    <select class="velocidade" name="" id="" v-model="velocidadeVideo" @change="player.playbackRate = velocidadeVideo">
                        <option v-for="velocidade in [0.1, 0.5, 1.0, 1.5, 2.0]" :value="velocidade" :selected="velocidade == 1.0">{{velocidade}}</option>
                    </select>
                </div>
            </div>
            <div class="barra-progresso">
            
                <h4>{{ tempoAssistido }}</h4>
                <div class="barra">
                    <div class="progresso" :style="`width: ${progresso};`"></div>
                </div>
                <h4>{{ duracao }}</h4>
            
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import IconPlay from "./icons/IconPlay.vue"
import IconPause from "./icons/IconPause.vue"
import IconVolume from './icons/IconVolume.vue';

interface videos {
    indice: number,
    video: string,
    capa: string,
    titulo: string
}
interface data { 
    tempoAssistido: string,
    progresso: string,
    duracao: string,
    rodando: boolean,
    volume: number,
    velocidadeVideo: number,
}
export default {
    data(): data {
        return {
            tempoAssistido: "00:00",
            progresso: "0%",
            duracao: "00:00",
            rodando: true,
            volume: 1.0,
            velocidadeVideo: 1,
        }
    },
    props: {
        video: {
            type: Object as () => videos,
            required: true
        }
    },
    methods: {
        skip(tempo: number) {
            this.player.currentTime += tempo
        },

        pausarRodarVideo() {
            (this.player.paused) ? this.player.play() : this.player.pause()
            this.rodando = this.player.paused
        },

        carregarBarra() {
            
            const progresso = (this.player.currentTime / this.player.duration) * 100
            this.obterDuracao()
            this.progresso = progresso + "%"
            let tempo = new Date(this.player.currentTime * 1000)
            this.tempoAssistido = `${tempo.getMinutes().toString().padStart(2, '0')}:${tempo.getSeconds().toString().padStart(2, '0')}`
        },

        obterDuracao() {
            setTimeout(() => {
                const tempo =  new Date(this.player.duration * 1000)
                this.duracao = `${tempo.getMinutes().toString().padStart(2, '0')}:${tempo.getSeconds().toString().padStart(2, '0')}`
            }, 200);
            
        }
    },
    setup() {
        const player: HTMLVideoElement = ref("")

        return {
            player
        }
    },
    watch: {
        video() {
            this.rodando = true
            this.player.volume = this.volume
            this.velocidadeVideo = 1.0

        }
    },
    components: { IconPause, IconPlay, IconVolume }
}
</script>

<style lang="scss" scoped>
.velocidade {
    background-color: $cor-destaque;
    border: solid #000 2px;
    border-radius: 5px;
    color: #000;

    option {
        border: solid #000 2px;
    }
}
.som {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        height: 3.5ch;
    }
}



    

.player-video {
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 20px;

    .opcoes {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        display :flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2% 2%;

        > * {
            display: none;
        }

        &:hover {
            background-image: linear-gradient(var(--color-background-soft) , transparent 30%, var(--color-background-soft) );
                > * {
                display: flex;
                flex-direction: column;
                width:100%;
                gap: 10px;
            }
        }
    }

    h3 {
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
}
button {
    height: 2rem;
    background-color: transparent;
    width: 2rem;

    svg {
        width: 100%;
        height: 100%;
    }
}

.controles {
    display: flex;
    justify-content: space-between;

    > div {

        &:first-of-type {
            display: flex;
            

            button {
                border-radius: 10px;
                background-color: var(--color-background);
                color: $cor-destaque;
                border: solid $cor-destaque 2px;
            }
        }
        display: flex;
        align-items: center;
        gap: 5px;
    }
}


video {
    width: 100%;
    height: 100%; 
}

    


.barra-progresso {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    &:hover {
        display: flex;
    }

    .barra {
        width: 100%;
        background-color: #c0c0c0;
        border-radius: 20px;
        overflow: hidden;
    }

    .progresso {
        background-color: $cor-destaque;
        height: 1.5ch;
        border-radius: 10px;
    }
}
</style>