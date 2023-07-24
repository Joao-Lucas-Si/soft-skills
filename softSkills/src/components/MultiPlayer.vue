<template>
<div class="player">
    <div class="video">
        <player-video :video="videos[videoAtual - 1]"/>
    </div>
    <div class="videos">
        <h3 class="titulo">opções</h3>
        <img :src="video.capa" alt="" v-for="video in videos" :key="video.indice" :class="(video.indice == videoAtual) ? 'atual' : ''" @click="mudarVideo(video.indice)">
    </div>
</div>
</template>

<script lang="ts">
import PlayerVideo from './PlayerVideo.vue';
interface videos {
    indice: number,
    video: string,
    capa: string,
    titulo: string
}
export default {
    data() {
        return {
            videoAtual: 1,
        };
    },
    props: {
        videos: {
            type: Object as () => videos[],
            required: true
        }
    },
    methods: {
        mudarVideo(video: number) {
            this.videoAtual = video;
        },
    },
    components: { PlayerVideo }
}
</script>

<style lang="scss" scoped>
.video {
    padding-right: 5%;
}
.player {
    display: grid;
    grid-template-columns: 80% 20%;
    padding: 2% 5%;
}

.videos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    

    img {
        width: 100%;
        border-radius: 10px;
        filter: grayscale(70%);
        border: 0px $cor-destaque solid;
        transition: all 0.5s;

        &:hover, &.atual {
            filter: grayscale(0%);
        }

        &.atual {
            border: 5px $cor-destaque solid;
        }
    }
}
</style>