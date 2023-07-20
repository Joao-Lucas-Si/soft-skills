<template>
<div  class="player-audio">
    <h2 class="titulo">Áudio</h2>
    <div>
    <div>
        
        <audio ref="player" @timeupdate="carregarBarra()"  :src="audio"></audio>
        <div class="player">
            <div>
                <button class="skip antes" @click="skip(-15)">-</button>
                <button class="pause-play" @click="rodarPausarAudio()"><IconPause  v-if="rodando" /><icon-play v-else/></button>
                <button class="skip depois" @click="skip(15)">+</button>
            </div>
            <div>
                
                <div class="barra-progresso">
            
                    <h4>{{ tempoAssistido }}</h4>
                    <div class="barra">
                        <div class="progresso" :style="`width: ${progresso}%;`"></div>
                    </div>
                    <h4>{{ duracao }}</h4>
                
                </div>
            </div>
            <div>
                <div class="som">
                    <icon-volume :nivel="volume" />
                    <input type="range" v-model="volume" name="" step="0.01" min="0" max="1" id="" @input="player.volume = volume">
                </div>
                <select class="velocidade" name="" id="" v-model="velocidadeAudio" @change="player.playbackRate = velocidadeAudio">
                    <option v-for="velocidade in [0.1, 0.5, 1.0, 1.5, 2.0]" :value="velocidade" :selected="velocidade == 1.0">{{velocidade}}</option>
                </select>
            </div>
           
        </div>
        
        <h3 class="titulo">{{ titulo }}</h3>

    </div>
    <img :src="capa" alt="">
    </div>
</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import IconPause from './icons/IconPause.vue';
import IconPlay from './icons/IconPlay.vue';
import IconVolume from './icons/IconVolume.vue';

export default {
    data(){
        return {
            rodando: true ,
            volume: 1,
            velocidadeAudio: 1, 
            tempoAssistido: "00:00",
            progresso: 0,
            duracao: "00:00"
        }
    },
    props: {
        capa: {
            type:String,
            required: true,
        },
        audio: {
            type:String,
            required: true,
        },
        titulo: {
            type:String,
            required: true,
        },
    },
    methods : {
        rodarPausarAudio() {
            (this.player.paused) ? this.player.play() : this.player.pause()
            this.rodando = this.player.paused
        },
        skip(tempo: number) {
            this.player.currentTime += tempo
        },
        carregarBarra() {
            
            const progresso = (this.player.currentTime / this.player.duration) * 100
            this.obterDuracao()
            this.progresso = progresso
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
        const player: HTMLAudioElement = ref()  

        return {
            player
        }
    },
    components: { IconPause, IconPlay, IconVolume }
}
</script>


<style lang="scss" scoped>
.player-audio {
    
    background-color: $bg-cor2;
    border-radius: 20px;
    border: double 10px $cor-destaque;
    margin-inline: 5%;
    padding: 30px;

    > div {
        display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;

    > div{
        
        height: min-content;
        padding-right: 30px;
    }
    }
    
    
    img {
        
  
        width: 100%;
    }
}

.velocidade {
    background-color: $cor-destaque;
    border: solid #000 2px;
    border-radius: 5px;
    color: #000;
    outline: none;
    option {
        border: solid #000 2px;
    }
}

.player {
    display: grid;
    grid-template-columns: 1fr 55% 1fr;
    justify-items: center;
    align-content: center;
    height: 4rem;
    width: 100%;
    
    padding: 20px;
    padding-right: 50px;
    gap: 10px;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        width: 100%;
    }
}

button {
    height: 2rem;
    width: 2rem;
    outline: none;
    background-color: transparent;
    color: $cor-destaque;
    border: solid 2px $cor-destaque;
    border-radius: 5px;
    font-size: 1.5rem;
    text-align: center;
    

    svg {
        height: 100%;
        width: 100%;
    }
}

.barra-progresso {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    .barra {
        width: 100%;
        background-color: #c0c0c0;
        border-radius: 10px;
        overflow: hidden;
    }

    .progresso {
        background-color: $cor-destaque;
        height: 1.5ch;
        border-radius: 10px;
    }
}

.som {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        height: 100%;
        width: 3rem;
    }
} 
 </style>